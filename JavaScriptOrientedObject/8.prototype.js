//prototype 원형, 사물의 공통된 모습, 사물의 본래 모습
//javascript == prototype based language(프로토타입 기반 언어)

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
//constructor 함수는 1)객체를 만든다 2)그 객체의 초기상태를 세팅한다.
//생성자 함수는 객체가 만들어 질때 그 객체가 갖고 있어야 할 기능들을 세팅하는 기능도 있다.

Person.prototype.sum = function() {
    return `prototype : ${this.first + this.second};`
}

var kim = new Person('kim', 10, 20);
kim.sum = function() {
    return `this : ${this.first + this.second}`
}
var lee = new Person('lee', 10, 10);
console.log(`kim.sum(): ${kim.sum()}`);
console.log(`lee.sum(): ${lee.sum()}`);

//하고 싶은 것 : 저 Person생성자 함수에 새로운 속성을 추가하고 싶을 때..
//prototype을 이용해서 코드의 재사용성을 높이고, 성능을 향상시키는 방법을 소개합니다.

//Prototype의 의미
//prototype을 사용하지 않고 생성자 함수에서 안에서 직접 속성이나, 메소드를 직접 정의하게 되면 어떤 비효율이 있을지?
//그 비효율을 prototype으로 극복해 냈는지.

// prototype 사전적 의미로는 '원형', constructor 함수에 미리 함수를 정의하면, 객체를 생성할 때마다 함수가 생성되기 때문에 프로그램의 성능 저하와 메모리 사용의 문제가 생긴다. 이를 해결하기 위해 모든 생성자들이 공통적으로 공유하는 생성자 함수의 원형을 prototype 으로 정의할 수 있다. prototype은 객체가 만들어질 때마다 실행되는 것이 아니라, 한번만 실행되기 때문에 성능과 메모리 상의 문제를 해결할 수 있을 뿐 아니라, 특정 생성자만 따로 컨트롤할 수 있다. 특정 생성자를 컨트롤 할 때, 그 생성자 내에 미리 정의된 함수가 있으면 그 함수를 실행시키고, 그렇지 않으면 prototype 함수를 실행시킨다.


//1. 프로토타입 의미
// 객체들이 공통으로 사용하는 속성값

// 2. 프로토타입 없을 때의 비효율적인 점
// 객체를 생성할 때 마다 같은 동작을 하는 메소드가 메모리에 계속 생긴다. => 성능 저하, 메모리 낭비

// 3. 프로토타입을 사용하면 좋은 점
// 객체들이 공통으로 사용하는 속성값을 정의해서 객체 생성마다 같은 속성값을 만드는 과정을 생략해, 성능 향상과 메모리를 효율적으로 이용할 수 있게 해준다.