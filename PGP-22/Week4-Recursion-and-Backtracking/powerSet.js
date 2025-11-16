function subSet(s) {
  const result = [];

  function subSetHelper(s, current, index) {
    if (index >= s.length) {
      if ([...current].length > 0) result.push([...current]);
      return;
    }

    current.push(s[index]);
    subSetHelper(s, current, index + 1);
    current.pop();

    subSetHelper(s, current, index + 1);
  }

  subSetHelper(s, [], 0);
  return result.sort();
}

console.log(subSet("abc"));
