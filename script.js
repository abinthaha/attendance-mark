function findSeats(event) {
  let list = document.getElementById("list");
  document.getElementById("list").innerHTML = "";
  let json = {};
  try {
    json = JSON.parse(document.getElementById("json-input").value);
  } catch (err) {
    alert("Enter valid JSON");
  }

  const searchValue = document.getElementById("searchValue").value;
  const arr = [];
  json.items.map((searchItem) => {
    if (
      searchItem.entity.displayName
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) > -1 ||
      (searchItem.entity.reservations &&
        searchItem.entity.reservations[0].reservedFor.displayName
          ?.toLowerCase()
          .indexOf(searchValue.toLowerCase()) > -1) ||
      (searchItem.entity.reservations &&
        searchItem.entity.reservations[0].reservedFor.email
          ?.toLowerCase()
          .indexOf(searchValue.toLowerCase()) > -1)
    ) {
      arr.push(searchItem);
    }
  });
  let str = "";
  arr.forEach((item) => {
    str += `<tr><td>${item.entity.reservations[0].reservedFor.displayName}</td><td>${item.entity.reservations[0].reservedFor.email}</td><td>${item.entity.reservations[0].reservedBy.displayName}</td><td>${item.entity.displayName}</td></tr>`;
  });
  list.innerHTML = str;
}
