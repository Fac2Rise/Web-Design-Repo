function generateTable(){
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('columns').value);

    // VAlidate input
    if(isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0){
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    // Create table
    let tableHTML = "<table>";
    for(let i = 1; i <= rows; i++){
        tableHTML += "<tr>";
        for(let j = 1; j <= cols; j++){
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}