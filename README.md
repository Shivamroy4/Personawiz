# Personawiz



#### Created by - Shivam Roy


## [Personawiz - Personality Tests](http://personawiz.biz)

Website at http://personawiz.biz


## About

Personawiz is an interactive website which consists of a collection of personality tests where the user is given some situation based quiz and the website generates results about his personality.

**CSS , CSS3 , HTML , Java** have been used in the designing of the website.

**CSS Bootstrap** has been used for Mobile Compatibility.

**Java script** has been used for the quiz mechanism.

## Mechanism

Every particular quiz contains five questions each question containing four options out of which the user can choose only one option . There are two kinds of quizzes , one displays results according to the options being chosen and can generate 1024 unique results , while the other kind of quizzes display random results .

### The First Mechanism

This mechanism is comparatively more intelligent and complicated than the other . This mechanism can generate 1024 unique results . Each question page has this Java mechanism.

```javascript

function fetcher(aid) {
var qs = location.search.substring(1);
qs += "|" + aid;
var anchor = document.getElementById(aid);
anchor.setAttribute("href", "next_question.html?" + qs);
}
```

Every option has a unique number associated with it , in the example below 1 is the number.

```html

<a id="1" onclick="fetcher('1');" target="_top">    Option 1   </a>
```

The fetcher function in the java script mechanism has a unique character symbol associated with every *question* . In the example above , ' | ' has been used as the unique symbol for *Question1*, now when an option is selected , the mechanism assigns the unique symbol ( ' | ' in this case ) to the unique id number of the option ( ' 1 ' in this case ) and stores it in the URL when the next question page appears . In this example , **next_question.html** is the link to the next question page. Now , the URL of the next page will look like -

```

http://personawiz.biz/next_question.html?|1 
```

*(This is a non-functional link , and is only for the purpose of explanation )*

As the user keeps selecting the options which have their unique id numbers , the mechanism keeps assigning the uniques symbols associated with every question page and keeps storing them in the URL.
After the last question page , the URL will look somewhat like this -

```

http://personawiz.biz/result_page.html?|1*5/9+14_17
```
Here , *1,5,9,14 and 17* are the unique id numbers associated with the options selected and **' | ' ' * ' ' / ' '+ ' ' _ '** are the unique symbols associated with the questions.

Now , the result page has the following Javascript mechanism with the fetcher function.

```javascript

function fetcher() {
var qs = location.search.substring(1);
var qw = qs.toString();
var a1=qw.substring(1,2);
var a2=qw.substring(3,4);
var a3=qw.substring(5,qw.indexOf("+"));
var a4 = qw.substring(qw.indexOf("+") + 1, qw.indexOf("_"));
var a5 = qw.substring(qw.indexOf("_")+1);

if (a1 == "1") {
a1 ="Display result for choosing the option with unique id number 1";
}
else if ...
.
.
.
.
.
// Block of if else codes assigning result to display with every option chosen.
.
.
}
document.getElementById("Text1").value = a1;
document.getElementById("Text2").value = a2;
document.getElementById("Text3").value = a3;
document.getElementById("Text4").value = a4;
document.getElementById("Text5").value = a5;
}
``` 
The result page fetches the options chosen for every question from the URL and searches for the result to be displayed for the chosen options from the if else block of codes.

### The Second Mechanism

This mechanism is very random and generates random results. The option buttons in every question are simple Links to the the next question page . The next question pages have the same text and look the same for every option , but the links associated to them , have different page URLs , this creates a number of series for the different combinations of the options chosen which have different result pages attached to the end Question page.

