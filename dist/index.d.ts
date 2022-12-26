/**
 * 拓展Number原型
 */
declare global {
    interface Number {
        /**
       * 加法
       * @param arg
       */
        add(arg: number): number;
        /**
         * 减法
         * @param arg
         */
        sub(arg: number): number;
        /**
         * 乘法
         * @param arg
         */
        mul(arg: number): number;
        /**
         * 除法
         * @param arg
         */
        div(arg: number): number;
    }
}
/**
 * 加法函数，用来得到精确的加法结果
    说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    调用：accAdd(arg1,arg2)
    返回值：arg1加上arg2的精确结果
 */
export declare const accAdd: (arg1: number, arg2: number) => number;
/**
 * 减法函数，用来得到精确的减法结果
 * @param arg1
 * @param arg2
 * @returns
 */
export declare const accSub: (arg1: number, arg2: number) => number;
/**
 * 乘法函数，用来得到精确的乘法结果
    说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
    调用：accMul(arg1,arg2)
    返回值：arg1乘以arg2的精确结果
 * @param arg1
 * @param arg2
 * @returns
 */
export declare const accMul: (arg1: number, arg2: number) => number;
/**
 *  除法函数，用来得到精确的除法结果
    说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
    调用：accDiv(arg1,arg2)
    返回值：arg1除以arg2的精确结果
 */
export declare const accDiv: (arg1: number, arg2: number) => number;
declare const _default: {
    add: (arg1: number, arg2: number) => number;
    sub: (arg1: number, arg2: number) => number;
    mul: (arg1: number, arg2: number) => number;
    div: (arg1: number, arg2: number) => number;
    Number: NumberConstructor;
};
export default _default;
