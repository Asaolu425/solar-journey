const form = document.getElementById("calc-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const usage = Number(document.getElementById("usage").value);

  if (usage <= 0) {
    result.textContent = "Enter a number greater than 0.";
    return;
  }

  const size = usage / 4;
  const panels = Math.ceil((size * 1000) / 400);

  result.textContent =
    "You need about " + size.toFixed(1) + " kW of solar, roughly " +
    panels + " panels of 400W.";
});