function print(n) {
  if (n === 0) return; // jab tak mera function return nahi hota tab kam meri value stack me he rahegi
  print(n - 1);
  console.log(n);
}
print(5);
