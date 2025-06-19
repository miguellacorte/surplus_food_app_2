# React Native Surplus Food App

![Surplus Food App Banner](https://raw.githubusercontent.com/miguellacorte/react_native_surplus_food_app/master/assets/Frame%201000004975.png)

> 40% of all the food produced in the world is wasted. Through this app, NGOs can connect with restaurants to receive surplus food which will in turn be donated to people in need, reducing waste. This app is a free open-source template to enable citizens anywhere in the world to adopt this approach and modify it according to local laws and consumption patterns.

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Key Features

- View surplus food from local restaurants.
- User authentication and profile management for NGOs.
- Add items to a cart and "checkout" to reserve them.
- Save favorite restaurants.
- Search and filter for specific types of food or restaurants.

## Tech Stack

- **Framework:** [React Native](https://reactnative.dev/)
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **State Management:** [React Context API](https://react.dev/reference/react/useContext)
- **UI Components:** Custom-built components.

## Project Structure

The project is organized into several key directories:

```
.
├── app/               # Contains all the screens and navigation logic using Expo Router
├── assets/            # Static assets like images, icons, and fonts
├── components/        # Reusable UI components used throughout the app
├── constants/         # Global constants like color palettes
├── data/              # Mock data for restaurants and users
├── store/             # React Context providers for state management
└── ...
```

## Getting Started

This guide will walk you through the process of cloning and running this repo on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (which comes with npm)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

If you do not have Expo CLI installed, you can install it by running:

```bash
npm install -g expo-cli
```

### Cloning the Repository

To clone the repository, open a terminal and run the following command:

```bash
git clone https://github.com/miguellacorte/react_native_surplus_food_app.git
```

### Installing Dependencies

Navigate into the project directory:

```bash
cd react_native_surplus_food_app
```

Then, install the project dependencies by running:

```bash
npm install
```

### Running the App

Once the dependencies are installed, you can run the app using the following command:

```bash
npx expo start
```

Follow the terminal screen prompts to open the iOS or Android simulator.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
