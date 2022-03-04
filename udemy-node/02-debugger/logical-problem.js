function mainProblem() {
  return trueProblem();
}

function trueProblem() {
  let a = 1;
  let b = 2;
  a = 34.1;

  b = a;
  return b + a;
}

module.exports = { mainProblem };
