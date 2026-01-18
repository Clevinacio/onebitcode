function step2() {
  setTimeout(() => {
    console.log("This is step 2");
  }, 1000 * 2);
}

console.log("This is step 1");
step2();
console.log("This is step 3");
