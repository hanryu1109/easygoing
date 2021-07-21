class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second
    }
}

//새로운 클래스 생성
//상속, 중복제거, 
//super 부모가 갖고 있는 기능을 실행할 수 있다.
class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        //()가 붙으면 부모 클래스의 생성자
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third)/3;
    }
}

// var kim = new Person('kim', 10, 10);
var lee = new Person('lee', 20, 10);
var kim = new PersonPlus('kim', 10, 10, 30);

// kim.sum = function() {
//     return `this : ${this.first + this.second}`
// }
console.log(`kim.sum : ${kim.sum()}`); 
// console.log(`lee.sum : ${lee.sum()}`);
// console.log(`kim.avg : ${kim.avg()}`);

// 1. 상속은 무엇인가?
// class로 만든 하나의 객체 생성자 (부모)에 기능을 추가하려고 할 때 자식 생성자를 만들어 들어올 값을 부모로부터 상속을 받아 사용하는 것이다.

// 2.상속이 없으면 무엇이 불편한가?
// 다른 사람이 만든 라이브러리를 유지 보수를 위해 수정하려고 할 때 오류가 날 수 있다. 코드를 복제하게 되면 중복이 많아져 유지 보수에 좋지 않고 메모리 효율이 떨어진다.

// 3.상속 받은 자식 클래스는 어떻게 구현되는가?
// extends 부모클래스 이름 - 부모로부터 받아와서 확장한다.
// class 자식 클라스 명 extends 부모 클라스명 {
// 추가 할 함수명 (){ }
// }

