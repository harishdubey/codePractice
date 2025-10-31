const obj = { id: "1", name: "harish", age: "35", work: "programmer" };

function ConsoleCode() {
  const newArray = Object.entries(obj).map(([key, value]) => ({
    [key]: value,
  }));
  console.log("Object to Array :", newArray);

  const findVowels = (str) => {
    let count = 0;
    let vovels = ["a", "e", "i", "o", "u"];
    for (let char of str.toLowerCase()) {
      if (vovels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };

  const CapitalFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const ChkPalindrome = (str) => {
    str = String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    if (str === str.split("").reverse().join("")) {
      return "It is a Palindrome";
    } else {
      return "Not a Palindrome";
    }
  };

  const Closure = () => {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  };
  const newCount = Closure();
  console.log(newCount());
  console.log(newCount());
  console.log(newCount());

  const FindOccurance = (str) => {
    const cleanedStr = str.toLowerCase().replace(/\s+/g, "");
    const letterCount = {};
    for (const char of cleanedStr) {
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
    return letterCount;
  };
  console.log(
    "Find Occurance",
    FindOccurance("he is best boy of india economy")
  );
  const myArray1 = ["10", "20", "31", "12", "41", "5", "11", "3"];
  const removeDuplicate = [...new Set(myArray1)].sort((a, b) => a - b);

  const FilterDuplicate = myArray1.filter(
    (item, index) => myArray1.indexOf(item) === index
  );
  console.log(
    "Filter :",
    FilterDuplicate.sort((a, b) => a - b)
  );

  const sortAlphabet = (string) => {
    const str = string.replace(/[^a-zA-Z]/g, "");
    return str.split("").sort().join("");
  };
  const findLongestword = (str) => {
    const words = str.split(" ");
    return words.reduce(
      (longest, current) =>
        longest.length > current.length ? longest : current,
      ""
    );
  };

  function Sum(a) {
    if (a === undefined) return 0;
    return function (b) {
      if (b === undefined) return a;
      return Sum(a + b);
    };
  }

  function FindOccurance2(str) {
    const count = {};
    for (let char of str.replace(/\s/g, "").toLowerCase()) {
      count[char] = count[char] ? count[char] + 1 : 1;
    }
    return count;
  }
  console.log("Find Occurance Method 2", FindOccurance2("I love my india"));

  function isPrime(num, divisor = 2) {
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % divisor === 0) return false;
    if (divisor * divisor > num) return true;
    return isPrime(num, divisor + 1);
  }

  const finalPrime = (num) => (isPrime(num) ? "Yes" : "No");

  function checkType(value) {
    if (value === null) return null;
    if (value === undefined) return undefined;
    return value.constructor ? value.constructor.name : typeof value;
  }

  const arrayObj = [
    { name: "sunil", age: 32 },
    { name: "sunil", age: 32 },
    { name: "rakesh", age: 32 },
  ];

  function nameCount(arrayObj) {
    return arrayObj.reduce((acc, cur) => {
      const name = cur.name;
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});
  }

  console.log("name count : ", nameCount(arrayObj));

  const nestedArray = ["1", "2", ["3", ["4", "5"]]];

  function FlatternArray(arr) {
    return arr.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? FlatternArray(cur) : cur),
      []
    );
  }
  const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
  const finalFlatArray = [].concat(...biDimensionalArr);
  console.log(finalFlatArray);

  function findSecondLowestLargest(arr) {
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);
    return `${sortedArray[1]}, ${sortedArray[sortedArray.length - 2]}`;
  }

  const notes = [10, 20, 50, 100, 500, 1000];

  function convertAmountNotes(amount) {
    const sortedNotesArray = [...new Set(notes)].sort((a, b) => b - a);
    const notesObj = {};
    let remaining = amount;
    for (let note of sortedNotesArray) {
      const count = Math.floor(remaining / note);
      notesObj[note] = count;
      remaining = remaining % note;
    }
    return { notesObj, remaining };
  }
  console.log("Notes: ", convertAmountNotes(2769));

  function flatArray(arr) {
    return arr.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? flatArray(cur) : cur),
      []
    );
  }

  console.log("Flat Array", flatArray(nestedArray));

  const word = "thewquickbrownfoxjumpsoverlittlelazydog";
  const uniqueChar = [...new Set(word)].join("");
  console.log("Find Unique Characters : ", uniqueChar);

  const array3 = [12, 13, 4, 5, 6, 8, 30];
  const num = 10;
  const filterdArray = array3.filter((val) => val > num);
  console.log(filterdArray);

  function find_FirstNotRepeatedChar(str) {
    const count = {};
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    for (let char of str) {
      if (count[char] === 1) {
        return char;
      }
    }
  }

  console.log(
    "find_FirstNotRepeatedChar",
    find_FirstNotRepeatedChar("aaddaawwwweuuuur")
  );

  const input = {
    name: "John",
    "address.city": "New York",
    "address.coordinates.lat": 40.7128,
    "address.coordinates.lng": -74.006,
    "skills.frontend.html": true,
    "skills.frontend.css": true,
    "skills.backend.node": true,
  };

  function reassamlbeObj(obj) {
    const result = {};
    for (let keysArray in obj) {
      const keys = keysArray.split(".");
      let current = result;
      keys.forEach((item, index) => {
        if (index === keys.length - 1) {
          current[item] = obj[keysArray];
        } else {
          if (!current[item] || typeof current[item] !== "object") {
            current[item] = {};
          }
          current = current[item];
        }
      });
    }
    return result;
  }
  console.log("reassamble obj :", reassamlbeObj(input));

  const userObject = { firstname: "Harish", lastname: "Dubey" };

  function functionInvoke(arg1, arg2) {
    return arg1 + " " + this.firstname + " " + this.lastname + " " + arg2;
  }

  const funcBind = functionInvoke.bind(userObject);
  const jsonString = '{"name":"John","age":30}';
  const parsedJson = JSON.parse(jsonString);
  console.log(parsedJson, "parsedJson");
  const stringyfyJson = JSON.stringify(parsedJson);
  console.log(stringyfyJson, "Strinify Json");

  /* Object Creation  */
  const myObj1 = {};
  // const myObj2 = new Object();
  const myObj3 = Object();
  function Person(name) {
    this.name = name;
  }

  const myObj4 = new Person("Harish");
  const myObj5 = Object.create(Object.prototype);
  const myObj6 = Object.assign({}, myObj4);
  class Person2 {
    constructor(name) {
      this.name = name;
    }
  }
  const myObj7 = new Person2("Mukesh");
  console.log("myObj1 : ", myObj1);
  // console.log("myObj2 : ", myObj2);
  console.log("myObj3 : ", myObj3);
  console.log("myObj4 : ", myObj4);
  console.log("myObj5 : ", myObj5);
  console.log("myObj6 : ", myObj6);
  console.log("myObj7 : ", myObj7);

  /* Pure functions */
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 3));
  const array = [1, 2, 3];
  const output = array.map((n) => n * n);
  console.log(output);

  /* IIFE */
  (function () {
    let message = "This is message";
    console.log("Immidiatly invoke functions :", message);
  })();

  /* encode decode  */
  const value = "Mukesh & Rahul";
  const encodedData = encodeURI(value);
  console.log(encodedData);
  console.log(decodeURI(encodedData));

  const url = "https://mail.google.com/mail/u/0/#inbox";
  const encodedUrl = encodeURIComponent(url);
  console.log(encodedUrl);
  console.log(decodeURIComponent(encodedUrl));

  /* Class used */

  class Name {
    constructor(firstname, lastname) {
      this.name = firstname;
      this.lname = lastname;
    }
    getFullName() {
      return this.name + " " + this.lname;
    }
  }

  const myName = new Name("Harish", "Dubey");

  /* Closure Examples */
  function getWelcome(name) {
    var greetingInfo = function (message) {
      console.log(message + " " + name);
      localStorage.setItem("name", name);
      sessionStorage.setItem("myname", name);
    };
    return greetingInfo;
  }

  const getName = getWelcome("Harish Dubey");
  getName("Hello");
  getName("Welcome");

  /* Callback Hell */
  function msg1(msg, callback) {
    console.log(msg);
    callback();
  }
  function msg2(msg, callback) {
    console.log(msg);
    callback();
  }
  function msg3(msg) {
    console.log(msg);
  }

  msg1("print message 1", function () {
    msg2("print message 2", function () {
      msg3("print message 3");
    });
  });

  /** ends */
  /* callbacks examples*/
  function getfunc(func) {
    setTimeout(() => {
      console.log("Working");
      func("My name is Harish");
    }, 2000);
  }

  function func(msg) {
    setTimeout(() => {
      console.log("Message :", msg);
    }, 2000);
  }

  getfunc(func);
  /* promise  */
  const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Message Printed successfully");
      res("Done");
    }, 3000);
  });

  myPromise
    .then(() => {
      console.log("Promise Works");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Finally Done");
    });

  /* promise chaining */
  const myPromiseChain = new Promise((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 3000);
  });

  myPromiseChain
    .then((result) => {
      console.log(result);
      return result * 4;
    })
    .then((result) => {
      console.log(result);
      return result * 10;
    })
    .then((result) => {
      const finalresult = result;
      console.log(finalresult);
    });
  /* ends  */

  /* promise all */
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("First Done");
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Done");
      // reject("Second Done")
    }, 1000);
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third Done");
    }, 6000);
  });

  Promise.all([promise1, promise2, promise3])
    .then((result) => {
      console.log("All Promises Done");
      console.log(result);
    })
    .catch((err) => {
      console.log(err, "error found");
    });
  /* ends */
  /* promise race */
  Promise.race([promise1, promise2, promise3]).then((result) => {
    console.log("Second Promise Resolve");
    console.log(result);
  });

  /** today date print */
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var year = today.getFullYear();
  const todayDate = dd + "/" + mm + "/" + year;

  /** compare 2 dates */
  const d1 = new Date();
  const d2 = new Date();
  console.log(d1.getTime() === d2.getTime());

  /** add obj properties */
  const object1 = { id: "1" };
  object1.name = "harish";
  object1["age"] = "39";
  console.log(object1);

  /** multiline string example */
  var str = "This is a \n very lengthy \n sentence!";
  console.log(str);

  /* check function parameters/arguments list */
  function Sum2(a, b, c, d) {
    return a + b + c + d;
  }
  console.log(Sum2.length);
  /** random numbers generateor with min and max */
  function RandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /** image width height */
  function preloadImage(url) {
    var img = new Image();
    img.onload = function () {
      console.log(
        "Image Width:" + this.width + " Image Height :" + this.height
      );
    };
    img.onerror = function () {
      console.log("Image failed to load");
    };
    img.src = url;
  }

  preloadImage("https://www.google.com/intl/en_ALL/images/logo.gif");
  // 185 javscript
  /* sum with arguments */
  function Sum3(...args) {
    let total = 0;
    for (const i of args) {
      total += i;
    }
    return total;
  }
  /** Forzen object check */
  const normalObj = { id: "1", name: "harish" };
  Object.freeze(normalObj);
  console.log(Object.isFrozen(normalObj));

  /** object seal property  */
  const normalObj2 = { id: "1", name: "harish" };
  normalObj2.property = "Welcome to check";
  Object.seal(normalObj2);
  console.log(Object.isSealed(normalObj2));
  // delete normalObj2.property;
  console.log(normalObj2);

  /* error object print  */
  try {
    // greeting("Welcome");
  } catch (err) {
    console.log("Name: " + err.name + " message: " + err.message);
  }
  /* min and max find with  */
  const marks = [10, 20, 3, 40, 80, 120];
  marks.sort((a, b) => a - b);
  const min = marks[0];
  const max = marks[marks.length - 1];
  console.log(min, max);

  function FindMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return { min: min, max: max };
  }

  console.log(FindMinMax(marks));
  /* ends */

  console.log([..."Harish"]);
  console.log("Welcome to JS world"[0]);
  console.log("Hello".repeat(4));
  console.log(+"Hello");
  console.log(![]);
  console.log(["a"] + ["b"]);
  console.log([] + [], "harish");
  console.log(![] + []);
  console.log(0 ?? 2); // 0
  console.log("test" && 2); // 2
  console.log(1 && 2); // 2
  console.log(0 && 2); // 0
  console.log(22 ?? 2); // 22
  console.log(null && 2); // null
  console.log(+null); // 0
  console.log(+undefined); // NaN
  console.log(+false); // 0
  console.log(+NaN); // NaN
  console.log(+""); // 0
  /** falsy value removes from array */
  const falsyValuesArray = [1, 4, 0, false, null, 6, undefined];
  console.log(falsyValuesArray.filter(Boolean));
  console.log(
    "%c The text has blue color, with large font and red background",
    "color: blue; font-size: x-large; background: red"
  );
  const user = { name: "John", id: 1, city: "Delhi" };
  console.dir(user);
  const users = [
    { name: "John", id: 1, city: "Delhi" },
    { name: "Max", id: 2, city: "London" },
    { name: "Rod", id: 3, city: "Paris" },
  ];
  console.table(users);
  /** get timestamp */
  console.log(+new Date());
  console.log(Date.now());
  console.log(new Date().getTime());
  /** check input is number */
  function isNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
  }

  console.log(isNumber(10));
  console.log(isNumber("10"));
  console.log(isNumber(NaN));
  console.log(isNumber(false));
  // 443 javascript
  /* remove duplicate obj */
  const arrayObjTest = [
    { name: "abc", age: 20, location: "Delhi" },
    { name: "xyz", age: 30, location: "Mumbai" },
    { name: "RTS", age: 60, location: "Kolkata" },
    { name: "abc", age: 20, location: "Delhi" },
  ];

  function removeDuplicateObj(arr) {
    const uniqueArr = [];
    for (let obj of arr) {
      const isDuplicate = uniqueArr.some(
        (item) =>
          item.name === obj.name &&
          item.age === obj.age &&
          item.location === obj.location
      );
      if (!isDuplicate) {
        uniqueArr.push(obj);
      }
    }
    return uniqueArr;
  }

  console.log(
    "duplicate obj removed from array: ",
    removeDuplicateObj(arrayObjTest)
  );
  /**ends */

  return (
    <>
      <div>
        <strong>Find Vowels :</strong> {findVowels("the quick")}
      </div>
      <div>
        <strong>Reverse String : </strong>
        {reverseString("I love my India")}
      </div>
      <div>
        <strong>Captial First Letter : </strong>
        {CapitalFirstLetter("i love my india")}
      </div>
      <div>
        <strong>palindrome : </strong>
        {ChkPalindrome("A man a plan a canal Panama")}
      </div>
      <div>
        <strong>palindrome : </strong>
        {ChkPalindrome(11211)}
      </div>
      <div>
        <strong>Longest Word : </strong>
        {findLongestword("my name is tar")}
      </div>
      <div>
        <strong>Sort Alphabet and Remove Extra :</strong>
        {sortAlphabet("efdcbaero^&%^&%& sasda")}
      </div>
      <div>
        <strong>Sum through Recursion: </strong>
        {Sum(1)(2)(5)(3)()}
      </div>
      <div>Find Occurance Method 1 :</div>
      <div>
        <strong>Is Prime : 2 :</strong> {finalPrime(2)}
        <br />
        <strong>Is Prime : 4 :</strong> {finalPrime(4)}
      </div>
      <div>
        <strong>Check Types of Values</strong> :{String(checkType(undefined))}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType(null))}
        <br />
        <strong>Check Types of Values</strong> :{checkType(12).toString()}
        <br />
        <strong>Check Types of Values</strong> :
        {checkType({ id: 1 }).toString()}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType([{ id: 1 }]))}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType(true))}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType(() => {}))}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType("yes"))}
        <br />
        <strong>Check Types of Values</strong> :{String(checkType(new Date()))}
      </div>
      <div>
        <strong>flattern Array : </strong> {FlatternArray(nestedArray)}
      </div>
      <div>
        {" "}
        <strong>Removed Duplicate : </strong> {removeDuplicate}
      </div>
      <div>
        <strong>find Second Lowest and Second Largest : </strong>
        {findSecondLowestLargest(myArray1)}
      </div>
      <div>
        <strong> call type invoke : </strong>
        {functionInvoke.call(userObject, "Hi", "welcome here")}
      </div>
      <div>
        <strong> apply type invoke : </strong>
        {functionInvoke.apply(userObject, ["Hello", "I am here"])}
      </div>
      <div>
        <strong> Bind type invoke : </strong>
        {funcBind("Hey", "Binding test")}
      </div>
      <div>
        {" "}
        <strong> Getting Name from Class : </strong> {myName.getFullName()}
      </div>
      <div>
        <strong>Today Date :</strong>
        {todayDate}
      </div>
      <div>
        <strong>Random Numbers Between 1 - 10 : </strong>
        {RandomNumbers(1, 10)}
      </div>
      <div>
        <strong>Sum with help of arguments rest operator</strong> :
        {Sum3(1, 2, 3, 4, 5)}
      </div>
      <div>
        <strong>Min Value : </strong>
        {Math.min(...marks)}
        <strong> Max Value : </strong>
        {Math.max(...marks)}
      </div>
    </>
  );
}

export default ConsoleCode;
