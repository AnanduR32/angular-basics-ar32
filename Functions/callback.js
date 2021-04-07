function mock_bootup(message, callback) {
    console.log("Initiated " + message);
    setTimeout(function () {
        console.log(message + " in progress");
        callback();
    }, 1000);
}
;
mock_bootup("Bootup", function () {
    console.log("Completed Bootup");
});
