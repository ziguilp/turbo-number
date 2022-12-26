"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accDiv = exports.accMul = exports.accSub = exports.accAdd = void 0;
/**
 * 加法函数，用来得到精确的加法结果
    说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    调用：accAdd(arg1,arg2)
    返回值：arg1加上arg2的精确结果
 */
var accAdd = function (arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
};
exports.accAdd = accAdd;
Number.prototype.add = function (arg) {
    return (0, exports.accAdd)(arg, this.valueOf());
};
/**
 * 减法函数，用来得到精确的减法结果
 * @param arg1
 * @param arg2
 * @returns
 */
var accSub = function (arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
};
exports.accSub = accSub;
Number.prototype.sub = function (arg) {
    return (0, exports.accSub)(this.valueOf(), arg);
};
/**
 * 乘法函数，用来得到精确的乘法结果
    说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
    调用：accMul(arg1,arg2)
    返回值：arg1乘以arg2的精确结果
 * @param arg1
 * @param arg2
 * @returns
 */
var accMul = function (arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) { }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};
exports.accMul = accMul;
/**
 * 给Number类型增加一个mul方法，调用起来更加方便。
 */
Number.prototype.mul = function (arg) {
    return (0, exports.accMul)(arg, this.valueOf());
};
/**
 *  除法函数，用来得到精确的除法结果
    说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
    调用：accDiv(arg1,arg2)
    返回值：arg1除以arg2的精确结果
 */
var accDiv = function (arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) { }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return Number(r1 / r2).mul(Math.pow(10, t2 - t1));
};
exports.accDiv = accDiv;
/**
 * 给Number类型增加一个div方法，调用起来更加方便。
 */
Number.prototype.div = function (arg) {
    return (0, exports.accDiv)(this.valueOf(), arg);
};
exports.default = {
    add: exports.accAdd,
    sub: exports.accSub,
    mul: exports.accMul,
    div: exports.accDiv,
    Number: Number
};
//# sourceMappingURL=index.js.map