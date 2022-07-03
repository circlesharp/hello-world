// ===================================
// 获取元素宽高
// ===================================
const firstItem = id('musicListItemContainer').findOne();

if (firstItem) {
  const { top, bottom } = firstItem.bounds();
  const itemHeight = Math.abs(bottom - top);
  console.log('itemHeight', itemHeight);
}

// const WastedItem = text('Wasted').findOne().parent().parent();
// console.log(WastedItem);

// ===================================
// 获取设备宽高
// ===================================
const deviceHeight = device.height;
const deviceWidth = device.width;

console.log(deviceHeight, deviceWidth);

// ===================================
// 列表循环
// ===================================
const songsList = firstItem.parent();
const songNames = [];

songsList.children().forEach((songContainer) => {
  const songName = songContainer.findOne(id('songName')).text();
  songNames.push(songName);
});

console.log(songNames);
