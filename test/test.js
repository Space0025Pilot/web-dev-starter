//Original Test for Project
//===================================================================================
// import {sayHello} from '../js/main.js';

// QUnit.module('hello', function() {

//     QUnit.test('make sure the hello function says hello', function(assert) {
//         var result = sayHello();
//         assert.equal(result, 'hello');
//     });


// });

//Modified Test for new code
//=============================================================================
import {Hello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = Hello();
        assert.equal(result, 'hello');
    });


});
