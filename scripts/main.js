
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
//   const outputElement = document.querySelector("#doctor")

  const firstBill = bill[0]

  // Now iterate its keys
  outputElement.innerHTML += "<h1>Bill</h1>"
  for (const key of Object.keys(firstBill)) {
    outputElement.innerHTML += `<div>${key}</div>`
  }
  
  // Iterate the array of cars. Individual objects stored in `car`.
  outputElement.innerHTML += "<h1>Doctor</h1>"
  bill.forEach(bill => {
  
      // Iterate all of the values of the current car
      for (const value of Object.values(bill)) {
        outputElement.innerHTML += `<div>${value}</div>`
      }
  })