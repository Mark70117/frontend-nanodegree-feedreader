# frontend-nanodegree-feedreader

This is Project 6 in the Udacity Front End Nanodegree Program.
The goal of the project is to demonstrate skill with the Jasmine
testing framework.

## Running the app and test 

To run the app and, more importantly for this assignment, run the test, visit
http://mark70117.github.io/frontend-nanodegree-feedreader/

The tests needed for competion of the the project will run automatically
when the page loads.

The Jasmine test results will be at the bottom of the page.

They should read "7 specs, 0 failures"

in full it should read
```
Jasmine__TopLevel__Suite
  RSS Feeds
    are defined
    define a URL for each element of allFeeds
    define a name for each element of allFeeds
  The menu
    is hidden by default
    changes from hidden to visible and, then, visible to hidden when menu icon is clicked
  Initial Entries
    should be at least one in count when loadFeed is called
  New Feed Selection
    should change content from the initial feedLoad call
```


## Using the Feed Reader.

Actual navigation within the Feed Reader is not part of the
grading rubric, but if one would like to read some news, one
is welcome to.

The 'hamburger' icon in the top left corner of the screen
will reveal a menu of feeds to choose from when clicked.

Titles of article entries are also links to the articles.

Clicking on the title will take you away from the page to
the linked to article.  You will need to use the back button
or type the application URL above into the browser location
bar to return to the app.
