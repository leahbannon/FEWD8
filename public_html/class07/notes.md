January 10, 2015

!important

AGENDA:

* CSS Review
* Intro to Programming
* Intro to JS

Pseudo Code
The process of writing a program without using the syntax of a programming language.

# Color Switcher Lab

#switcher
The hashtag means it's an id selector (See id="selector")

document. -> find that ID, then do stuff

functions are followed immed with ()

JS Syntax
;
[ ]
{ }
( )

;
Every statement in js should be finished with a ;
like the period at the end of a sentence

[]
Used to access data

{}
used to group a set of statements based on some preface (eg an if statement or a function)

()
group operations (contain each piece of logic with parenthesis) (eg group 2 things that need to be true for the whole thing to be true)

Variables
either of these
declaration: var age;
define: age = 21;

Variable reassign
var name = 'Jo';
name = 'Amir';
Name of this value is not Amir

Variable conventions
start with a lower case
if they contain multiple words, add camel case (eg numberOfStudents)

Data Types
string: text (use quotes when defining "" or '')
int, float: numbers
boolean: true or false
array: data type to store other data types (list of things)

var whoIsIt = "Andrew's"
or
var whoIsIt = 'Andrew\'s'

float: decimal
int/integer: whole number

words true and false are reserved, you can't make variables
"unexpected token" means you probably used a reserved word

###

document -> interface to html page structure, doc object model (DOM)

Only 1 id per page. Multiple tags with getElementByTag


WET: Write Everything Twice
DRY: Don't Repeat Yourself

+ on numbers does addition
+ on 'strings', you get string concatonation

firstName + ' ' + lastName

Arithmetic
+ - * / %
% modulus, determine even and odd
type "math" in your console

variables that are constant are in all caps

# Making decisions
If it's either true or false (booleans)
If your age is 18 you are an adult
if (age > 18){
  document.write("You are an adult");
}

Comparisons, equality
=== are these two things equal?

Logical operators

Multiple conditions
&&
my name must be GA and my password must be yellopencil, if either of those are not true, the if statement is false

The Truth Table
or operator is ||
if today is tuesday OR thursday, then we have class
if (day == "Tuesday" || day == "Thursday")

The console is your friend
Also jshint.com

SublimeLinter-jshint
Javascript Checker
