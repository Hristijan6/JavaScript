let tableFinish = document.getElementById("tableFinish");
let createBtn = document.getElementById("btnComplete");

function createTable(rows, columns) {
    let tableContent = "<table border=2>";
    for (let i = 1; i <= rows; i++) {
        tableContent += "<tr>";
        for (let k = 1; k <= columns; k++) {
            tableContent += `<td>Row-${i} Column-${k}</td>`;
        }
        tableContent += "</tr>";
    }
    tableContent += "</table>";

    tableFinish.innerHTML = tableContent;
}

createBtn.addEventListener("click", function() {
    let rows = parseInt(document.getElementById("rowInput").value);
    let columns = parseInt(document.getElementById("columnInput").value);

    createTable(rows, columns);
});
