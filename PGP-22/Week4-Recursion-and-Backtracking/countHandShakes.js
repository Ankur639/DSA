function countHandShakes(n) {
  const used = new Array(n + 1).fill(false);
  const pairs = [];
  let result = 0;

  function isValidHandShake(a, b) {
    for (const [x, y] of pairs) {
      if ((a < x && x < b && b < y) || (x < a && a < y && y < b)) {
        return false;
      }
    }
    return true;
  }

  function backTrack() {
    let first = -1;
    for (let i = 1; i <= n; i++) {
      if (!used[i]) {
        first = i;
        break;
      }
    }

    if(first===-1){
        result+=1;
        return;
    }

    used[first] = true;

    for (let second = first + 1; second <= n; second++) {
      if (!used[second]) {
        if (isValidHandShake(first, second)) {
          used[second] = true;
          pairs.push([first, second]);
          backTrack();
          pairs.pop();
          used[second] = false;
        }
      }
    }
    used[first]= false;
  }

  backTrack();
  return result;
}

console.log(countHandShakes(6))
