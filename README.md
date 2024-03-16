## Basic social media app for learning expressjs backend

## Plan an backend applications::

I want an application that:

- returns my username, followers and follows for linkedin, instagram and facebook (hardcoded).
- Return active time and date when request is made.
- Return value from URL as testing for API learners.


## Create mind map on MIRO for above requirements:

1. Login on miro.com with gmail
2. Click on sidebar "+" icons i.e more apps icon and then drag "mindmaps" from there to left side sidebar for easy access.

3. On right hand side sidebar, click on "mindmap" and drag it on the dashboard or UI on right side and it will be a polygon presented there.

4. and then create requirement diagram for APIs.
5. https://miro.com/app/board/uXjVNgK_Hxc=/

## Technologies
1.  Express.js

##  Common routing Bugs when dynamic route is placed above static route
```
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
```

#### dynamic route
```
app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({param: req.params.token});
});
```

#### static route
```
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "arjun2010", followers: 55,
    }
  res.status(200).json({instaSocial});
});
```

#### static route
```app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "arjun2010fb", followers: 65,
    }
  res.status(200).json({instaSocial});
});
```


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


## Custom domain and SSL settings
    In the settings tab, if you scroll down, then you can definately add custom domain and SSL certificates also there.



## Swagger setup

Basic structure URL:
https://swagger.io/docs/specification/basic-structure/

NPM package for swagger in express.js backend:
https://www.npmjs.com/package/swagger-ui-express


## How to configure it:

in index.js file, add these lines on top:

```const swaggerUi = require('swagger-ui-express');```
```const swaggerDocument = require('./swagger.json');```

```app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));```

1. We did not yet create swagger.json file. Majority of people do not create json file instead use YAML file, so in npm docs for "swagger-ui-express", scroll down to section: "Load swagger from yaml file" and check its usage.

2. From its usage text, install yaml package as:
    `npm install yaml`

3. And copy all the related content such as:
    ```const fs = require("fs");```
    ```const YAML = require('yaml');```

    ```const file  = fs.readFileSync('./swagger.yaml', 'utf8');```
    ```const swaggerDocument = YAML.parse(file);```

    and replace swagger.json file line with above content.

4.  And create a "swagger.yaml" in the root directory.

5. And add "openapi: 3.0.0" in the yaml file and restart server and then open locally on this url :
   `http://localhost:3000/api-docs/` to see that initial issues got fixed although it is far from expected.

6. One thing to observe is that, nodemon is not restarting on yaml file changes as if you observe in terminal, you see nodemon only observe file changes in ".js, mjs,cjs,json" file extensions only. And we are making changes in .yaml extension.

7. To include .yaml extension for nodemon to observe changes, we need to create a "nodemon.json" in root folder and inside an object put a key as "ext", where you could write down all extensions that you want nodemon to look for as:

   ```
   {
    "ext": ".js, .json, .yaml, .jsx"
   }
   ```

   And restart the server and it will keep track from now on.



##  How to write documentation using YAML and swagger:

1. In the URL, `https://swagger.io/docs/specification/basic-structure/`, 
    copy basic info section and paste it into .yaml file as:
  ```
    info:
      title: Sample API
      description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
      version: 0.1.9
  ```
2.  From above URL. copy the hosting servers production or staging or wherever hosted URLs as:

   ```
      servers:
        - url: http://localhost:3000/api/v1
          description: Localhost version of our app
        - url: https://localhost:3000/api/v1
          description: This is just a dummy version of API
   ```

   This "url" section either comes from a senior developer or you chooose based on what URL part is common in majority of APIs as in our case all the APIs will have "http://localhost:3000/api/v1" and only after that anything else, a common pattern.

   
3.  Its just a special case of authentication like login where, different authentication methods are available, we try only "Basic" and "Bearer" from below link:
`https://swagger.io/docs/specification/authentication/`

and we implement it by copying below code as:
```
    components:
      securitySchemes:
        BasicAuth:
          type: http
          scheme: basic
        BearerAuth:
          type: http
          scheme: bearer
```
  Although, we have other types also such as cookie authentication, OPENID, oauth2 etc, which we can copy code as needed but now.

  In the UI, a "Authorize" button will appear, and onclik it will open a modal and if you go to section: BearerAuth and 
  in value add "test" and click authorize then it gets added and whenever next time you make a request, this bearer token will already be added to the request headers.

4.  Basic route setting for "http://localhost:3000/api/v1/instagram" API will be done now.
    Just observe that "http://localhost:3000/api/v1" is already defined in "servers" in point 2 above. so only need to write here "instagram" and put type of request "GET", its response, its summar and description to make it functional.

    "summary" only gives just basic return statement of response.

    ```
      paths:
        /instagram:
          get:
            summary:  returns username, followers and follows
            responses:
              "200": # status code
                description: returns an object
    ```

   And this swagger UI will be fully functional.

5.  Enhance response UI more with more attributes such as:
     "content type, content schema ype and properties" as:
    ```
           responses:
            "200": # status code
              description: returns an object
              content:
                application/json:
                  schema:
                    type: object
                    properties:
                      username:
                        type: string
                      followers:
                        type: string
                      follows:
                        type: string
    ```

6.  For implementinjg similar routes "facebook" or "linkedin", simply copy paste the path and edit it.
     ```
            paths:
              /instagram:
                get:
                  summary:  returns username, followers and follows
                  responses:
                      ......rest
        
              /facebook:
                get:
                  summary:  returns username, followers and follows
                  responses:
                      .......rest
    ```

7.  For implementing an URL parameter as in dynamic path.
    
    Pls observe "get parameters" section, where "name" is parameter/variable name, coming in URL.
    Also check "in" part as it can be "path" or "query" and its type of schema.

    Also in "content properties", you put "params" if it is what you are returning.

    ```
      /{token}:
        get:
          summary:  returns whichever is there in parameters
          parameters:
            - name: token
              default: 5
              in: path
              schema:
                type: string
          responses:
            "200": # status code
              description: returns an object
              content:
                application/json:
                  schema:
                    type: object
                    properties:
                      params:
                        type: string
    ```
