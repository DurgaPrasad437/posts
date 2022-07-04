//const url = 'https://jsonplaceholder.typicode.com/posts';
//let data = {
 //id: '10'
//}
//let request = new Request(url, {
  //method: 'POST',
  //body: JSON.stringify(data),
  //headers: new Headers({
    //'Content-Type': 'application/json; charset=UTF-8'
  //})
//});
//body: JSON.stringify(
   // {
    //  "title": document.getElementById("can"),
    //}
  //),
//})
//.then(res => res.json())
//.then(data => console.log(data));
//}

  //function readid(){
   // var id=document.getElementById("postsid").value;
   // let fetchRes =fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    //fetchRes.then(res=>
     //   res.json()).then(d=>{
      //document.write(JSON.stringify(d))
      // })

//}
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')
let fetchRes = fetch("https://jsonplaceholder.typicode.com/posts/"+id);
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        // console.log(d)
        document.write(JSON.stringify(d))
    })
// }
