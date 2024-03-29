// 일부 프로퍼티들은 객체가 처음 생성될 때만 수정이 가능해야한다.
// 중간에 수정되면 문제가 될수도 있는 객체들이 있기때문.
//객체 리터럴을 할당하여 point를 생성합니다. 할당 후에는 x, y를 수정할수 없다!!!!!
var p1 = { x: 10, y: 20 };
// p1.x = 5; // 오류가 발생한다. 위에 x값이 이미 지정이 되어있기 때문에
// Typescript에서는 모든 변경 메서드가 제거된 Array<T>와 동일하게 ReadonlyArray<T> 타입을 제공한다.
// 그래서 생성 후에 배열을 변경하지 않음을 보장할 수 있다.
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // 오류
// ro.push(5); // 오류
// ro.length = 100; // 오류
// a = ro; // 오류
// ReadonlyArray를 일반 배열에 재할당이 불가능한 것을 알수가 있다.
// 하지만 타입 단언(type assertion)으로 오버라이드 하는것은 가능하다.
a = ro;
// readonly와 const를 비교하자면 변수의 경우에는 const, 프로퍼티의 경우에는 readonly (프로퍼티란 한 변수에 2개 이상의 값)
