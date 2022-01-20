(function (str: string | Array<string> | null) {
  if (typeof str === 'object') {
    // wrong 因为 null 的也是 object
    // str.forEach
  }
})