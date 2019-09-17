
const bill = {
    officeName: "Bills Dr.",
    streetAddress: "301 Plus Park",
    patientName: "Brenda",
    visitDate: "09/16/2019",
    amountBilled: "$100",
    dueDate: "09/18/2019",
}
// const dateVisited = bill["visitDate"]
// const amountBilled = bill["amountBilled"]
// const patientName = bill["patientName"]

/* id in html*/
const outputElement = document.querySelector("#doctor")

for (const value of Object.values(bill)) {
    outputElement.innerHTML += `<div>${value}</div>`
    console.log(value);
  }
  for (const key of Object.keys(bill)) {
      console.log(key);
  }
/* 0 represents the key and 1 represents the value*/
  for (const entry of Object.entries(bill)) {
      console.log(entry[0],": ", entry[1]);
  }

