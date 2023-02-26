![Dropit](src/tools/assets/logo-dropit-business.svg)

#### Welcome to Dropit's Frontend Test

### Disclaimers

- The stack for this task is similar to the one we're using here at Dropit (React with Typescript)
- The architecture as well (simple implementation)
- You can add and modify the given architecture, or implement a different architecture of your choosing

### Guidelines

- Keep code clean and organized
- Submit the task via mail or a private repo

## Design

- [Figma - Frontend candidate assignment](https://www.figma.com/file/zehb6VC6ZpbEvp62IAaRxL/Front-end-candidate-assignment?node-id=0%3A1&t=aT2jSLECAAMMGv8r-0)

## Requirements

- Set up an application state (consistent for a single session)
- Support responsive design for mobile, tablet and desktop

- #### Catalog page
  - Add search input that filters locally the displayed data by product's name or id
  - Handle add product to cart
  - Display the cart icon with a badge counter for the quantity sum of the products (not products count) in the cart
- #### Cart page

  - Set up a new page for the cart
  - Display products that are in the cart
  - Add the ability to remove products from the cart
  - Add the ability to chage to a product's quantity
  - Show summary of the products
  - Add a checkout button (disabled when the cart is empty)
  - Handle checkout by displaying a successful modal

- #### Assignment by Dror Avidov (052) 5584006

  - I've completed the Catalog page as defined above. It is responsive and displays almost every detail in the Figma
  - Parts that I didn't have time to cover:
    - In the smallest resolution the word page should be hidden
    - I'm not sure I got the text displayed in lower resolutions right
  - I just started the Cart page and I'd probably finish it for my excersize later so it only shows the table with no data
  - I did add and enabled the store/redux to update the number of products but ut doesn't reflects yet in the cart page

  - All in all it was fun assignment to do and I tried to use the same coding styles that you're using
  - I've added the missing .gitignore
