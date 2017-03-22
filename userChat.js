// userChat is the function that waits for the user to send a message.
function userChat() {

  // Find where the user is inputing text.
  compose_area = document.getElementById('composer');

  // Set the user as the sender of the next message.
  nextMessage.sender = "user";

  // Get the user's input in the compose_area and clear the compose_area.
  nextMessage.message = compose_area.value;
  compose_area.value = "";
  
  
  // We need to convert the user's message to upper case to check if it matches with any prompts using the .toUpperCase() function.
  
  uppercase = nextMessage.message.toUpperCase();

  // We can test if the user's message matches any of the prompts using if statements.
  console.log("✍ Code for custom prompts goes here");
  
if (uppercase == "HI") { 
sendSpecialChat = [true, "What do you want to know about me ?"];
}
  
if (uppercase == "HELLO") { 
sendSpecialChat = [true, "What do you need from me ?"];
}
  
if (uppercase == "OK") { 
  sendSpecialChat = [true, "Hey, show more enthusiasim in this conversation or I'll leave"];
}
  
if (uppercase == "WHO ARE YOU") { 
sendSpecialChat = [true, "You've already known who I am"];
}

if (uppercase == "LOL") { 
  sendSpecialChat = [true, "That word. I have seen it written in books but is that really how you pronounce it? Most interesting."];
}
  
if (uppercase == "") { 
  sendSpecialChat = [true, ""];
}
  
if (uppercase == "") { 
  sendSpecialChat = [true, ""];
}
  
if (uppercase == "") { 
  sendSpecialChat = [true, ""];
}
  
  if (uppercase == "TTYL") { 
    sendSpecialChat = [true, "'Researching... a young adult novel written by Lauren Myracle and is also the first book in the 'Internet Girls' series. In 2004, it gained attention for being the first novel written entirely in the style of instant messaging conversation.' Well I can't say I knew that."];
  }
  // sendSpecialChat is an array that will override the next thing the bot says with the second value if the first value is true. If the first value is false the bot will say the next thing in the script.


  // Send user's message.
  send(nextMessage.sender, nextMessage.message);

  // Count 1 more chat that the user has sent.
  userCount += 1;

  // Ask the bot for another chat.
  lookForChat()

}
