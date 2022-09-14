
//Bottom executable items

//Render Quick
var el = document.getElementById('quicklinks');

var root = ReactDOM.createRoot(el);

root.render(<QuickLinks />);


//Render air
var el2 = document.getElementById('airprojects');

var root2 = ReactDOM.createRoot(el2);

root2.render(<AirProjects />);

//Render RS

var el3 = document.getElementById('rsprojects');

var root3 = ReactDOM.createRoot(el3);

root3.render(<RsProjects />);

//finish
console.log("All well rendered!");