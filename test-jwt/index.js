const jwt = require("jsonwebtoken");

const JWT_SECRET = "bwamicro";

// create basic token dengan proses syncronous
// const token = jwt.sign({ data: { kelas: "bwamicro" } }, JWT_SECRET, {
//   expiresIn: "5m",
// });
// console.log({ token });

// asyncronous - create token
// jwt.sign(
//   { data: { kelas: "bwamicro" } },
//   JWT_SECRET,
//   { expiresIn: "1m" },
//   (err, token) => {
//     console.log({ token });
//   }
// );

const token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjkxNDgxMDgzLCJleHAiOjE2OTE0ODEzODN9.xqlkVg3pGVKn5iuaIzay3N4trMg-d56QSPfp0JPmAg4";

// cara 1
// jwt.verify(token1, JWT_SECRET, (err, decode) => {
//   if (err) {
//     console.log({ message: err.message });
//     return;
//   }
//   console.log({ decode });
// });

// cara 2
try {
  const decoded = jwt.verify(token1, JWT_SECRET);
  console.log({ decoded });
} catch (error) {
  console.log({ message: error.message });
}
// console.log("aaaaa");
