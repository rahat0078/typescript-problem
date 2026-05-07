const filterEvenNumbers = (array: number[]): Array<number> => {
  return array.filter((num) => num % 2 === 0);
};

const reverseString = (value: string): string => {
  const arrValue = value.split("");
  const result = arrValue.reverse().join("");
  return result;
};

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): "String" | "Number" => {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
