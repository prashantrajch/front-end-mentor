# Time Tracking Dashboard

## Solution Title
Time Tracking Dashboard using CSS Grid, Flexbox, and JavaScript (Fetch API)

---

## Solution Retrospective

### What are you most proud of, and what would you do differently next time?

I am most proud of building a fully responsive dashboard layout using **CSS Grid with named grid areas**. Managing multiple cards across different screen sizes and rearranging them smoothly helped me understand responsive design more deeply.

I am also proud of dynamically updating the UI using **JavaScript and fetched JSON data**, which made the project feel more realistic and interactive.

Next time, I would focus on:
- Writing more semantic HTML (using better sectioning elements)
- Improving accessibility by adding proper ARIA roles and keyboard navigation support

---

### What challenges did you encounter, and how did you overcome them?

The biggest challenge was **managing the grid layout across multiple breakpoints** (mobile, tablet, and desktop). Assigning correct `grid-template-areas` and keeping card positions consistent took several attempts.

Another challenge was **updating card content dynamically** based on Daily, Weekly, and Monthly selections. I solved this by:
- Fetching data from a JSON file
- Creating reusable functions to update card values
- Using event delegation to handle navigation clicks efficiently

---

### What specific areas of your project would you like help with?

I would like help with:
- Writing **more semantic and accessible HTML** (for example, when to use `section`, `article`, `nav`, and `header`)
- Improving **JavaScript structure**, such as separating logic into smaller reusable functions
- Best practices for **accessibility**, including focus states, keyboard navigation, and screen-reader-friendly markup
