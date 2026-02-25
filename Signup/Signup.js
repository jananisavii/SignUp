let allInput = document.querySelectorAll("input");
let form = document.querySelector("form");
let errorDiv = document.querySelector("#error");

let obj = {
  name: "",
  email: "",
  password: "",
  avatar: "",
};

allInput.forEach((input) => {
  input.addEventListener("input", (event) => { 
    obj = {
      ...obj,
      [event.target.name]: event.target.value,
    };
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorDiv.innerHTML = "";

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();

    if (!res.ok) {
      data.message.forEach((msg) => {
        const span = document.createElement("span");
        span.textContent = msg;
        span.style.color = "red";
        errorDiv.appendChild(span);
        errorDiv.appendChild(document.createElement("br"));
      });
      return;
    }

    alert("Signup successful!");
    console.log("User created:", data);
    form.reset();
  } catch (err) {
    errorDiv.textContent = "Something went wrong. Try again later.";
    errorDiv.style.color = "red";
  }
});



//  output: signup.js:26 
//  POST https://api.escuelajs.co/api/v1/users 400 (Bad Request)

// signup.js:48 User created: 
// {id: 2946, email: 'jananiperumal24@gmail.com', password: '123savii', name: 'Janani p', role: 'customer', …}






















// let allInput =document.querySelectorAll("input");

// let form = document.querySelector("form");

// let errorDiv = document.querySelector("#id");

// let obj ={
//     name:"",
//     email:"",
//     password:"",
//     avatar:""
// }


// allInput.forEach((input)=> {
    // console.log(Input.name);

    // input.addEventListener("input",(event)=>{
        // console.log(Event);

//         obj={...obj,[event.target.name]:event.target.value}

//         console.log(obj);
//     })

// });

// form.addEventListener("submit",async(event)=>{
//      event.preventDefault();
//      console.log("from has submitted");  
//     let res = await fetch("https://api.escuelajs.co/api/v1/users",{ method:"POST",  // fetch it will accept two argument is 1." obj " and 2." URL"
    // headers:{
    //     "content-type":"application/json"
    // },
    //     body:JSON.stringify(obj)   //{name: 'Janani p', email: 'jananiperumal24@gmail.com', password: '', avatar: 'https://tse2.mm.bing.net/th/id/OIP.3Vjif7tQCRsQwknBVyV1zgHaFf?pid=Api&P=0&h=180', phone: '685333257', …}
    // })

// let data = await res.json();
//   console.log(data);


// if(data.statuscode==400)
// {
//     console.log(data.message);
//     errorDiv.innerHTML="",
//     data.message.forEach((e)=>{
//         let span = document.createElement("span");
//         span.innerHTML=e;
//         errorDiv.append(span);
//         span.style.color="red";          // {id: 2936, email: 'jananiperumal24@gmail.com', password: '12345', name: 'Janani p', role: 'customer', …}signup.js:30 from has submitted
//                                             // signup.js:39 {id: 2937, email: 'jananiperumal24@gmail.com', password: '12345', name: 'Janani p', role: 'customer', …}

//     })
// }

// })






















// let data = await res.json();
//   console.log(data);


// if(data.statuscode==400)
// {
//     console.log(data.message);
//     errorDiv.innerHTML="",
//     data.message.forEach((e)=>{
//         let span = document.createElement("span");
//         span.innerHTML=e;
//         errorDiv.append(span);
//         span.style.color="red";
//     })
// }



// console.log(allInput.name);

// let a = "phone";
// let obj={
//     name:"deepika",
//     age:21,
//     [a]:8478470220,
// };