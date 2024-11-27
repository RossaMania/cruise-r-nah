Thank you for checking out my project! Connect with me on LinkedIn! https://www.linkedin.com/in/ross-clettenberg/

# Cruise R Nah?

Is it a movie that Tom Cruise was involved with, or not?

Just type the title of the movie you're curious about into the search bar, and click that Search button!

# Features

- Light mode and Dark mode!

- Search functionality with The Movie Database! This product uses the TMDB API but is not endorsed or certified by TMDB.

- A "Tomography" page that lists all of the movies Tom Cruise has been a part of--either as a cast member or crew member!

- Select details on each Tom Cruise movie!


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Running the App with Docker
- You can run this project using Docker. Here's how:


## Prerequisites
- Ensure Docker is installed and running on your machine.

## Option 1: Use the start.bat or start.sh Script
We've provided scripts to simplify the Docker workflow:

On Windows:
Run the start.bat file by double-clicking it or running this command in a terminal:

```
./start.bat
```

On macOS/Linux:
Run the start.sh script using:

```
chmod +x start.sh  # Make the script executable (only needed once)
./start.sh
```

These scripts will build the Docker image and run the container automatically.

## Option 2: Manual Docker Commands
If you prefer running commands manually, follow these steps:

1. Build the Docker Image
Run the following command to build the Docker image:

```
docker build -t cruise-r-nah .
```

2. Run the Docker Container

To start the container, use:
```
docker run -p 3000:3000 cruise-r-nah
```

## Access the Application

After running the container, open http://localhost:3000 in your browser to view the app.


Don't want to use Docker? No problem!


# Getting Started Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!