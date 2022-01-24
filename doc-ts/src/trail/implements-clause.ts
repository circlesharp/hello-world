interface Checkable {
  a: number;
  check?(name: string): boolean;
}
 
class NameChecker implements Checkable {
  a!: any;
  // check(s: number) {
  //   return s.toLowercse() === "ok";
  // }
}