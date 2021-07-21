//자기 자신을 가리키는 표현 : this
var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}
//console.log(`kim.sum(kim.first, kim.second): ${kim.sum(kim.first, kim.second)}`);
console.log(`kim.sum(kim.first, kim.second): ${kim.sum()}`);

//this는 메소드(함수)가 속해 있는 객체 전체를 가리키도록 약속된 약속어이다.