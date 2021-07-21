// 정보시스템에서 핵심은 정보를 만드는 것, 정보를 읽는 것, 수정하고, 삭제하고

var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[1]: " + memberArray[1]);

//객체는 이름이 있는 정보를 정리정돈 할 때 쓰는 도구
//객체안에 있는 값을 읽을 때는 .이나 []를 통해 읽을 수 있다.
//값을 업데이트하거나 추가하거나 삭제하고 싶을 때 

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
//수정하고 싶을 때
memberObject.designer = "leezche";
console.log(`memberObject.designer: ${memberObject.designer}`);
console.log(`memberObject['designer']: ${memberObject['designer']}`);
//삭제하고 싶을 때
delete memberObject.manager //undefined
console.log(`after delete memberObject.manager: ${memberObject.manager}`);