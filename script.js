//your JS code here. If required.
function handleCalculation(){
      const inputEl = document.getElementById('ip').value.trim();

      const initialPromise = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.getElementById('output').textContent = `Result: ${inputEl}`;
          resolve(inputEl);
        }, 2000)
      })
    }
    const secondPromise = (num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const multipleNum = num * 2;
          console.log(multipleNum);
          document.getElementById('output').textContent = `Result: ${multipleNum}`;
          resolve(multipleNum);
        }, 2000)
      })
    }
    const thirPromise = (num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const subNum = num - 3;
          console.log(subNum);
          document.getElementById('output').textContent = `Result: ${subNum}`;
          resolve(subNum);
        }, 1000)
      })
    }
    const forthPromise = (num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const divideNum = num / 2;
          console.log(divideNum);
          document.getElementById('output').textContent = `Result: ${divideNum}`;
          resolve(divideNum);
        }, 1000)
      })
    }
    const fifthPromise = (num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const addNum = num + 10;
          console.log(addNum);
          document.getElementById('output').textContent = `Final Result: ${addNum}`;
          resolve(addNum);
        }, 1000)
      })
    }
      initialPromise()
      .then(secondPromise)
      .then(thirPromise)
      .then(forthPromise)
      .then(fifthPromise)
    }