

# Responsive Web Design

The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesnât have the same constraints, and design for this flexibility. But first, we must 'accept the ebb and flow of things.' - John Allsop, "A Dao of Web Design"

Ethan Marcotte
Responsive Web Design
A List Apart
http://alistapart.com/article/responsive-web-design/

*Expect Greatness*

* Fluid, proportion-based grids &
* media queries are both ubiquitious
* Flexible images are just now happening

Fluid vs. Responsive
Fluid:
* Sized in percentages
* Constantly changes with screen size
Elastic:
* Generally sized in ems
* Changes at specific screen sizes

Mobile first design: Start small, and then enjoy the extra space

Truncation of content is not content strategy, it's not responsive web design

The concept of permanently placing content on a web page for a single browsing width or resolution is becoming a thing of the past... (W)ith proper planning, we can begin to choreograph content proportional to screen size, serving the best possible experience at any width.
Trent Walton, "Content Chorepgraphy"
http://trentwalton.com/2011/07/14/content-choreography/

Read this stuff:
http://nickgrace.github.io/fewd8/13_responsive_basics/#/12

1em = 100% of font size (default is usually 16px)

Make the font smaller based on screensize
Use ems to automatically change everything on the site
http://nickgrace.github.io/fewd8/13_responsive_basics/#/15

@media
media queries

3-4 breakpoints is ideal

@media only screen and
(max-width: xPx)
(min-width: xPx)

/*don't worry about these*/
(max-device-width:xPx)
(min-device-width:xPx)

For iPad
(orientation: portrait)
(orientation: landscape)

@media (max-width: 700px) {
  html {
    font-size: 1.5em;
  }
}
Easier to do with min-widths, though: keep progressing up

When you're changing a screensize, you won't be making many stylistic changes like button styles, border radius, colors, etc. Better to put media query towards the bottom.

https://developers.google.com/web/fundamentals/layouts/


# Lab

Start building out html: header with class, hamburger icon inside, top section with hero class, sections with block-group classes, divs for each block inside

specificity takes precendence over cascade

# JavaScript

Adding behavior to your page.

As you move your mouse around, you trigger events.

jqapi.com
devdocs.io
