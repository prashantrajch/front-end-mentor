# Frontend Mentor - Testimonials Grid Section solution

This is a solution to the [Testimonials Grid Section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See a responsive testimonials grid that adapts from mobile to desktop

### Screenshot

![Testimonials Grid Section](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/testimonials-grid-section-using-css-grid
- Live Site URL: https://curious-cucurucho-fb2e48.netlify.app/

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- CSS Grid
- Flexbox (for internal alignment)
- Mobile-first workflow

### What I learned

This project helped me strengthen my understanding of **CSS Grid**, especially using `grid-template-areas` to create complex layouts in a clean and readable way.

Key takeaways:

- Planning grid layouts visually before writing CSS
- Using `grid-template-areas` to control layout without extra wrapper elements
- Combining CSS Grid for layout and Flexbox for content alignment
- Writing reusable utility classes for backgrounds and text colors

Example of the grid layout:

```css
.testimonial-grid {
  grid-template-areas:
    "one one two five"
    "three four four five";
}
```

Each testimonial is assigned to a grid area using nth-child, keeping the HTML structure simple.

Continued development

In future projects, I want to:

Explore alternative ways to build complex layouts with CSS Grid

Improve accessibility by reviewing heading hierarchy and contrast

Refactor utility classes for better scalability

Practice writing cleaner and more maintainable CSS

Frontend Mentor Community
 – Great inspiration and learning from other solutions

Author
Website - Prashant Raj

Frontend Mentor - @prashantrajch

GitHub - @prashantrajch
