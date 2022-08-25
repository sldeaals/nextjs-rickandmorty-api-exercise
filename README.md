# nextjs-rickandmorty-api-exercise

## Getting Started

First, go to nextjs-rickandmorty-api folder.

Then, run the development server:

```bash
yarn dev
```

### Requirements:

- Create a page that:
  - shows a title for the page that reads: "Rick and Morty characters"
  - a list of 6 cards (see example.png for reference)
- Create a REST api that returns the information needed to render the page
  - the endpoint should only return the minimum information (name, status, species, gender, image)
  - it should be the responsible of returning the 6 elements

### Acceptance Criteria:

- Store only what we need from the API, not more.
- Each card should display:
  - Name
  - Status
  - Species
  - Gender
  - Image
- Correct use of CSS
- List is only 6 items long.
- A new GET endpoint exists
- The endpoint returns the strictly needed information to render the page

### Notes:

- NextJS API Docs: https://nextjs.org/docs/api-routes/introduction
- The information for the cards must be consumed from:
  https://rickandmortyapi.com/api/character
- More on the API docs: https://rickandmortyapi.com/documentation/#info-and-pagination
