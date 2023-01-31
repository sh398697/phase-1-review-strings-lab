const currentUser = "Scott Henry";
let welcomeMessage = "Welcome to Flatbook, ";

welcomeMessage = welcomeMessage + currentUser + "!";

let excitedWelcomeMessage = welcomeMessage.toUpperCase();

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

let shortGreeting = "Welcome, " + firstInitial + "!";