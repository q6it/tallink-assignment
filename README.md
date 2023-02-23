# Tallink test assignment

This is react app to display the table of operation histories between two arbitrary numbers.

The operations are:

-   Sum
-   Divide
-   Reminder of a division
-   Highest prime between two numbers if any exists

## Usage

App is providing two number input fields (A,B), operation selector, submit button, and after the first successful operation a history table with inputs, operation and result data.

Notes:

1. Division operation could not have 0 as a second input.
2. Reminder operation could not have 0 as a second input.

## Installation

To run this app locally, you need to have Node.js and NPM (Node Package Manager) installed on your machine. You can download Node.js and NPM from the official website: https://nodejs.org/en/.

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal or command prompt.
3. Run the following command to install the required dependencies:

```bash
npm install
```

4. Create a .env file with parameters VITE_PORT={your_port}

5. Once the installation is complete, run the following command to start the app:

##### Run development server

```sh
npm run dev
```

##### Build for production

```sh
npm run build
```

##### Preview production version

```sh
npm run preview
```

##### Run tests

```sh
npm run test
```

## Author

👤 **Andrei Sittsenko**

-   Github: [@q6it](https://github.com/q6it)
-   LinkedIn: [@andrei-sittsenko](https://linkedin.com/in/andrei-sittsenko)

5. The app should now be running at `http://localhost:{your_port}`.

## Dependencies

This app uses the following libraries:

-   `React`: A JavaScript library for building user interfaces.
-   `tailwindcss`: A utility-first CSS framework for rapidly building custom designs.

## Contributing

If you find any bugs or issues with the app, please feel free to create an issue on this repository.

If you would like to contribute to the project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
