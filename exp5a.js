function simulates(callback, delay) {
  if (typeof callback !== "function") {
    throw new Error("The first argument must be a function.");
  }
  if (typeof delay !== "number" || delay < 0) {
    throw new Error(
      "The second argument must be a positive number representing DELAY in milliseconds."
    );
  }

  setTimeout(() => {
    callback();
  }, delay);
}

simulates(() => {
  console.log("Aditya 2310997013");
}, 2000);
