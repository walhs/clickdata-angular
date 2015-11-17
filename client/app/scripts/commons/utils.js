(function(){
    "use strict";

    if (!window.CD) {
        window.CD = {};
    }

    CD.is_equal_sensitive = function (value1, value2, is_case_sensitive) {
        if (is_case_sensitive) {
            return value1 == value2;
        }
        else {
            return value1.toLowerCase() == value2.toLowerCase();
        }
    };

    CD.indexOf_byProperty = function (array, prop, value, is_case_sensitive) {
        is_case_sensitive = typeof is_case_sensitive === "undefined" ? true : is_case_sensitive;
        for (var i = 0; i < array.length; i++) {
            var e = array[i];
            if (CD.is_equal_sensitive(e[prop], value, is_case_sensitive)) {
                return i;
            }
        }
        return -1;
    };
})();