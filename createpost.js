//function userCreate() {
   // const uid = document.getElementById("m1").value;
   // const id = document.getElementById("d1").value;
   // const tit = document.getElementById("k1").value;
    //const bod = document.getElementById("v1").value;
    // const email = document.getElementById("email").value;

   // const xhttp = new XMLHttpRequest();
   // xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts/createpost");
    //xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   // xhttp.send(JSON.stringify({
    //  "m1": uid, "d1": id, "k1": tit, "v1":bod
    //}));
    //xhttp.onreadystatechange = function() {
     // if (this.readyState == 4 && this.status == 200) {
     //   const objects = JSON.parse(this.responseText); 
     //   Swal.fire(objects['message']);
     //   loadTable();
     // }
   // };
  //}

//const myForm = document.getElementById('myForm');
//myForm.addEventListener('submit', function (e) {
//e.preventDefault();
//const formData = new FormData(this);
//fetch('createpost.js', {
//method: 'post',
//body: formData
//}).then(function (response) { return response.text();
//}).then(function (text) {
//console.log(text);
//}).catch(function (error) {
//console.error(error);
//})
//});

function Create(){
  // const m1 = document.getElementById('myForm')
  // console.log(m1)
fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  body: JSON.stringify(
    {
      "userId": document.getElementById("userid").value,
      "id": document.getElementById("id").value,
      "title": document.getElementById("title").value
    }
  ),
})
.then(res => res.json())
.then(data => console.log(data));
}