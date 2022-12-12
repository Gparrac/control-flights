// let test = {
//     name: 'oscar'
// }

// let array = [1,32,3,4,4,3,3]
// array.forEach((item)=>{
//     test[item] = 'gabriel';
// })
// console.log(test)
fetch('http://127.0.0.1:5000/api/airports').then((rta)=>rta.json()).then((rta)=>console.log(rta))