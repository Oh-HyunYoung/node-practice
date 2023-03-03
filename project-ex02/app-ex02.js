/**
 *  douzone-math npm 모듈 테스트(모듈 패키지: 로컬 설치)
 * 
 *  로컬 패키지 배포
 *  $[project-ex02] npm i ../douzone-math
 *  명령으로 설치 한 후 테스트
 */
var math = require('douzone-math');

console.log(math.PI);
console.log(math.max(150,200,30,40,50));
console.log(math.min(150,200,30,40,50));