// Q1. make a string out of an array(배열에서 문자열을 만들어보자)
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string(문자열을 배열로 만들자.)
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 3);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}
// Q4. make new array without the first two elements (splice vs slice)
{
  const array = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 5];

  const result1 = array.splice(0, 2); //기준 index부터 갯수

  console.log(result1); //[1,2]
  console.log(array); //[3,4,5]
  //splice는 원본에 영향을 미침(mutalbe)

  const result2 = array2.slice(2, 5); //범위 index가 2 이상 5미만
  console.log(result2); //[3,4,5]
  console.log(array2); //[1,2,3,4,5]
  //slice는 원본에 영향을 주지 않음(immutable)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student, index) => {
    return student.score === 90;
  });

  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);

  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);

  const result3 = students
    .filter((student, index) => {
      if (index >= 3) {
        return;
      }
      return student;
    })
    .reduce((prev, curr) => prev + curr.score, 0);

  console.log(result3);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();

  console.log(result);
}

// Q11. make a string containing all the scores 중에 점수가 50점 미만 애들을 string으로 만들어주세요
// result should be: '45'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score < 50)
    .join();

  //왜 이렇게 쓸수 잇을까?? 바로 map은 새로운 배열을 리턴해주기 때문이다
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

  console.log(result);
}
