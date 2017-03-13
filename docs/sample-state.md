```js
{
  session: {
    currentUser: {
      id:1,
      username: 'user'
    },
    errors: {
      errors: []
    }
  },
  categories: {
    list: ["sports", "science", "gaming", "movements", "dance", "more will go here"]
  }
  groups: {
    1: {
      name: "JavaScripters",
      description: "Group description here",
      members: ["user1", "user2"],
      events: {
                1: {
                  title: "Learn Node JS",
                  date: "date/time",
                  attending: ["user1", "user2"],
                  location: "location",
                  description: "Sample event description",
                  group_id: "1"
                }
              }
      }
      photos: {
                1: {
                  title: "Photo1",
                  url: "www.phtoto.something.com/1234.png"
                }
      }
  },
  events: {
    1: {
      title: "Learn Node JS",
      date: "date/time",
      attending: ["someone", "someone2"],
      location: "location",
      description: "Sample event description",
      group_id: "1",
      photos: [photo1, photo2]
    }
  }
}
```
