window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!

    //Original Code for the Project below
    //===================================
    // const hello = sayHello();
    // console.log(hello);
    
    //Revamped Code to connect Button and alert box for the website. This also makes sure that the button and alert activate and 'hello' still displays to the console as well.
    //=============================================================
    function buttonFunction(){
        const hello = Hello();
        document.getElementById("hi").onclick = Hello;
        console.log(hello);
    }
    buttonFunction();
    
}

/**
 * This function returns the string 'hello' and creates an alert for the website.
 * @return {string} the string hello and alert box
 */
export function Hello(){
    // alert("hello");
    alert("Hello My Friends!");
    return 'hello';
}
//=================================================================

//Part of the Original Code
//=======================================================
/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
// export function sayHello() {
//     return 'hello';
// }
