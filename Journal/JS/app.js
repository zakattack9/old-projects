/*var jsonDataBody = [
  {
    "header": "center",
  },
  {
    "div": {
      "class": "container",
      ["div": {
        "id": "link1",
        "class": "content first",
        ["h2", "h5", "img", "div"{
          "class": "article",
          ["h3", "p"]
          }
        ]
      ]
    }
  }
];*/

var simplifiedJSON = [
  {
    "jounarlEntry": "1",
    "title": "My First Entry",
    "date": "August 15, 2016",
    "img": "https://avatars1.githubusercontent.com/u/20864647?v=3&u=83e3d7df740c5ba685ceb4a9fb56cb62b24a7063&s=140",
    "articles" : [
      {
        "articleOne": {
        "subTitle": "Why I took this class",
        "content": "I took this class because I am interested in learning how to make my own applications and code my own programs."
        }
      },
      {
        "articleTwo":{
          "subTitle": "What I Want To Get Out of This Class",
          "content": "To be able to code applications, games, and programs while learning knowledge on working with CLI and Markup/Programming Language."
        }
      }
    ]
  }
]

/*

Create a function named showAll
Pass one parameter (data)

Inside the function:
 -Iterate through data
 -For each object create elements
 -Create parent div with id, "#link-1" + object.id
 -Create an h1, appending object.title to h1
 -Repeat this process for every value
 -Once finished, append all elements and values to parent div
 
*/