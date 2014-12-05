# Advanced CSS

Font size can be 2em, for example: that means twice the width of an em at 16px.

Header is our wrapper for the content. Adding this centers the text in the center of the content.

Margin separated the content from the outer edge of the page.
Padding adds space inside the wrapper box.

**Box Model** http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif
(vs. content model)

Push from the outside in. More reliable if there's an add on the side, for example.

* width = width + padding-left + padding-right + border-left + border-right
* height = height + padding-top + padding-bottom + border-top + border-bottom
(plus distance from the edge of the browser is margin top right bottom left)

float

### Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>

p {color: white;}
p span { color: red;}
p div span {color:blue;}
```

span vs. div:
* div for layout purposes or containing components, separating content out, it's a block element
* span is using for styling text

```
div:first-letter { font-size:200%; }
```
Increase the first letter inside the div.

Google fonts
* This can affect load performance.
* Specify font weight so this requires less downloading
* Maybe only use this for headers, not all of the content. Because the browser is going through and rendering the fonts, so the more content, the longer the load time.

border radius (doesn't work in ie8)

only use id tag for anchor

If you want to target a class, start with a period .
If you want to target an id, use hashtag #
Stick with classes!

### Recommended Sites

* [CSS Font Stack](http://www.cssfontstack.com/)
* [Font Squirrel](http://www.fontsquirrel.com/)
* [Google Fonts](http://www.google.com/fonts)
* [Can I use...?(shows you what browsers will support it)](http://caniuse.com/)
* [CSS Tricks: Flex Box](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)


### ?
span and div
