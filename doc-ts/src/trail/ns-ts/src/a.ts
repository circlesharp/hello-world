/// <reference path="ns.ts" />

// example 1
namespace NS {
  const testAB: NSA = aa;
  console.log(233, testAB);
}

// example 2
const testAB: NS.NSA = NS.aa;
console.log(244, testAB);
