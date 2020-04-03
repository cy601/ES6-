//ES6模块功能主要有两个命令构成：export和import
// exprot用于规定模块的对外接口 import 用于输入其他模块提供的功能
// 一个模块就是一个独立的文件


// export const name = '张三';
// export const age = 18;
// export function sayName() {
//     return 'my name '
// }



const name = '张三'
const age = 18;
function sayName() {
    return `my name is ${name}`
}


const obj = {
    foo: 'foo'
}





class Person {
    constructor() {

    }
    sayAge() {
        console.log('16');

    }
}

export default Person;

export { name, age, sayName };

// export default obj;


export { Person };