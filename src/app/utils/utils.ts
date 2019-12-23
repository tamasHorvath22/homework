export default class Utils {

    static createStringFromArray(array: Array<Object>, property?: any): String {
        let resultString = '';
        for (let i = 0; i < array.length; i++) {
            if (property) {
                resultString += array[i][property] + ', ';
            } else {
                resultString += array[i] + ', ';
            }
        }
        return resultString.substring(0, resultString.length - 2);
    }
}
