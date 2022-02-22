// Object Oriented Programming (OOP)
// A program, where is a collection of objects talk to each other to perform some functionality.
// Function within an obejcts are called methods

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible:true,
    draw: function(){
        console.log('draw');
    }
}

circle.draw();