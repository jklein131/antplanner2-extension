if ($('.studyList').length > 0) {
    console.log('swag');
    $('.horzButtons').append('<input class="WebRegButton" id="save-btn" value="Add to Ant Planner" type="button" name="swag" title="Save to AntPlanner">');
    $('.vertButtons').append('<div style="padding-top: 0.8em;"><input class="WebRegButton" style="width: 12em;font-size: 15px;" id="save-btn" value="Save to AntPlanner" type="button" name="submit" title="Save to Antplanner"><span class="WebRegButtonInfo">Exports class schedule to AntPlanner.</span></div>');
}
$('#save-btn').on('click', function() {
    var myRe = /^[\ ]+(\b\d{5})[\ ]+(\b[^\s]+)[\ ]+([^\s]+)[\ ]+([^\s]+)[\ ]+([^\s]+)[\ ]+([^\s]+)[\ ]+([^\s]+)[\ ]+([mc]*)[\ ]+([^\d]+)([^\s]+)[\ ]+([^\s]+)[\ ]+([^\s]+).*$/gm;
    var myArray;
    var calData = [];
    while ((myArray = myRe.exec($('table.studyList > tbody > tr:nth-child(2) > td').html())) !== null) {
        var msg = 'Found ' + myArray[0] + '. ';
        var coursecode = myArray[1];
        var department = myArray[2];
        var coursenumber = myArray[3];
        var coursetype = myArray[4];
        var sectionnumber = myArray[5];
        var units = myArray[6];
        var grdopt = myArray[7];
        var mc = myArray[8];
        console.log(mc);
        if (mc == 'mc') {
            var meetingtimechanged = true;
        }
        var days = myArray[9];
        var time = myArray[10];
        var bldg = myArray[11];
        var room = myArray[12];
        console.log(days);
        console.log(time);
        var timeRe = /([0-9]+):([0-9]+)-([0-9]+):([0-9]+)/
        if (time.indexOf('pm') >= 0) {
            time = timeRe.exec(time)
            console.log('pm');
            time[1] = parseInt(time[1]) + 12;
            time[3] = parseInt(time[3]) + 12;
        }
        time = timeRe.exec(time)
        time[1] = parseInt(time[1]);
        console.log(time[1] > 0 && time[1] < 7);
        console.log(time[1] > 0);
        console.log(time[1] < 7);
        if (time[1] > 0 && time[1] < 7) {
            console.log("swag");
            time[1] = parseInt(time[1]) + 12;
            console.log(time[1]);
        }
        if (time[3] > 0 && time[3] < 7) {
            time[3] = parseInt(time[3]) + 12;
        }

        if (days.indexOf('M') >= 0) {
            console.log(time);
            var startd = new Date(2012, 9, 01, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 01, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });
        }
        if (days.indexOf('W') >= 0) {
            console.log(time);
            var startd = new Date(2012, 9, 03, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 03, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });
        }
        if (days.indexOf('F') >= 0) {
            console.log(time);
            var startd = new Date(2012, 9, 05, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 05, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });
        }

        if (days == 'T T   ') {
            //tuesday and thursday
            var startd = new Date(2012, 9, 2, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 2, time[3], time[4], 0, 0);
            var startd2 = new Date(2012, 9, 4, time[1], time[2], 0, 0);
            var endd2 = new Date(2012, 9, 4, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd2.toString(),
                end: endd2.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });

        }

        if (days == 'T   ') {
            //just thursday
            var startd = new Date(2012, 9, 4, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 4, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });

        }
        if (days == 'T     ') {
            //just tuesday
            var startd = new Date(2012, 9, 2, time[1], time[2], 0, 0);
            var endd = new Date(2012, 9, 2, time[3], time[4], 0, 0);
            calData.push({
                id: Math.random().toString(36).substring(2, 6),
                groupId: coursecode,
                start: startd.toString(),
                end: endd.toString(),
                title: department + " " + coursenumber + " at " + bldg + " " + room + "<br>(" + coursecode + ")"
            });
        }
    }

    var defaultName = localStorage.username ? localStorage.username : '';
    var username = prompt('Please enter a unique username (e.g. Student ID): ', defaultName);

    // Validation
    if (username == null) {
        return;
    }

    if (username.length < 5) {
        alert('Username must be at least 5 characters.')
        return;
    }
    console.log(calData);
    calData = JSON.stringify(calData)
    // Save to server
    $.ajax({
        url: "https://antplanner.appspot.com/schedules/add",
        type: 'POST',
        data: {
            username: username,
            data: calData
        },
        success: function(data) {
            if (data.success) {
                console.log(data);
                alert('Schedule successfully saved!');
                localStorage.username = username;
                var w = window.open("https://antplanner.appspot.com");
            } else {
                console.log(data);
                alert('Problem saving schedule');
            }
        }
    });
});