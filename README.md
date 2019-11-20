## Planning:

- [Trello board used to manage tasks, log bug fixes etc](https://trello.com/b/i519TQ0o/advent-calendar)




## Notes:

### 2019-08-20

Went to a Ruby Hacknight meetup to get guidance on how to organise a project like this when using Rails. How to deal with mostly static pages. I was advised to keep separate folders for css, js, and other assets and repeat folder names so it's easy to understand what links to what. This helped me avoid falling into a trap of thinking everything must be handled as objects when it wasn't appropriate.

### 2019-10-15

Went to another Ruby Hacknight meetup to ask for help with deployment to Heroku and any issues that would cause with the asset pipeline (I'd added audio).

I learned:
 - To use CDNs to deliver images/audio/video. Was recommended to check out Cloudinary
 - Where to set ENV variables in Heroku - use this to protect URLs to CDN resources and other stuff.
 
 > Audio and other media hosted at [Cloudinary](https://cloudinary.com) and URLs for resources set as ENV variables in the Settings panel of the Heroku project: https://dashboard.heroku.com/apps/evening-badlands-40503/settings
 
 - How to quickly check something on Heroku that's not master branch...

> To test a branch that isn't master you can push to Heroku's master branch

>```
> git push Heroku add-audio:master
>```

> This is bad practice.

> When you next need to push local master to Heroku you'll need to force push.


### 2019-10-27

Learned that making new records in the DB needs to be done by POST with body in format:

```
{"model_name":{"column_1":"value", "column_2":"value"}}
```

ALSO learned that for editing records in the DB you need to have the CSRF token included in the headers, else you get a `422 (unprocessable entity)` error from the server

### 2019-11-10

Learned that .getElementById / ClassName returns a live HTMLCollection, and this behaves differently to a normal array of elements. If you have a collection from getElementsClassName and remove a class from an element in there, the list updates. This means for loops to cycle through all elements with that class will only see alternate elements!
Instead use a while loop (while there's still el with that class) - https://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript/

### 2019-11-17
Adding video to assets pipeline
https://stackoverflow.com/questions/25100619/rails-4-1-add-videos-folder-to-asset-pipeline

```
Rails.application.config.assets.paths << "#{Rails.root}/app/assets/videos"
```
