// ===============================
// IMPORT BUTTON (index.html)
// ===============================
const importBtn = document.getElementById("importBtn");

if (importBtn) {
  const folderInput = document.getElementById("folderUrl");
  const message = document.getElementById("message");

  importBtn.addEventListener("click", async () => {
    const folderUrl = folderInput.value.trim();

    if (!folderUrl) {
      message.textContent = "Please enter a Google Drive folder URL";
      return;
    }

    message.textContent = "Submitting import job...";

    try {
      const response = await fetch(
        "http://localhost:5000/api/import/google-drive",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ folderUrl }),
        }
      );

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      message.textContent = `✅ Import queued (ID: ${data.importId})`;

      setTimeout(() => {
        window.location.href = "list.html";
      }, 1000);

    } catch (err) {
      console.error(err);
      message.textContent = "❌ Server not reachable";
    }
  });
}

// ===============================
// IMPORT HISTORY (list.html)
// ===============================
const importsTable = document.getElementById("importsTable");

if (importsTable) {
  fetch("http://localhost:5000/api/import")
    .then(res => res.json())
    .then(data => {
      importsTable.innerHTML = "";

      data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.source}</td>
          <td>${item.status}</td>
        `;
        importsTable.appendChild(row);
      });
    })
    .catch(err => {
      console.error("Failed to load imports", err);
    });
}

// =============================
// Import History Page Logic
// =============================
const tableBody = document.getElementById("importsTable");

if (tableBody) {
  fetch("http://localhost:5000/api/import/list")
    .then(res => res.json())
    .then(result => {
      tableBody.innerHTML = "";

      result.data.forEach(item => {
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
      console.error("Failed to load imports", err);
    });
}
