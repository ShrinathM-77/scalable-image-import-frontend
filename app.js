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
        "https://scalable-image-import-api-production.up.railway.app/api/import/google-drive",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ folderUrl }),
        }
      );

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      console.log("API response:", data);

      message.textContent = `✅ Import queued (ID: ${data.importId})`;

      // Redirect to history page
      setTimeout(() => {
        window.location.href = "list.html";
      }, 1000);

    } catch (err) {
      console.error(err);
      message.textContent = "❌ Server not reachable";
    }
  });
}
