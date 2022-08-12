console.log('Starting resume application');
console.log('Width : '+window.innerWidth);

jQuery(document).ready(function() {
    jQuery('.loader').fadeOut(1500);
    if(window.innerWidth <= 1140) {
        jQuery('.page').toggleClass('pagemobile');
        console.log('Switching to mobile view!')
    }
});

function sayHello() {
    console.log('Hello World!');
}