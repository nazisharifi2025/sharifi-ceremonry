const titles = [
    "به مراسم یادبود از مرحوم انجنیر حسین علی امینی و استادان درگذشته لیسه استاد شریفی و بی بی زهرا حوتقول خوش آمدید",
    "Commemoration Ceremony in Honor of the Deceased Teachers of Sharifi & Babi Zahra High School"
];
const titleDiv = document.getElementById("title");
let index = 0;
setInterval(()=>{
    titleDiv.innerHTML = `<h1>${titles[index]}</h1>`;
    index = (index+1)% titles.length;
},10000);