/*global
    $,
    describe,
    it,
    expect,
    beforeEach,
    allFeeds,
    loadFeed
*/ /* for jshint */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    'use strict';
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it ('are defined', function () {
            expect (allFeeds).toBeDefined();
            expect (allFeeds.length).not.toBe(0);
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it ('define a URL for each element of allFeeds', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it ('define a name for each element of allFeeds', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    describe('The menu', function () {

        /* a test that ensures the menu element is
         * hidden by default.
         * $('body').addClass('menu-hidden') is called to hide menu
         */
         it ('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            expect($('.menu-hidden .menu').length).toEqual(1);
         });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it ('changes from hidden to visible and, then, visible to hidden when menu icon is clicked', function () {
            $('.menu-icon-link').click();
            expect($('.menu-hidden .menu').length).toEqual(0);
            $('.menu-icon-link').click();
            expect($('.menu-hidden .menu').length).toEqual(1);
         });
    });

    describe('Initial Entries', function () {
        var beforeFeedEntryCount ;
        beforeEach(function (done) {
            beforeFeedEntryCount = $('.feed .entry').length;
            loadFeed(0, function () { done(); });
        });

        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it ('should be at least one in count when loadFeed is called', function (done) {
            expect(beforeFeedEntryCount).toBe(0);
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function () {
        var oldContent;
        var newContent;

        beforeEach(function (done) {
            loadFeed(0, function () {
                oldContent = $('.feed').html();
            });
            loadFeed(1, function () {
                newContent = $('.feed').html();
                done();
            });
        });

        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it ('should change content from the initial feedLoad call', function (done) {
            expect(newContent).not.toBe(oldContent);
            done();
        });
    });
}());
