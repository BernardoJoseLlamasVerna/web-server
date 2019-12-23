const greeter = (name = 'caraculo', {age, color} = {}) => {
    console.log('Hello ' + name);
}

//{age, color} = {} --> if a parameter is an object that may not be passed on our function, to avoid errors,
// we do like this => destructure the empty object

greeter('Berni');

//using default value on greeter() function
greeter();