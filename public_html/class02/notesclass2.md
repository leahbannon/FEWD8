# Intro to CSS

```sh
<hr> = horizontal rule
<div>
```

### Image paths

Relative path -> no / "images/logo.png"
Inside webroot, a relative path could be used
Absolute path -> includes / and sends computer to top level "/images/logo.png"
Why would you use relative or absolute path? Absolute paths will break if you run it locally.

### Image file formats

* PNG
  * Can have full levels of transparency
  * High quality (usually very large files)
* GIF
  * 256 colors only
  * Can have basic transparency, but doesn't alias well on a background color
  * or 8 bit (128 colors)
  * animated option
* JPEG
  * best file size, allows you to choose quality
  * No transparency
* SVG
  * scalable vector graphic
  * becoming increasingly popular, great for icons and logos
  * animated option
  * recommended site: [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

### Intro to CSS

* If you break up your content using div tags, ?, but then you can only have one h1 tag.

Don't use duplicate title tags. [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en) will ding you for that.

The hashtag ```#``` is a good placeholder for a link when you're adding an a href tag and don't have the link yet.

The component names are selector (in the following example, p), property (color), and value (black). Property and value together are a declaration (color : black). The whole thing together is a declaration block. ```p { color : black; }```

You can't import style sheet into email, so everything needs to be done inline.

It's possible to put your CSS in the head of the document, but that's **not good practice** (primarily because you'll need to keep adding it every time you add a new page):
```
<head>
    <style>
        p {
          color : red;
        }
    </style>
</head>
```

Inline style is where you change the html tag immediately for each thing: ```<p style="color:red"></p>```

"Cascade" means anything at the top is weaker than the bottom.

Using a separate CSS file is best practice:
```
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

There's no clear best practice for organizing your declarations, but alpha order is good. Order your sytles based on the components and how you want the cascade to work.

### CSS Colors

There are several different ways you can set colors. Words or hex codes.

In hex codes:
* The first value is red, the second green, the third blue.
* Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.

RGBa Colors:
* RGBa works identically to RGB, plus 4th value called the "alpha"
* This is a value between 0 and 1 which will be used to determine a color's opacity on the page

### Recommended Sites

* [Font Awesome](http://fontawesome.github.io/Font-Awesome/)
* [Code Pen](http://codepen.io/)
* [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en)

### Jargon, term definitions

* "Cascade" means anything at the top is weaker than the bottom.
* The component names are selector (in the following example, p), property (color), and value (black). Property and value together are a declaration (color : black). The whole thing together is a declaration block. ```p { color : black; }```
* Relative path -> no / "images/logo.png"
* Absolute path -> includes / and sends computer to top level "/images/logo.png"
* 3rd path is "full link"
* div is a display block element that takes up the whole page by default, so you set max-width
