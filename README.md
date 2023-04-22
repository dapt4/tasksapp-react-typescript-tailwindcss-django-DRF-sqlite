# tasksapp-reactjs-django-DRF-sqlite

first create your virtualenv

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requirements

`$ pip install -r requirements.txt`

create a .env file in the root folder

`$ touch .env`

and add your postgresql url to .env file

>ENV_SECRET_KEY='{write something like jnasfbkasehfbqwejfhjwefbkaejfgwejfhwejfbhfbsherkbserhjbfhj}'

finally the project run with: 

`$ uvicorn main:app`

then run the frontend with
`$ cd frontend`
`$ npm run dev`

the docs for the restapi is in:
`GET http://localhost:8000/tasks/docs`

or read the endpoints.roast file.
