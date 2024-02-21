const express = require('express')
const app = express()
const port = 3000
 const jdata = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 81,
    "public_gists": 4,
    "followers": 15810,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-02-12T12:11:50Z"
  }



const jdata = {
    "index": NumberInt(0),
    "name": "Aurelia Gonzales",
    "isActive": false,
    "registered": ISODate("2015-02-11T04:22:39+0000"),
    "age": NumberInt(20),
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "banana",
    "company": {
      "title": "YURTURE",
      "email": "aureliagonzales@yurture.com",
      "phone": "+1 (940) 501-3963",
      "location": {
        "country": "USA",
        "address": "694 Hewes Street"
      }
    },
    "tags": [
      "
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
  })
  */
  app.get('/',(req,res) => {
   res.send(jdata)    
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
