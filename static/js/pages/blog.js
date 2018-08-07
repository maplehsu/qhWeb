jQuery(function($){
    "use strict";

    var SLZ = window.SLZ || {};

    SLZ.datepick = function() {
        $('.archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });
    };

    $(document).ready(function() {
        SLZ.datepick();
    });
});
