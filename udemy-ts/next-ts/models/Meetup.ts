export const example_images = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.fxxz.com%2Fup%2F2021-10%2F202110181016342370.png&refer=http%3A%2F%2Fpic.fxxz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646049031&t=47ba8d089c83646bdbda78f9f613bec2',
  'https://img0.baidu.com/it/u=3976887001,1057784436&fm=253&fmt=auto&app=138&f=JPEG?w=160&h=160',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1-im.guokr.com%2FZnUfSqA_PBmyG4cvtHU2JyKVh7rAlkGccKGHbRKjAl-gAAAAoAAAAEpQ.jpg%3FimageView2%2F1%2Fw%2F160%2Fh%2F160&refer=http%3A%2F%2F1-im.guokr.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646049053&t=3dbb95ea0ca77b7364f60bf42926c45e',
];

export interface Meetup {
  _id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export default Meetup;
