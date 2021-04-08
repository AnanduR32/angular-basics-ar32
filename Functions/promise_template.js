var promise = new Promise(function (resolve, reject) {
    /* code to perform the promised task */
    var task_performed = true;
    if (task_performed) {
        resolve("The promised task was performed");
    }
    else {
        reject("The promised task was not performed");
    }
});
promise.then(function (fromRes) { return console.log(fromRes); })["catch"](function (fromRej) { return console.log(fromRej); });
