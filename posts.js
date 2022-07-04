fetch("https://jsonplaceholder.typicode.com/posts").then(
    res=>{
        res.json().then(
         data=>{
            console.log(data); 
            if(data.length>0){
                var temp="";
                data.forEach((u)=>{
                    temp+="<tr>";
                    temp+="<td id=gen2><a href=details.html?id="+u.id+">"+u.id+"</a></td>";
                    temp+="<td>"+u.userId+"</td>";
                    temp+="<td>"+u.title+"</td>";
                    temp+="<td>"+u.body+"</td></tr>";
                    
                })
                document.getElementById("data").innerHTML=temp;
            }
         }   
        )
    }
)