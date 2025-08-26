//your JS code here. If required.
// script.js

const output = document.getElementById("output");

// 1️⃣ Add "Loading..." row initially
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

// 2️⃣ Function to create a promise that resolves in 1-3s
function createPromise(name) {
  const delay = (Math.random() * 2 + 1).toFixed(3); // 1-3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}

// 3️⃣ Create 3 promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

const startTime = performance.now();

// 4️⃣ Use Promise.all to wait for all
Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Remove "Loading..." row
  output.innerHTML = "";

  // Add each promise result
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
