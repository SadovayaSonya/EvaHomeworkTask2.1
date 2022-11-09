import { Step } from 'eva.io-allure';
import { Element } from "eva.io-core";
import assert from "assert";

export default class MySteps {

    @Step('Выполнена проверка сортировки котиков "{0}"')
    static sortCats(namesCats: Element[]): Eva.Steps {
        const ratingValues = namesCats.map(element => Number(element.getText()));
        let countRating = 1;
        for (let i = 0; i <= ratingValues.length - 2; i++) {
            if (ratingValues[i] >= ratingValues[i + 1]) {
                countRating++;
            }
        }
        assert.equal(countRating, ratingValues.length);
        return steps;
    }
}
