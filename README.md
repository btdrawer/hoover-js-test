# Robot hoover (JavaScript test)
This project is an implementation of the spec given [here](https://gist.github.com/DavidJSimpsonEsq/71dcf396a2303ad5edd08690289d016d).<br/><br/>It 'navigates a imaginary robotic hoover (much like a Roomba) through an equally imaginary room', based on an imaginary grid with patches of dirt at certain points. The 'hoover' travels according to given directions and cleans any dirt it finds.
## Instructions
If you do not have Node.js installed, download it [here](https://nodejs.org). You may also want to install npm, which you can download [here](https://npmjs.com) (not compulsory, but allows for simpler commands).<br/><br/>
The script takes inputs from the file inputs.txt, which is placed in the same directory as the script itself. Each line in the inputs.txt file, except the last line, is comprised of two space-separated integers which represent x- and y-coordinates, respectively; the last line is a string of the letters 'N', 'S', 'E', and/or 'W' (e.g., 'NEESW').<br/><br/>The script reads these inputs as follows:<br/>
- Line 1 specifies the room's dimensions: e.g., '10 10' means the room's area is 10*10;
- Line 2 specifies the hoover's starting coordinates, e.g., '1 5' means the hoover's starting position is x=1, y=5;
- The following lines specify coordinates where dirt is present;
- The final line specifies the directions the hoover should take, e.g., 'NES' means the hoover will first go north, then east, and then finally south.<br/><br/>
You can specify the values you want by editing the input.txt file.<br/><br/>
Once you have Node.js installed and specified the values you want, you can run the script by opening a command line/terminal in the correct folder, and typing one of the following two commands:<br/>
npm start<br/>
or<br/>
node main.js<br/><br/>
A number of unit tests are also included; you can run these by typing:<br/>
npm test<br/>
or<br/>
./node_modules/.bin/mocha test.js<br/>
(npm commands require npm to be installed)
