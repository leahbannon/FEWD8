put element selectors up top, then override with classes below
not using classes makes your work very rigid and ties the css tied

use ids for things that test our code

## HTML5 Structural Elements

* header
* aside
* footer

These were introduced because people always used div tags for this. They behave the same: by default, they take up 100% of the space you're in. div = generic divider Won't add semantic value to the page, they are just there to be styled. This other stuff shows value, semantic, seo.

Only one

If put an aside in an article tag it will say it's
Ex: archive by date or topic
Ex: related posts
The aside element represents a section of a page that consists of content that is tangentially related content.

IE7and8 may not get it... (Argument: 15%+ need accessibility help, don't focus on the smaller percentage with outdated browsers)

## Floats

Float = you remove it from the flow of the document. Everything normally stacks itself as bricks, but floats pull it out and push to the side. Helps you make columns. It wasn't designed for this. Originally designed to help things flow are images.

Problems: floated elements don't honor relative heights

fix: clear fixing, if you have a wrapper and 2 things floating inside of each other, that can force the container to respect the height of the footed elements

```
.module1 {
  clear: left;
}

.module2 {
  clear: right;
}

.module3 {
  clear: both;
}
```

## Clearfix
Allows elements to clear themselves

```
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```
A div element won't do anything, once you add this to it, it will cause whatever's inside to break.

Similar to a <br>: tells it to behave like a table. Tables always have 1 cell. That cell needs to contain content. Telling it to behave as a table.

Check out csszengardens.com for good examples.

## Display Modes

http://nickgrace.github.io/fewd8/04_layout/#/10

Setting display on an element will also change layout
* display: inline;
* display: block;
* display: inline-block;

inline element don't do margin, they're just floating on the content
block takes up 100% of the width, no matter how much content there is

inline block is similar to inline in that it takes just the space it needs to, then you add block to get it to respect the margin property

## Flexbox

Browser adoption is an issue with this.

caniuse.com -- CR means "candidate recommendation" recommended, but not yet accepted as syntax

Start using for small sidebar things that aren't fully critical

## Random

* icon font is great because it requires one font package get request instead of multiple image get requests

## Research more

* inline, inline block, block


## Good links

* Christian Helmann
* http://futurefriendlyweb.com/
* http://gridstylesheets.org/
* generate your own icon font with just what you want: http://fontello.com/
*
*
