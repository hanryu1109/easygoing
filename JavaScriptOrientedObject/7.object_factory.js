//객체공장
// var kim = {
//     name: 'kim',
//     first: 10,
//     second: 20,
//     third: 30,
//     sum: function() {
//         return this.first + this.second + this.third;
//     }
// }

// var lee = {
//     name: 'lee',
//     first: 120,
//     second: 20,
//     third: 39,
//     sum: function() {
//         return this.first + this.second + this.third;
//     }
// }

var d1 = new Date('2021-07-20');
//Date라는 무언가는 앞에 new 를 붙였을 때 객체를 만들어서 return 해주고 있다.
console.log(`d1.getFullYear(): ${d1.getFullYear()}`);
console.log(`d1.getMonth(): ${d1.getMonth()}`);
console.log(`d1.getDate(): ${d1.getDate()}`);
console.log(`Date: ${Date}}`);

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

//constructor
console.log(`new Person(): ${new Person()}`);
//new 라는 키워드를 붙이면 그냥 함수가 아니라 객체를 생성하는 생성자가 됩니다. constructor.
//new 가 붙은 함수는 생성자 함수입니다

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log(`kim.sum(): ${kim.sum()}`);
console.log(`lee.sum(): ${lee.sum()}`);
console.log(`kim: ${kim}`);

//new를 사용하여 construction function으로 객체를 양산할 수 있으며, 변수 수정 시 하나의 객체를 수정할 필요 없이 적용된 모든 객체를 일괄 수정 가능
//Construct Function은 일반 함수를 객체로 만들어주는 객체 생성자이다.
//Construct Function을 적용하면 앞에 "new"를 사용하여 실행할 때마다 객체가 양상
//Construct Function을 바꾸면 Construct Function을 사용하는 모든 객체가 한 번에 바뀌는 효과를 얻을 수 있다.