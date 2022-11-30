console.log('Starting resume application');
console.log('Width : '+window.innerWidth);

let handleSize = () => {
    if(window.innerWidth <= 1140) {
        jQuery('.page').toggleClass('pagemobile');
        //jQuery('.floater').toggleClass('floater2');
        console.log('Switching to mobile view!')
    }
};

jQuery(document).ready(function() {
    jQuery('.loader').fadeOut(1500);
    handleSize();
});

function sayHello() {
    console.log('Hello World!');
}

window.addEventListener('resize', ()=>{
    //document.location = document.location.toString();
    handleSize();
});