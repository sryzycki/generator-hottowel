/* jshint -W117 */
describe('E2E: Dashboard >>>', function () {
    beforeEach(function () {
        browser.get('/');
    });

    it('The page has got "dashboard" in its <title>.', function () {
        expect(browser.getTitle()).toContain('dashboard');
    });

    it('There is a "People" widget.', function () {
        expect(element(by.css('.widget-head')).getText()).toEqual('People');
    });
});
