## Basic social media app for learning expressjs backend

## Technologies
1.  Express.js

## Basic heroku deployment steps::

1. git init
2. add and commit to git
3. optionally push to GITHUB

4. Create heroku app on server (Thus, the redirected UI will display next steps as step 5+)
5. type "heroku login" on local machine 
6. Push code to heroku app (git push heroku main)
7. debug, then add, commit and next
8. push again (git push heroku main)


## How to deploy this backend on heroku
1. Keep local git branch as "master" for this case
2. write all the feature and do git commit and push it to GIT repos.
3. Now. login heroku server(heroku.com) and create "heroku app" not "heroku pipeline".
4. Next in deployment method select "HEROKU GIT" (HEROKU CLI)
     ** This means that you will always deploy local GIT code to heroku server not from GITHUB server.
   Other options: GITHUB or Container Registery.
5.  Next step is to login from local terminal to HEROKU CLI:
    heroku login
    Only one time activity per project.
6.  Next step is push your code to heroku by:
    heroku git:remote -a bscosialmedia   // bscosialmedia is the name of the heroku app created

7.    
