# Quick-setup (if you want to use this as your template)

Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/week8Game.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

6. This template has two servers already working. Both servers should run now with by running `npm run dev` from within the server directory in your terminal. Please note that in server 8080 you will have the Backend, and in server 3000 you will have dev from React. 
7. To add a Postgres DB
7.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`
In a new terminal window go inside the server directory and run the command `psql -U postgres -f db.sql` that will create a database `eventonica` and a table `events` with 5 rows. 

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)


### Your First Express and React App with a DB connection
Create full stack apps with React and Express and connect your DB from postgress. Run your client and server with a single command, thanks to a node module call concurrently

# Step by Step instructions - Building this from scratch
### For creating the server (using Express)
1. Make a new directory for your project. 
2. cd into your new directory 
3. Create a directory `server`
4. cd into your server directory
5. create a package.json with the command `npm init`
6. Make sure that the main file in your package is `server.js`
7. Install all the dependencies with the commands:`npm i express`, `npm i cors` and `npm i concurrently`
8. Install the module nodemon in the dev server with the command `npm i nodemon --save-dev`
9. Inside your package.json, change the scripts to: 
```
"start": "node server.js",
"server": "nodemon server.js",
```
10. Create your server.js file (you can do that with `touch server.js` or directly on your VSCode)

### Inside your server.js File
Here is the minimal express server. We're creating just one route to grab information. You probably will change this according to your project.

Once you have written your server.js file, you can run your project with `npm run server` in your terminal to run your server script.

### The client (The React Part)
In another Terminal window. Go to your directory for the project. 
1. Install create-react-app with `npx create-react-app client`
2. That should create a new folder `client` inside your project directory 
3. cd into your client folder and star your react server with the command `npm start`
4. At this point, you should have a server running on port 8080 with your backend and a new react server running on port 3000 with the initial logo of React. 

### Working on React. 
Inside the src folder, create a components folder. 
There you can create the .js file for your component. For this project is called `events.js` and `event.js`

### Inside your component .js File
1. Create a basic component 
2. Import useState and useEffect hooks from react
3. Inside your return function, create a basic `<div>` with and `<h2>` Tittle with the name of you component
4. Set the initial variables for your state according to your data (for this project is events) and set the initial value to be an empty array
5. We will use the useEffect hook to bring the data from your server each time the component renders. Notice that the second argument to that function is an empty array. That controls how often the effect executes. If it is empty, it will only execute once. 
6. Fetch returns a promise, so we're using `.then` to convert your response into json data and `.then` again to change the value of your State with setState and do a little `console.log` for sanity reasons.   
7. Inside your return, we use map() to create a list with all the data you are fetching for your server. 
8. Inside your App.js file, delete the default values of the component and import your new component. 
9. Run your localhost to see if you are seeing your component work. 
10. Add styles to your component.css file to make your list more visually pleasing. 

At this point, you should see the data from your server in your react localhost. 

### To run just one server with the module concurrently
Inside your package.json in your `server` directory add these client and dev scripts with: 
```
    "start": "nodemon server.js",
    "server": "nodemon server.js",
    "dev": " concurrently 'npm start' 'cd .. && cd client && npm start' "
```
Make sure that you're copy-pasting the correct number of quotes. 
Now, to run both servers just type the command `npm run dev`

### To add a Postgres DB
In a new terminal window, go to your psql terminal and create: 
* A eventonica database
* A table events

![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)



