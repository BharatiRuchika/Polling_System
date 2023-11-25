# Polling_System
This is the poling system apis for creating questions and adding options to it.anyone can give vote to that options.questions and options which are not voted yet can be deleted and questions can be viewed with all of their options.

### Hosted link
https://node-mongodb-api-ae0q.onrender.com/

### Polling System Features
1. Create questions
2. Add options to question
3. Delete a question
4. Delete an option
5. Add vote to an option
6. View a question with all of its options

### Installation Steps
1. Clone this repository.
2. Run npm install to install all the dependencies.
3. Run npm start
4. Connect to the API using Postman on port 8000.

### API Endpoints

| HTTP Verbs| Endpoints                                  |  Country                                |
|-----------|--------------------------------------------|-----------------------------------------|
| POST      | /api/v1/questions/create                   | To create a question                    |
| POST      | /api/v1/questions/:id/options/create       | To add options to a specific question   |
| DELETE    | /api/v1/questions/:id/delete               | To delete a question                    |
| DELETE    | /api/v1/options/:id/delete                 | To delete an option                     |
| PUT       | /api/v1/options/:id/add_vote               | To increase the count of votes          |
| GET       | /api/v1/questions/:id                      | To view a question and its options      |


### Tech Stack

1. NodeJS
2. ExpressJS
3. MongoDB
4. Mongoose ODM


