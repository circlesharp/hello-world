declare var BMapGL: any;


// 初始化地图插件
const map = new BMapGL.Map('map');
// map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15);

// 获取表单
const formElement = document.querySelector('form')! as HTMLFormElement;
const inputElement = document.querySelector('#address')! as HTMLInputElement;

// 初始化查询
const geoCoder = new BMapGL.Geocoder();

formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault();
  const geoKeyword = inputElement.value;
  geoCoder.getPoint(geoKeyword, handleGetPoint);
}

function handleGetPoint(point: any) {
  map.centerAndZoom(point, 12);
}
