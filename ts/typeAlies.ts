type strOrNum = string | number;
type userType = { name: string; age: number; isMarred: boolean };

let userObj: {
  id: strOrNum;
  userInfo: userType;
};

userObj = {
  id: 10,
  userInfo: { name: "Mohammad Farhad", age: 19, isMarred: false },
};

// console.log(userObj);
