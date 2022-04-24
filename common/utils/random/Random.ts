import { IRandom } from "./interfaces";

class Random implements IRandom {
  static _ransomStringsMap: { [key: string]: boolean } = {};

  private static _generateRandomKey = (
    length: number,
    prefix: string,
    charSet: string
  ) => {
    var output = prefix;
    for (var i = 0; i < length; i++) {
      var rnum = Math.floor(Math.random() * charSet.length);
      output += charSet.substring(rnum, rnum + 1);
    }

    return output;
  };

  static getRandomKey = (
    length: number = 8,
    prefix: string = "",
    charSet: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
  ) => {
    let key = Random._generateRandomKey(length, prefix, charSet);

    while (Random._ransomStringsMap[key]) {
      key = Random._generateRandomKey(length, prefix, charSet);
    }

    return key;
  };
}

export default Random;
