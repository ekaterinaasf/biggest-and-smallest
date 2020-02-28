function saveNumberHandler() {
  debugger;
  // read new number from user input
  const num = Number(document.getElementById("input").value);
  numbers.all.push(num);

  // read from state the data you will need for the next step

  // find the new biggest and smallest values
  let big = Math.max(...numbers.all);
  let small = Math.min(...numbers.all);

  // update state: new biggest, new smallest, new current & save the last current
  numbers.biggest = big;
  numbers.smallest = small;
  numbers.current = num;

  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = big;
  document.getElementById("smallest").innerHTML = small;

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save number",
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  });
  return true;
}
