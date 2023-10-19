

// let p = fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=> res.json())
// .then((data)=> console.log(data));

fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.table(objectData[0].title);

    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})