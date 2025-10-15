import React from "react";

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

  console.log(nameCount(arrayObj));

  const nestedArray = ["1", "2", ["3", ["4", "5"]]];

  function FlatternArray(arr) {
    return arr.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? FlatternArray(cur) : cur),
      []
    );
  }

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
    </>
  );
}

export default ConsoleCode;
