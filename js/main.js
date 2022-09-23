document.getElementById("btn-sum").onclick = function () {
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;

    document.getElementById("result-salary").innerHTML = day * salary;
    return;
}

document.getElementById("btn-average").onclick = function () {
    var nums = document.querySelectorAll("#average input");
    var sum = 0;
    console.log(nums);
    for (var i = 0; i < 5; i++) {
        sum += Number(nums[i].value);
    }
    document.getElementById("result-average").innerHTML = sum / 5;
}

document.getElementById("btn-exchange").onclick  = function () {
    const number = 23500;
    var money = document.getElementById("money").value;

    document.getElementById("result-exchange").innerHTML = money * number + " vnd";
}

document.getElementById("btn-dientich").onclick  = function () {
    var width = Number(document.getElementById("width").value);
    var length = Number(document.getElementById("length").value);

    document.getElementById("result-dientich").innerHTML = "diện tích = " +(width * length);
    document.getElementById("result-chuvi").innerHTML = "chu vi = " + (width + length) * 2;
}

document.getElementById("btn-number").onclick = function () {
    var number = document.getElementById("number").value;

    document.getElementById("result-number").innerHTML = Math.floor(number / 10) + (number % 10);
}


