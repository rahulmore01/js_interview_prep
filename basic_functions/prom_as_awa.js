let start = "Start is working";

const demo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Demo is working");
    }, 5000);
  });
};
let end = "End is working";

const callMe = async () => {
  console.log(start);

  let Demo = await demo();
  console.log(Demo);

  console.log(end);
};
callMe();
