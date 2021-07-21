var memberArray = ['egoing', 'graphittie', 'leezche'];

console.group('array loop');
var i = 0;
while(i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1; 
}
console.groupEnd('array loop');

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}

console.group('object loop');
for(var name in memberObject) {
    console.log(name, memberObject[name]);
}
//객체 .뒤에 변수가 바로 올 수 없음! 그래서 객체이름[값이름을 담은 변수] 이런 식으로 호출해야함

console.groupEnd('object loop');