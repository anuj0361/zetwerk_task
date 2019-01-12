# zetwerk_task

EMP CRUD
1)	Fetch code from github and run “npm install”
2)	https://github.com/anuj0361/zetwerk_task

BackEnd(NodeJS)

Backend contains four APIs. All are working fine with proper validation.
1)	POST(/api/employee) : Add a new employee. Body contains  name,salary,dob, skills as json parameters. Values are added in MLab DB with an autoincrementID
2)	GET(/api/employee): Fetches list of all the employees in the database.
3)	DELETE(/api/employee/:id): Deletes a particular employee from the database. Takes “id” as input parameter
4)	POST(/api/employee/update/:id): Updates the value of employee in the DB
FrontEnd(ReactJS)
1)	Dashboard contains list of all employees and add employee button.
2)	User can add employee on clicking on add icon.
3)	Two button are there on each record “Edit” and “Delete”. Delete button deletes an employee & functionality is working fine. Edi button is not working

Visit URL to check App: https://whispering-savannah-69699.herokuapp.com/

 
Please check my other projects on GitHub as well:
1)	CodeHub: A small social network for Developers where user can create their profile & view other profile's on the network. They can also share, comment, like post's shared by users. Built using MERN Stack. (JWT Authentication)
https://github.com/anuj0361/CodeHub
Click on link to see live app : https://fierce-taiga-46609.herokuapp.com
2)	SurveyApp: A small web application for sending surveys to list of recipents & storing thier response. Built using MERN stack with 3rd party APIs like SendGrid(for email send & monitoring response) & StripeAPI (for payment gateway). (Google OAuth Authentication)
https://github.com/anuj0361/SurveyApp
Click below URL to see live application: https://whispering-scrubland-32309.herokuapp.com
3)	ChatServer: A small chat application built using SocketIO & NodeJS where user can join different chat rooms & share messages & their current location.
https://github.com/anuj0361/ChatServer-SocketIO
Click on link to see live application: https://thawing-bastion-63816.herokuapp.com



