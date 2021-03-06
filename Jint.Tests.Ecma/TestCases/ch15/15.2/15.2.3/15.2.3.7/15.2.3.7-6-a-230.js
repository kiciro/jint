/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-230.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index property, TypeError is thrown if  'P' is data property, and'desc' is accessor descriptor, and the [[Configurable]] attribute value of 'P' is false  (15.4.5.1 step 4.c)
 */


function testcase() {

        var arr = [];

        Object.defineProperty(arr, "1", {
            value: 3,
            configurable: false
        });

        try {
            Object.defineProperties(arr, {
                "1": {
                    set: function () { }
                }
            });
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && dataPropertyAttributesAreCorrect(arr, "1", 3, false, false, false);
        }
    }
runTestCase(testcase);
