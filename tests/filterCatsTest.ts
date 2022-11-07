import { suite, test } from '@testdeck/mocha';
import Pages from '../src/pages/Pages';
import CatsAllNamesPage from '../src/pages/CatsAllNamesPage';

const catsAllNamesPage: CatsAllNamesPage = Pages.catsAllNamesPage;

@suite('test suite')
export class TestSuite {
    @test
    'Фильтрация котиков по части имени на странице "Все котики"'() {
        steps
            .goTo(catsAllNamesPage)
            .fillField(catsAllNamesPage.input, 'В')
            .pressKeys(['Enter']);
        const filteredNamesArray = catsAllNamesPage.namesCats.filter(element => element.getText().search(/$('В')/i));
        steps
            .checkArrayLength(filteredNamesArray, '=', catsAllNamesPage.namesCats.length);
    }
}
