let generateButton = document.querySelector("#generate-btn");
let generateTable = document.querySelector("#generate-table");
let body = document.body;
body.style.margin = "10px";
body.style.padding = "10px";

generateButton.addEventListener("click", function () {
  generateTable.innerHTML = "";
  let rowNumber = window.prompt("Enter number of rows", 1);
  let columnNumber = window.prompt("Enter number of columns", 1);

  for (let i = 0; i < parseInt(rowNumber, 10); i++) {
    let x = generateTable.insertRow(i);
    for (let k = 0; k < parseInt(columnNumber, 10); k++) {
      let y = x.insertCell(k);
      y.innerHTML = `Row - ${i + 1} Column - ${k + 1}`;
    }
  }
});
