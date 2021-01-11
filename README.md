# Bitso React Challenge | React SPA Application

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [AntDesign](https://ant.design/) - A design system for enterprise-level products. Create an efficient and enjoyable work experience.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

* node >= 10.16.3
* npm >= 5.9.0

## Installing Project

In order to run the project you must follow the next steps:

```
git clone git@github.com:jonatancamarena/bitso-islands.git
```

## Running Project

* Execute the start command

```
npm install
npm run start
```

## Folder Structure

* src - Application logic
  * components - Reusable components that can be used through out the applciation
  * helpers - Reusable functions that can be used through out the applciation
  * layouts - App global layouts are stored in this folder 
  * views - Every folder in this folder represents a screen in the application
  Every folder should contain hte following files: 
      * use-example
        * Prefixed by the keyword use- this file contains all use of react hooks
      * example-view
        * postfix by the keyword -view this file contains all decleration JSX 
      * example
        * This file serves as the controller of the pattern and import's both use-example and example-view   

