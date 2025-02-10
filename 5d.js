/*demonstrate the concept of closure by calling the inner function and accessing the outer variable */
function outFunc() {
  let outVar = "outer variable"; // Use proper spacing for readability
  function inFunc() {
    console.log(outVar); // Logs the outer variable
  }
  return inFunc; // Return the inner function
}

const closure = outFunc(); // Get the returned function (closure)
closure(); // Call the closure
