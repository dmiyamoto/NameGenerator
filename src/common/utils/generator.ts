import greatmen from "../dict/greatmen";

export function generateNameList() {
  const candidate = [...greatmen];
  const requestList: Array<string> = [];
  let cnt = 20;
  while (cnt) {
    let j = Math.floor(Math.random() * cnt);
    requestList.push(`${candidate[j]["name"]}、　`);
    candidate.splice(j, 1);
    cnt -= 1;
  }
  return requestList;
}
