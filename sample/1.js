var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function booksInformation(arr) {
  let booksInfo = arr.map(function(currentObj) {
    if (currentObj.readingStatus === true) {
      return "I've already read a book " + "'" + currentObj.title + "'" + ", written by: " + currentObj.author + "."
    }
    if (currentObj.readingStatus !== true) {
      return "I'm going to read a book " + "'" + currentObj.title + "'" + ", written by: " + currentObj.author + "."
    }
  }).join("\n");
  return booksInfo;
}

console.log(booksInformation(library));
