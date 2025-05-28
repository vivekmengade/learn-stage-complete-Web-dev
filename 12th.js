
// console.log("1");
// console.log("2");


// function hello(){
//     console.log("Hello, World!");
// }

// setTimeout(hello, 5000); 

// setTimeout(()=>{
//     console.log("This is a delayed message after 3 seconds.");
// },3000)

// console.log("3");
// console.log("4");



// <-- ----------------------callback hell ---------------------- -->



// function getdata(dataid){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("dataid: " + dataid);
//             resolve("success");
//             // reject("error");
//         },2000);
//     });
// };




// <--------------------------  Promise chain   ------------------------------->
// getdata(1).then((res)=>{
//     return getdata(2);
// }).then((res)=>{
//     return getdata(3);
// }).then((res)=>{
//     return getdata(4);
// }).then((res)=>{
//     console.log(res);
// })



// <--------------------------------------------------------->




// getdata(1,()=>{
//     console.log("getting nxt data 2")
//     getdata(2,()=>{
//         console.log("getting nxt data 3")
//         getdata(3,()=>{
//             console.log("getting nxt data 4")
//             getdata(4,()=>{
//                 console.log("getting nxt data 5")
//                 getdata(5);
//             });
//         });
//     });

// })






// <---------------------------    Promises    ------------------------------>



// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");    //pending state
//     // resolve("Promise is resolved");   // rewsolve the promise
//     reject("Promise is rejected");      // reject the promise
// });


// function getdata(dataid, getnxtData){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("dataid: " + dataid);
//             resolve("success");
//             // reject("error");
//         if(getnxtData){
//             getnxtData();
//         }
//         },5000);
//     })
// };

// let result=getdata(123);





// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am in promise");
//         resolve("Promise is resolved");
//         reject("Promise is rejected");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("result : "+res);
// });

// promise.catch((err)=>{
//     console.log("error: " + err);
// });


// function asyncFunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("Data 1 resolved");
//         },2000);
//     });
// }


// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("Success...");
//         },1000);
//     });
// }


// console.log("fetching data...");

// asyncFunc().then((res)=>{
//     // console.log(res);
//     console.log("fetching data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });

// });


// console.log("fetching data 2...");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });



async function hello(){
    console.log("Hello, World!");
}


function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("API call completed");
            resolve("API data");
            // reject("API error");
        }, 2000);
    })
}


async function getweatherdata(){
    await api();
    console.log("Weather data fetched");
    await api();
    console.log("hello Printed");
}



function getdata(dataid){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("dataid : "+dataid);
            resolve("success");
            // reject("error");
        },2000)
    })
};


// async function fetchData(){
//     await getdata(1);
//     console.log("getting nxt data");
//     await getdata(2);
//     console.log("getting nxt data");
//     await getdata(3);
//     console.log("getting nxt data");
//     await getdata(4);
// }


(async function (){
    await getdata(1);
    console.log("getting nxt data");
    await getdata(2);
    console.log("getting nxt data");
    await getdata(3);
    console.log("getting nxt data");
    await getdata(4);
})();