let anteba = () => {
    document.getElementById("light").src = "img/on.png";
}

let chakroba = () => {
    document.getElementById("light").src = "img/off.png";
}

 console.log(document.getElementById("light").src) ;

 let damaklike= () =>{
    address = document.getElementById('light');

    if(address.src.match('file:///C:/Users/d.gelenidze/Desktop/Homework%2010/img/off.png')){
        address.src = 'img/on.png';
    } else {
        address.src = 'img/off.png'
    }
}

