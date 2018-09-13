React/Redux frontend setup complete

so far,
create react app used
ES6 used
6 containers
more than three routes
definitely more than 5 stateless components
RESTful routing is happening for sure (I need to dynamically retain data = data retention)

Things left to add:
redux middleware is definitely modifying state change (i need to console.log and see how this is rendering and popping up)

async fetch() calls - will have to use the localhost:3001/verses.api to connect to the backend Rails API server and retrieve the verses across all time VerseIndex
 = this will also fulfill the Rails API handling the data persistence

handle display of data with minimal data manipulation

hook up Rails API db to the react frontend (how!?)

So basically, my Rails API database need to update the store -redux- which then is processed through a reducer and is carried through across the many different components...

lets do a order of a few things
first fetch ESV bible verses

LAST FEW THINGS TO ADD:

+ Populate database with scraped verses with the following values: word, book, memorized and emotion

++++ Create Verse Form:
Start with Emotion --> scrape verses related to the emotion ---> add a prayer : Card created!

make sure you can update memorized or not memorized

***내일 해야할것들:
+리액트 리덕스 완전 마무리
+정리정돈
+flow and routes
+dispatch, mapPropToState, connect

buttons to delete and update and create
CRUD
write Blog
