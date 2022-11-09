import { suite, test } from '@testdeck/mocha';
import Pages from '../src/pages/Pages';
import CatsRatingPage from '../src/pages/CatsRatingPage';
import { id } from "eva.io-allure";

const catsRatingPage: CatsRatingPage = Pages.catsRatingPage;

@suite('test suite')
export class TestSuite {
    @id(1)
    @test
    'Сортировка по лайкам на странице "Рейтинг имен котиков"'() {
        steps
            .goTo(catsRatingPage)
            .waitLoaded(catsRatingPage.tableRating)
            .sortCats(catsRatingPage.ratingNamesCats);
    }

    @id(2)
    @test
    'Сортировка по дизлайкам на странице "Рейтинг имен котиков"'() {
        steps
            .goTo(catsRatingPage)
            .waitLoaded(catsRatingPage.tableRating)
            .sortCats(catsRatingPage.antiRatingNamesCats);
    }
}
