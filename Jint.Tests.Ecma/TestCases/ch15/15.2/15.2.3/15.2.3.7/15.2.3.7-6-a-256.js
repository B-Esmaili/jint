/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-256.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index named property that already exists on 'O' is accessor property and 'desc' is accessor descriptor, test updating the [[Get]] attribute value of 'P' from undefined to function (15.4.5.1 step 4.c)
 */


function testcase() {

        var arr = [];

        function get_fun() {
            return 36;
        }

        Object.defineProperty(arr, "0", {
            get: undefined,
            configurable: true
        });

        Object.defineProperties(arr, {
            "0": {
                get: get_fun
            }
        });
        return accessorPropertyAttributesAreCorrect(arr, "0", get_fun, undefined, undefined, false, true);
    }
runTestCase(testcase);
