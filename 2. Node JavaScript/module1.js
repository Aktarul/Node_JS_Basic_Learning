function myFunction(){
    console.log('Function was called');
}

var myString = 'Show String !';
module.exports.myFunction = myFunction;
module.exports.myString = myString;