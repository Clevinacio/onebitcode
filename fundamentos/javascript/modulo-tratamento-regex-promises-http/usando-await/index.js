async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject(new Error("Both arguments must be numbers"));
  }
  return a + b;
}

async function execute() {
  try {
    const result = await asyncSum(5, 10);
    console.log("Sum:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }

  try {
    const result = await asyncSum(5, "10");
    console.log("Sum:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

execute();
