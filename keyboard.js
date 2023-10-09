const insert = document.getElementById("insert");
const keyTable = document.getElementById("keyTable");
const keyHistory = [];

window.addEventListener("keydown", (e) => {
  keyHistory.push({
    key: e.key === " " ? "Space" : e.key,
    keyCode: e.keyCode,
    code: e.code,
  });

  updateKeyTable();
});

function updateKeyTable() {
  keyTable.innerHTML = `
        <tr>
          <th>Key</th>
          <th>Key-Code</th>
          <th>Code</th>
        </tr>
      `;

  keyHistory.forEach((keyData) => {
    keyTable.innerHTML += `
          <tr>
            <td>${keyData.key}</td>
            <td>${keyData.keyCode}</td>
            <td>${keyData.code}</td>
          </tr>
        `;
  });
}
