// 1. 템플릿 문자열
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';

console.log(string1); // 1 더하기 2는 '3'

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`
console.log(string2);

// 2. 객체 리터럴
var sayNode = function () {
	console.log('Node');
};

var es = 'ES';

var oldObject = {
	sayJS: function () {
		console.log('JS');
	},
	sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

var newObject = {
	sayJS() {
		console.log('JS');
	},
	sayNode,
	[es + 6]: 'Fantastic'
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

// 3. 화살표 함수
function add1(x, y) {
	return x + y;
}

const add2 = (x, y) => {
	return x + y
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(X) {
	return !X;
}

const not2 = x => !X;

// 함수 내부에 return 문밖에 없는 경우에는 return문을 줄일 수 있다.
// 중괄호를 쓸 수도 있다.

// this 바인드 방식
var relationship1 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends: function() {
		var that = this; // relationship1을 가리키는 this를 that에 저장
		// forEach문에서 function이 또 있을 것이므로
		this.friends.forEach(function (friend) {
			console.log(that.name, friend);
		});
	},
};
relationship1.logFriends();

var relationship2 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends() {
		this.friends.forEach(friend => {
			console.log(this.name, friend);
		});
	},
};
relationship2.logFriends();