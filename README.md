## Basic social media app for learning expressjs backend

## Technologies
1.  Express.js

##  Common routing Bugs when dynamic route is placed above static route
`
app.get("/", (req, res) => {
  res.send("Hello World!");
});
`

#### dynamic route
`app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({param: req.params.token});
});  `

//static route
`app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "arjun2010", followers: 55,
    }
  res.status(200).json({instaSocial});
});`

//static route
`app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "arjun2010fb", followers: 65,
    }
  res.status(200).json({instaSocial});
});`


1. Since dynamic route even though in middle but is present above many static routes so it causes an issue of always returning value of dynamic route i.e

res.status(200).json({param: req.params.token});

even though you make a request for all below static routes:
"/api/v1/instagram" or
"/api/v1/facebook"

Because dynamic route has "/api/v1" common with static routes so it assumes that other string value can be dynamic and thus returnns the response of dynamic value.

2. To fix this issue, always keep your dynamic route at the end of similar static route to make it work.

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

7.  Next step is to deploy finally:
    git push heroku master, (considering local GIT branch is master)

8. Next, visit "Overview" tab of the heroku app and then click on "Open app" to check if it is working fine.
9. Most of the time, it should be enough, except the first time as first time it will cause error. We will debug error next.

## Debug deployment error for first time
1.    Visit "Settings" tab and Go to "Config Vars" section and select "Reveal config Vars" button, which is a place to verify   
    ENVIRONMENT VARIABLES is good or not.
  In our current app this is not needed.

2.    In our index.js file our code for port should be:
        const PORT = process.env.PORT || 3000;
      If we simply put it as:
        const PORT = 3000;
      It will cause an error because the deployment serve will assign PORT based on availability and not the one we directly provide.

 3.`    In package.json, during development we had the start script as:
    "start": "nodemon index.js" . 
        But since nodemon is a dev dependency and it gets prunned or removed while doing deployment (git push heroku master)
        so this script needs to be updated for it to work on production server as:
        
        "start": "node index.js".
        
        Update above and do git add, commit and finally :
        git push heroku master,  to do deployment
4.`    And Now again go to "Overview" tab and click on "open app" to see its working fine.

## Find Deployment error:
-------------------------
1. Clicking on "Overview" tab and click on "Open app" and it will open a page where error displays
