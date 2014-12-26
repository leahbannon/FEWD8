span vs. div:
* div for layout purposes or containing components, separating content out, it's a block element
* span is using for styling text

Setting display on an element will also change layout
* display: inline;
* display: block;
* display: inline-block;

inline element don't do margin, they're just floating on the content

block takes up 100% of the width, no matter how much content there is

inline block is similar to inline in that it takes just the space it needs to, then you add block to get it to respect the margin property
*what does margin property mean?*

Nav buttons:
```
<nav>
<ul class="menu-main">
<li><a href="#">Women's</a></li>
<li><a href="#">Men's</a></li>
<li><a href="#">On the Street</a></li>
<li><a href="#">The Catwalk</a></li>
<li><a href="#">AdWatch</a></li>
<li><a href="#">About</a></li>
</ul>
</nav>

.menu-main,
.menu-footer {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-main li,
.menu-footer li {
  display: inline-block;
}
.menu-main li {
  float: left;
  width: 16.66667%;
}
.menu-main a {
  background: black;
  color: white;
  display: block;
  font-size: 1.25em;
  padding: 15px 0;
  text-align: center;
  margin-right: 1px;
}
```

Do something, but not for the last one (borders, etc.)
```
.side-section {
  border-bottom: 1px solid grey;
  padding: 1em 0 2em 0;
}
.side-section:last-of-type {
  border: none;
}
```
