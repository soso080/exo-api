
// let div = document.createElement("div");

// fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4706755860c348c0a04f30c8ce98f883").then((reponse) => {
//     reponse.json().then((data) => {
//         data.articles.forEach((article) => {
//             div.innerHTML = `
//         <p>${article.author}</p>
//         <p>${article.content}</p>
//       `;
//             document.body.append(div);
//         });
//     });
// });




let info = document.getElementById("infos")
let img = document.createElement("img")


fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4706755860c348c0a04f30c8ce98f883").then((reponse) => {
    reponse.json().then((data) => {
        let allArticle = '';
        data.articles.forEach((article) => {
            allArticle += `${"<br>"+ "Auteur "+ " :"+" " + article.author + "<br>"}
            ${"Contenu "+ " "+":" +" "+ article.content + "<br>"}
            ${"Description "+ " "+":" +" "+ article.description + "<br>"}
            ${"publishedAt "+ " "+":" +" "+ article.publishedAt + "<br>"}
            ${"source "+ " "+":" +" "+ article.source + "<br>"}
            ${"Titre "+ " "+":" +" "+ article.title + "<br>"}
            ${"URL "+ " "+":" +" "+ article.url + "<br>"}
            <img src="${article.urlToImage}" width= 30% />`;
        });
        info.innerHTML=allArticle
        console.log(data);
    });
});

let button = document.getElementById("button")

button.addEventListener('click',(event)=>{
    let input = document.getElementById("site-search").value;
    fetch("https://newsapi.org/v2/everything?q="+ input + "&apiKey=4706755860c348c0a04f30c8ce98f883").then((reponse) => {
    reponse.json().then((data) => {
        let allArticle = '';
        data.articles.forEach((article) => {
            allArticle += `${"<br>"+ "Auteur "+ " :"+" " + article.author + "<br>"}
            ${"Contenu "+ " "+":" +" "+ article.content + "<br>"}
            ${"Description "+ " "+":" +" "+ article.description + "<br>"}
            ${"publishedAt "+ " "+":" +" "+ article.publishedAt + "<br>"}
            ${"source "+ " "+":" +" "+ article.source + "<br>"}
            ${"Titre "+ " "+":" +" "+ article.title + "<br>"}
            ${"URL "+ " "+":" +" "+ article.url + "<br>"}
            <img src="${article.urlToImage}" width= 30% />`;
        });
        info.innerHTML=allArticle
        console.log(data);
    });
});

})