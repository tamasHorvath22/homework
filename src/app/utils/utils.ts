export default class Utils {

    static createStringFromArray(array: Array<Object>, property?: any): String {
        const comaAndSpace = ', ';
        let resultString = '';
        for (let i = 0; i < array.length; i++) {
            if (property) {
                resultString += array[i][property] + comaAndSpace;
            } else {
                resultString += array[i] + comaAndSpace;
            }
        }
        return resultString.substring(0, resultString.length - 2);
    }
}
