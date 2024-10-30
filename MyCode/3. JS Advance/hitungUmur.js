function countAge(born) {
  umur = getThisYear() - born;
  return umur;
}

function getThisYear() {
  return new Date().getFullYear();
}

console.log(countAge(1991));
