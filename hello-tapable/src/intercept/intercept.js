const { SyncHook } = require('tapable');

const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

// ========================
// 拦截器
// ========================

hook.intercept({
  // 每次调用 hook 实例的 tap() 方法注册回调函数时, 都会调用该方法,
  // 并且接受 tap 作为参数, 还可以对 tap 进行修改;
  register: (tapInfo) => {
    console.log(`${tapInfo.name} is doing its job`);
    return tapInfo; // may return a new tapInfo object
  },

  // 通过hook实例对象上的call方法时候触发拦截器
  call: (arg1, arg2, arg3) => {
    console.log('Starting to calculate routes');
  },

  // 在调用被注册的每一个事件函数之前执行
  tap: (tap) => {
    console.log(tap, 'tap');
  },

  // loop类型钩子中 每个事件函数被调用前触发该拦截器方法
  loop: (...args) => {
    console.log(args, 'loop');
  },
});

// ========================
// 验证
// ========================

// 注册事件 register
hook.tap('flag1', (arg1, arg2, arg3) => {
  console.log('flag1:', arg1, arg2, arg3);
});

hook.tap('flag2', (arg1, arg2, arg3) => {
  console.log('flag2:', arg1, arg2, arg3);
});

// 调用事件并传递执行参数 call
hook.call('19Qingfeng', 'wang', 'haoyu');
