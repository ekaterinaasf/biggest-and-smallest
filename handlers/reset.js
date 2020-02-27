function resetHandler() {
  debugger;
  // reset state to initial values
  numbers.biggest = -Infinity;
  numbers.smallest = Infinity;
  numbers.current = 0;
  numbers.all = [];

  // re-render UI with values saved in state
  document.getElementById("input").value = numbers.current;
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;

  // log interaction: handler name, new state
  log.push({
    handler: "reset",
    numbers: JSON.parse(JSON.stringify(numbers))
  });
  return true;
}
