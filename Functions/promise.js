var promise = new Promise(function (resolve, reject) {
    var a = 1 + 1;
    if (a == 2)
        resolve("The promise was resolved");
    else
        reject("The promise was rejected");
});
promise.then(function (fromRes) { return console.log(fromRes); })["catch"](function (fromRej) { return console.log(fromRej); });
