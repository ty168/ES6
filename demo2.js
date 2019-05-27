const scanf = require('scanf');
// let arr=[1,2,3];
// // 循环遍历数组
// for(let i=0;i<arr.length;i++){
// let xinlong = arr[i];
// // console.log('数组长度:'+arr.length+'\n分别是:'+arr);
// console.log(xinlong);
// }
// let xinlong={a:56,b:52}
// console.log(xinlong);
// let a=1;
// a=2;
// console.log(a);
// 对象：存储多个数值,键值对存储多个值，每个值有自己名字
// let xinlong={
//     a:1,  //横坐标
//     b:2,  //纵坐标
// }
// console.log(xinlong.a);
// console.log('坐标：('+xinlong.a+','+xinlong.b+')');
// let arr=[1,2,3,4,5,6];
// 循环遍历数组
// for(let i=0;i<arr.length;i++){
//     let xinlong = arr[i];
//     console.log(xinlong);
// }
// console.log('欢迎进入坐标系统');
// // 定义数组
// let arr=[];
// while(1){
//     console.log('1---添加一个坐标');
//     console.log('2---显示全部坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出');
//     let con=scanf('%d');  //输入一个数字
//     if(con===1){
//         // console.log('1---添加一个坐标');
//         console.log('请输入横坐标：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x, 
//             'y':y
//         };
//         arr.push(zuobiao);  //往数组中添加一个数字
//         console.log('添加坐标成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部坐标');
//         for(let i=0;i<arr.length;i++){
//             let ty=arr[i];
//             // console.log(ty);
//             console.log(`第${i+1}坐标为(${ty.x},${ty.y})`);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个坐标');
//         arr.pop();  //删除数组中最后一个数字
//         console.log('删除坐标成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }
let arr = [];
while (1) {
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个学生学科成绩');
    console.log('4---退出');
    let con = scanf('%d'); //输入一个数字
    if (con === 1) {
        console.log('1---添加一个学生学科成绩');
        console.log('请输入学生姓名：');
        let xingming = scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen = scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue = scanf('%d');
        let student = {
            'xingming': xingming,
            'yuwen': yuwen,
            'shuxue': shuxue
        };
        arr.push(student); //往数组中添加一个数字
        console.log('添加成绩成功');
        scanf('%d');
    }
    if (con === 2) {
        console.log('2---显示全部学生学科成绩');
        for (let i = 0; i < arr.length; i++) {
            let ty = arr[i];
            // console.log(ty);
            console.log(`学生：${ty.xingming}\n语文：${ty.yuwen}\n数学：${ty.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if (con === 3) {
        console.log('3---删除最后一个学生学科成绩');
        arr.pop(); //删除数组中最后一个数字
        console.log('删除最后一名学生成绩成功');
        scanf('%d');
    }
    if (con === 4) {
        console.log('退出');
        break;
    }
}
