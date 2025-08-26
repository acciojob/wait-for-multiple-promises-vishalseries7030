const output = document.getElementById("output");

// 1️⃣ Add "Loading..." row initially with id="loading"
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

// 2️⃣ Function to create a promise that resolves in 1–3 seconds
function createPromise(name) {
  const delay = (Math.random() * 2 + 1).toFixed(3); // between 1–3 seconds
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

// 4️⃣ Wait for all promises
Promise.all(promises).then((results) => {
  // Remove loading row
  output.innerHTML = "";

  // Add each resolved promise row
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // 5️⃣ Calculate total as the max of all promise times
  const maxTime = Math.max(...results.map((r) => parseFloat(r.time))).toFixed(3);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${maxTime}</td>`;
  output.appendChild(totalRow);
});
