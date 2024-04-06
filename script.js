/*
 Project 2 - Array of Objects
 Name: Karina Valdes
 Comments: I made an array of UFO's in differnt colors and sizes moving around the screen 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
// Declare an array to hold the UFO instances; its size is initially set to 10
let ufos = new Array(10);

function setup() {
  createCanvas(600, 400); // Set up a canvas

  // Populate the array with instances of UFO
  for (let i = 0; i < ufos.length; i++) {
    // Generate random colors for each UFO
    let r = random(255);
    let g = random(255);
    let b = random(255);

    // Create UFO instance with a unique color
    ufos[i] = new UFO(r, g, b);
  }
}

function draw() {
  background(200); // Clear the canvas with a light gray background for each frame

  // Iterate through each UFO instance in the array
  for (let ufo of ufos) {
    ufo.hover(); // Update the UFO's position
    ufo.display(); // Draw the UFO on the canvas
  }
}

function UFO(r, g, b) {
  // Initial properties set with random values for position and size
  this.x = random(width);
  this.y = random(height);
  this.size = random(30, 70);

  // Assign the passed color values to the UFO
  this.color = color(r, g, b);

  // Method to simulate hovering movement for the UFO
  this.hover = function() {
    this.x += random(-1, 1); // Hover movement horizontally
    this.y += random(-1, 1); // Hover movement vertically
  };

  // Method to display the UFO on the canvas
  this.display = function() {
    // UFO's main body
    fill(this.color); // Set the fill color for the UFO
    ellipse(this.x, this.y, this.size, this.size / 2); // Draw the UFO's main body as an ellipse

    // UFO's dome
    fill(200, 200, 250, 150); // Slightly transparent dome
    ellipse(this.x, this.y - this.size / 4, this.size / 2, this.size / 2); // Draw the dome
  };
}
