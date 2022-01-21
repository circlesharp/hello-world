// wrong: atan2 需要接受 2 个参数
// const args = [8, 5, 6] as const;

// ok: 因为 as const 使得 array immutable
const args = [8, 5] as const;
const angle = Math.atan2(...args);

// ok 因为函数没有对参数作太多要求
const args2 = [8, 5];
function restArgument(...args: Array<number>) {
  return args;
}

restArgument(...args)