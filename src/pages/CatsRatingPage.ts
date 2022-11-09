import { Element, Page, pageObject } from 'eva.io-core';

@pageObject
export default class CatsRatingPage extends Page {
    tableRating = new Element('Таблица "Рейтинг имен котиков"', '//table');
    ratingNamesCats = elements.Array(new Element('Котики с лайками', '//td[contains(@class, "has-text-success")]'));
    antiRatingNamesCats = elements.Array(new Element('Котики с дизлайками', '//td[contains(@class, "has-text-danger")]'));
}