
localStorage.setItem('name','Aman')
console.log(localStorage.getItem('name'));
//sessionStrage
sessionStorage.setItem('name','nilesh');
sessionStorage.setItem('name','rahul');//override the value
console.log(sessionStorage.getItem('name'));
//sessionStorage.removeItem('name');
//cookies
document.cookie='name=ramesh expires='+new Date(2020,0,1).toUTCString()