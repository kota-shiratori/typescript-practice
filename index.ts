//string
const firstName = "白鳥";

//number
const age = 26;

//boolean
let isMarried = false;

//Date
let birthday = new Date("1997/05/16");

//Union
let color: "red" | "yellow" | "green" = "red";
let rank: "s" | "a" | "b" | "c" | "d" = "s";

//any
let AnyData: any = "文字列";
AnyData = 1;
AnyData = true;
AnyData = new Date("1997/05/16");

//void
let funcLog = () => {
  console.log("ログを出力");
};

let funcSum = (a: number, b: number) => {
  return a + b;
};

funcSum(1, 2);

//オブジェクト
let object = {
  name: "白鳥",
  age: 26,
  isHuman: true,
  birthday: new Date("1997/05/16"),
};

//型エイリアス
type User = {
  name: string;
  age: number;
  isHuman: boolean;
  birthday: Date;
  phoneNumber?: string;
};

let user: User = {
  name: "白鳥",
  age: 26,
  isHuman: true,
  birthday: new Date("1997/05/16"),
};

//配列
let array: number[] = [1, 2, 3, 4, 5];
let array2: Array<number> = [1, 2, 3, 4, 5];

//タブル
let tuple: [string, number, boolean] = ["白鳥", 26, true];

let userArray: User[] = [
  {
    name: "白鳥",
    age: 26,
    isHuman: true,
    birthday: new Date("1997/05/16"),
  },
];

type UserDetail = {
  prefecture: string;
  sex: string;
};

type UserDetailInfo = User & UserDetail;

let user2: UserDetailInfo = {
  name: "白鳥",
  age: 26,
  isHuman: true,
  birthday: new Date("1997/05/16"),
  prefecture: "愛知県",
  sex: "男性",
};

type UserDetailInfo2 = {
  user: User;
  userDetail: UserDetail;
};

let user3: UserDetailInfo2 = {
  user: {
    name: "白鳥",
    age: 26,
    isHuman: true,
    birthday: new Date("1997/05/16"),
  },
  userDetail: {
    prefecture: "愛知県",
    sex: "男性",
  },
};
