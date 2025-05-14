# gh-activity-card

`gh-activity-card` is a React component that displays a user's recent GitHub activity in a card format. It's built with Next.js.

![Preview](https://github.com/Kashyap1ankit/gh-activity-card/blob/main/public/sample-1.png)
![Preview](https://github.com/Kashyap1ankit/gh-activity-card/blob/main/public/code-sample-2.png)

## Features

- **Recent Activity**: Showcases the latest public events from a specified GitHub user in the past year 
- **Responsive Design**: Ensures compatibility across various device sizes.
- **Customizable**: Allows for styling adjustments to match your application's theme.

## Installation

Install the package using npm:

```bash
npm install gh-activity-card
```

Or with yarn:

```bash
yarn add gh-activity-card
```

## Usage

First, import the component into your React application:

```jsx
import GhActivityCard from "gh-activity-card/components/gh-activity-card";
```

Then, use the component in your JSX:

```jsx
function App() {
  return (
    <div>
      <GhActivityCard
        username="kashyap1ankit"
        colorScheme={{
          light: ["red", "red", "red", "red", "red"],
          dark: ["white", "white", "white", "white", "white"],
        }}
        colorTheme="light"
        errorClassName="text-red-500"
        className="border-2  mt-2"
      />
      <GhActivityCard username="kashyap1ankit" />
    </div>
  );
}
```

Replace `"kashyap1ankit"` with the GitHub username whose activity you want to display.

## Props

| Prop             | Type   | Description                                        | Required |
| ---------------- | ------ | -------------------------------------------------- | -------- |
| `username`       | string | GitHub username to fetch activity from.            | Yes      |
| `className`      | string | ClassName to customize styling.                    | No       |
| `errorClassName` | string | ClassName to customize styling error message.      | No       |
| `colorTheme`     | string | Theme can be light or dark                         | No       |
| `colorScheme`    | string | To define colors want in graph. Must be array of 5 | No       |

## Styling

The component uses Geist UI for styling. You can customize the appearance by overriding the default styles or by providing your own CSS classes.

## Development

To contribute or modify the component, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Kashyap1ankit/gh-activity-card.git
   ```

2. Navigate to the project directory:

   ```bash
   cd gh-activity-card
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the development server:

   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the component in action.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [GitHub REST API](https://docs.github.com/en/rest)

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/Kashyap1ankit/gh-activity-card.git).
