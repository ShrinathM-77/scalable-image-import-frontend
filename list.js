console.log("✅ list.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("importsTable");

  if (!tableBody) {
    console.error("❌ importsTable not found");
    return;
  }

  fetch("https://scalable-image-import-api-production.up.railway.app/api/import/list")
    .then(res => res.json())
    .then(res => {
      console.log("📦 API DATA:", res);

      tableBody.innerHTML = "";

      if (!res.data || res.data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No imports found</td></tr>`;
        return;
      }

      res.data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.source}</td>
          <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(err => {
      console.error("❌ Failed to load imports", err);
      tableBody.innerHTML = `<tr><td colspan="3">Error loading data</td></tr>`;
    });
});
