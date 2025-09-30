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
  console.log(FindOccurance("he is best boy of india economy"));

  const myArray1 = ["10", "2", "3", "2", "4", "5", "1", "3"];
  const removeDuplicate = [...new Set(myArray1)].sort((a, b) => a - b);
  console.log("removed Duplicate", removeDuplicate);

  const FilterDuplicate = myArray1.filter(
    (item, index) => myArray1.indexOf(item) == index
  );
  console.log(
    "Filter :",
    FilterDuplicate.sort((a, b) => a - b)
  );

  const sortAlphabet = (string) => {
    const str = string.replace(/[^a-zA-Z]/g, "");
    return str.split("").sort().join("");
  };

  console.log("Sort Alphabet :", sortAlphabet("efdcbaero^&%^&%& sasda"));

  const findLongestword = (str) => {
    const words = str.split(" ");
    return words.reduce(
      (longest, current) =>
        longest.length > current.length ? longest : current,
      ""
    );
  };

  console.log(findLongestword("my name is tarzon"));

  return (
    <>
      <div>Find Vowels {findVowels("the quick")}</div>
      <div>Reverse String : {reverseString("I love my India")}</div>
      <div> Captial First Letter : {CapitalFirstLetter("i love my india")}</div>
      <div>palindrome : {ChkPalindrome("A man a plan a canal Panama")}</div>
      <div>palindrome : {ChkPalindrome(11211)}</div>
    </>
  );
}

export default ConsoleCode;
