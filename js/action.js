console.log('Starting resume application');

jQuery(document).ready(function() {
    jQuery('.loader').fadeOut(1500);
    jQuery('#quicklinks').css({'max-width' : '1450px'});
    jQuery('#rsprojects').css({'max-width' : '1450px'});
    jQuery('#airprojects').css({'max-width' : '1450px'});
    console.log('Updated on load');
});

function sayHello() {
    console.log('Hello World!');
}
