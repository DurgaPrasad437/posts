fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data); 
    if(data.length >0){
        var temp="";
        data.forEach(u=> {
            temp +="<tr>"
            temp +="<td>"+u.userId+"</td>";
            temp +="<td>"+u.id+"</td>";
            temp +="<td>"+u.title+"</td>";
            temp +="<td>"+u.body+"</td></tr>";
 });
   document.getElementById("data").innerHTML= temp;   
    }
})