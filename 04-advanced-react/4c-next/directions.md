# Next.js - Lecture

**Objective:**

Create a Star Wars Character app using Next.js. You will learn to set up a project, utilize server-side rendering, implement client-side interactions, and use file-based routing. The final app will display Star Wars character details with additional pages like About and Contact.

### Introduction

In this assignment, you will create a Star Wars Character app using Next.js, a powerful framework built on top of React. This project will guide you through the process of setting up a Next.js application, implementing server-side rendering, handling client-side interactions, and utilizing file-based routing to create a seamless user experience. By the end of this assignment, you will have a deeper understanding of Next.js and how it enhances the capabilities of traditional React applications.

Next.js offers several advantages over vanilla React, making it a valuable addition to the React ecosystem. Here are some of the key benefits:
1. **Server-Side Rendering (SSR)**: Next.js provides built-in support for SSR, which can significantly improve the performance and SEO of your application. SSR allows pages to be rendered on the server before being sent to the client, resulting in faster load times and better search engine visibility.
2. **Static Site Generation (SSG)**: Next.js supports SSG, which generates static HTML pages at build time. This is ideal for pages that do not change frequently and can be served quickly to users without additional server processing.
3. **File-Based Routing**: Next.js simplifies routing with a file-based system, where the file structure in the `pages` directory directly maps to the application's URL structure. This makes it easy to create and manage routes without the need for additional configuration.
4. **SEO Advantages**: Next.js ensures the full content of the page is available to search engines, improving the page's search engine ranking. This is crucial for sites where SEO plays a significant role in driving traffic.
5. **Automatic Code Splitting**: Next.js automatically splits your code into smaller bundles, ensuring that only the necessary code is loaded for each page. This improves the overall performance and reduces the initial load time.
6. **Developer Experience**: Next.js offers a robust developer experience with features like hot reloading, integrated TypeScript support, and a rich plugin ecosystem.

### Step 1: Set Up the Project

1. Create a new Next.js project using Create Next App. Run the following command in your terminal:

```bash
npx create-next-app swapi-app
```

2. Navigate into your project directory. Run the following command in your terminal:

```bash
cd swapi-app
```

3. Run the development server. Run the following command in your terminal:

```bash
npm run dev
```

**Check**: Ensure that your Next.js app is running at `http://localhost:3000`.

Once you've confirmed it's running, you’re ready to move on to the next step.

### Step 2: File-Based Routing with Static Pages

1. In your `src/app` directory, create the following files:

- `about/page.js`
- `contact/page.js`

2. In the `about/page.js` file, add the following code:

```javascript
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the Star Wars app built with Next.js, leveraging SWAPI.</p>
    </div>
  );
}

export default About;
```

**Explanation**:

- This file creates a static About page.
- File-based routing is a feature of Next.js where the file structure in the `src/app` directory directly maps to the application’s URL structure.

3. In the `contact/page.js` file, add the following code:

```javascript
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can reach us at contact@swapiapp.com.</p>
    </div>
  );
}

export default Contact;
```

**Explanation**:

- This file creates a static Contact page.
- Demonstrates the ability to create multiple static pages using file-based routing.

### Step 3: Create the Navbar and Layout Component

1. Create a `src/components` directory. In that directory, create `Navbar.js`:

```javascript
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

**Explanation**:

- The `Navbar` component uses `next/link` for client-side navigation, ensuring smooth transitions between pages without full page reloads.

2. Create the Layout component in `src/components/Layout.js`:

```javascript
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
```

**Explanation**:

- The `Layout` component wraps the main content of each page and includes the `Navbar` component.

### Step 4: Display People List with Server-Side Rendering

1. In `src/app`, open `page.js` and set up server-side data fetching and rendering:

```javascript
import Layout from '../components/Layout';
import Link from 'next/link';

async function fetchPeople() {
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();

  return data.results;
}

async function Home() {
  const people = await fetchPeople();

  return (
    <Layout>
      <div>
        <h1>Star Wars Characters</h1>
        <ul>
          {people.map(person => (
            <li key={person.url}>
              <Link href={`/character/${person.url.split('/')[5]}`}>
                {person.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Home
```

**Explanation**:

- This function fetches data from the SWAPI and passes it as props to the `Home` component.
- The `Home` component waits for the data to be fetched before rendering the page content.

### Step 5: Create Dynamic Character Page

1. In `src/app`, create a folder named `character`.
2. Inside the `character` folder, create a directory named `[id]`.
3. In the `[id]` folder, add a `page.js` file.
4. In `page.js`, add the following code:

```javascript
'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout'

function Character() {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);
  const [randomFact, setRandomFact] = useState(''); // New state for random fact

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        setCharacter(data);
      };

      fetchCharacter();
    }
  }, [id]);

  const fetchRandomFact = () => {
    const facts = [
      `${character.name} appeared in ${character.films.length} films.`,
      `${character.name} is ${character.height}cm tall.`,
      `${character.name} has ${character.eye_color} eyes.`,
      `${character.name}'s birth year is ${character.birth_year}.`
    ];

    const i = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[i]);
  };

  return (
    <Layout>
      <div>
        <h1>{character.name}</h1>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Gender: {character.gender}</p>
        <button onClick={fetchRandomFact}>Show Random Fact</button>
        <p>{randomFact}</p>
      </div>
    </Layout>
  );
}

export default Character;
```

**Explanation**:

- The `use client` directive ensures this component will run on the client side.
- This component dynamically fetches detailed information about a character from SWAPI based on the `id` from the URL.
- The `useEffect` hook fetches the data when the component mounts or when the `id` changes.
- The data is displayed in a structured format with additional details like mass, hair color, etc.

### Full Code Recap

##### Navbar

```js
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

##### Layout

```js
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
```

##### About

```js
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the Star Wars app built with Next.js, leveraging SWAPI.</p>
    </div>
  );
}

export default About;
```

##### Contact

```js
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can reach us at contact@swapiapp.com.</p>
    </div>
  );
}

export default Contact;
```

##### Home

```js
import Layout from '../components/Layout';
import Link from 'next/link';

async function fetchPeople() {
  const res = await fetch('https://swapi.dev/api/people/');
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const people = await fetchPeople();

  return (
    <Layout>
      <div>
        <h1>Star Wars Characters</h1>
        <ul>
          {people.map(person => (
            <li key={person.url}>
              <Link href={`/character/${person.url.split('/')[5]}`}>
                {person.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
```

##### Character

```js
'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout'

function Character() {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);
  const [randomFact, setRandomFact] = useState(''); // New state for random fact

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        setCharacter(data);
      };

      fetchCharacter();
    }
  }, [id]);

  const fetchRandomFact = () => {
    const facts = [
      `${character.name} appeared in ${character.films.length} films.`,
      `${character.name} is ${character.height}cm tall.`,
      `${character.name} has ${character.eye_color} eyes.`,
      `${character.name}'s birth year is ${character.birth_year}.`
    ];

    const i = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[i]);
  };

  return (
    <Layout>
      <div>
        <h1>{character.name}</h1>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Gender: {character.gender}</p>
        <button onClick={fetchRandomFact}>Show Random Fact</button>
        <p>{randomFact}</p>
      </div>
    </Layout>
  );
}

export default Character;
```
