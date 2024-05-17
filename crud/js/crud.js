let data=[
    {id:1, name:"darshan",email:"darshan@gmail.com"},

    {id:2, name:"pavitra",email:"pavitra@gmail.com"},

    {id:3, name:"shrawan",email:"shrawan@gmail.com"},

]
function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata=document.querySelector("data-table");
    var object=localStorage.getItem('object');
    var objectdata= JSON.parse(object);
    var elements="";

    objectdata.map(record => (

        elements+=`<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button>Edit</button>
                <button>Deleate</button>
            </td>

        </tr>`
    )

    )
        tabledata.innerHTML=elements;
        

}