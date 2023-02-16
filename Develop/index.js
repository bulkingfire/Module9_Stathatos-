// TODO: Include packages needed for this application
const inquirer = require("inquirer")  
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

const questions = [
    {
        type:"input",
        message:"Title: ",
        name:"title"
    },

    {
        type:"input",
        message:"Description: ",
        name:"Description"
    },

    {
        type:"input",
        message:"installation Requirements: ",
        name:"Requirements"
    },

    {
        type:"input",
        message:"Testing: ",
        name:"Testing"
    },

    {
        type:"input",
        message:"Usage: ",
        name:"Usage"
    },

    {
        type:"list",
        message:"License: ",
        name:"License",
        choices:['ISC', 'MIT','No License']
    },

    {
        type:"input",
        message:"Contributors: ",
        name:"Contributors"
    },

    {
        type:"input",
        message:"Username: ",
        name:"Github"
    },

    {
        type:"input",
        message:"User Email: ",
        name:"Email"
    },
];

// TODO: Create a function to write README file
function writeToFile(file, datas) {
    fs.writeFileSync(file, markdown(datas),function(err){
        if(err) throw err;
    });
}

// TODO: Create a function to initialize app
function inits() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
        writeToFile("README.md", response);
    })
}

// Function call to initialize app
inits();








