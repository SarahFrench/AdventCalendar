
To test a branch that isn't master you can push to Heroku's master branch

```
git push Heroku add-audio:master
```

This is bad practice.

When you next need to push local master to Heroku you'll need to force push.


Audio and other media hosted at [Cloudinary](https://cloudinary.com) and URLs for resources set as ENV variables in the Settings panel of the Heroku project: https://dashboard.heroku.com/apps/evening-badlands-40503/settings


20191027 : Learned that making new records in the DB needs to be done by POST with body in format

```
{"model_name":{"column_1":"value", "column_2":"value"}}
```

ALSO learned that for editing records in the DB you need to have the CSRF token included in the headers, else you get a `422 (unprocessable entity)` error from the server
