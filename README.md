# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch error encountered in a Next.js 15 application using functional components and client-side routing.  The error occurs because the server-rendered HTML doesn't match the client-side content rendered by the functional component.

## Bug Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to different routes using client-side routing.  You will encounter the hydration mismatch error in the browser's console.

## Solution

The provided solution demonstrates how to solve this issue. The key is to ensure the server-side and client-side rendering produces identical output, especially for dynamically generated content or data fetching within the component.  This typically involves using a consistent approach for data fetching on both the server and client and ensuring that any component state changes do not lead to inconsistent rendering output between the server and the client.