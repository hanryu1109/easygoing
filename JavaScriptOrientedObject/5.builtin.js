//객체를 어디에다가 쓰나?
//우리는 이미 Math 라는 내장된 객체를 사용하고 있었다
console.log(Math.PI);
console.log(`Math.random() : ${Math.random()}`); //method : 객체에 소속된 함수일 때
console.log(`Math.floor(3.9) : ${Math.floor(3.9)}`);

var MyMath = {
    PI: Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(val) {
        return Math.floor(val);
    }
}
console.log(`MyMath.PI: ${MyMath.PI}`);
console.log(`MyMath.random: ${MyMath.random()}`);
console.log(`MyMath.floor(3.9): ${MyMath.floor(3.9)}`); 

//객체라고 하는 것은 같은 취지의(서로 연관된) 변수와 함수들을 객체라는 것으로 그룹핑해서 거기에다가 이름을 붙인 것이다.
