type Printable = string | number;

function print(content: string): string
function print(content: number): number
function print(content: Printable): Printable {
  console.log(content);

  return content;
}

export default print;