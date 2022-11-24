//XMLHttpRequest방식
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr=new XMLHttpRequest();//생성자
xhr.open('get','https://api.thecatapi.com/v1/images/search?size=full',true); //method방식,url,비동기여부 설정
xhr.send();

xhr.onloadend=() => console.log(xhr.responseText);

//fetch방식
fetch('https://api.thecatapi.com/v1/images/search?size=full', {
    method:'get'
})
    .then(resolve => {
        resolve.text().then(text=>console.log(text));
    })
    .catch(error => {
        console.log(error)
    })