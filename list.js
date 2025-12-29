console.log("✅ list.js loaded");

const tableBody = document.getElementById("importsTable");

fetch("http://localhost:5000/api/import/list")
  .then(res => res.json())
  .then(res => {
    console.log("API DATA:", res);

    tableBody.innerHTML = "";

    res.data.forEach(item => {
      tableBody.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.source}</td>
          <td>${item.status}</td>
        </tr>
      `;
    });
  })
  .catch(err => console.error(err));
