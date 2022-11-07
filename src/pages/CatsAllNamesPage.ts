import { Element, Page, pageObject } from 'eva.io-core';

@pageObject
export default class CatsAllNamesPage extends Page {
    input = new Element('Инпут "Введите часть имени"', '//input[@placeholder = "Введите часть имени"]');
    namesCats = elements.Array(new Element('Все имена котиков', '//span[contains(@class, "tag")]//a'));
}