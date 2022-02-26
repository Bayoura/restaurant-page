# Apothecary Homepage

![Screenshot](apothecary_screenshot.png)

The inspiration for this website was an apothecary or healer's shop, like you find them in fantasy RPGs.

- [Live Demo](https://bayoura.github.io/restaurant-page/)

## What I learned

- I did a very sleek looking hover underline animation with the help of this tutorial: https://www.30secondsofcode.org/css/s/hover-underline-animation
- I was really glad when I found the property `currentTarget`. Until that point, I only ever used the `target` property, but it in some cases it may not the best choice. I added a click event listener to the logo-container (which holds the logo name and the logo img), to add a class to the target that was clicked. Depending on whether you actually clicked the container, or the logo name or the logo image, the class was added to either one of these elements, which wasn't what I wanted. So, I swapped `target` out for `currentTarget`, and the problem was solved. While `target` gives you the actual element that triggered the event, `currentTarget` always refers to the element whose event listener triggered the event (the logo-container in this case).
- At this point, I've become more comfortable with grid. In this project, it also came in very handy for arranging the images in the 'Remedies' section. They are different sizes, which made it a bit tricky to make them look coherent and nice. By making the larger images span two grid columns, this issue could be solved, though.