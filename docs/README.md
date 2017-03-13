# Events
<!-- ![alt text]("Events") -->

[MeetUp](https://meetup.com/)

<!-- [Heroku Link](https://huddle-application.herokuapp.com/) -->

<!-- [Trello Link](https://trello.com/b/VXwYw2DP/huddle) -->

## Minimum Viable Product
Events is a web-application inspired by Meetup. Events is a platform that promotes a community of users to plan, host, and attend events catered to their personal interests. Whether professional, informal, or just for fun, we believe that people should have a means to get to know each other if they are interested in similar things. Find your event and share your love of something with others who feel the same way.

Events is built using a Ruby on Rails backend with React/Redux on the frontend. By the end of week 9 at AppAcademy, Events will satisfy the following features:

- [ ] Hosting on Heroku
- [ ] New user account creation, existing user login, guest/demo login
- [ ] Groups (CRUD)
- [ ] Events (events for a Group) (CRUD)
- [ ] Upcoming events
- [ ] Search by Categories or Group names
- [ ] Search by location and group info
- [ ] Recognize user location and offer some nearest events

## Design Docs
* [View Wireframes](https://github.com/Albert2522/MeetUp_full_stack/tree/master/docs/wireframes)
* [React Components](https://github.com/Albert2522/MeetUp_full_stack/blob/master/docs/component-hierarchy.md)
* [API Endpoints](https://github.com/Albert2522/MeetUp_full_stack/blob/master/docs/api-endpoints.md)
* [Database Schema](https://github.com/Albert2522/MeetUp_full_stack/blob/master/docs/schema.md)
* [Sample State](https://github.com/Albert2522/MeetUp_full_stack/blob/master/docs/sample-state.md)

##Implementation Timeline
###Phase 1: Backend setup, authentication (2 Days)
**Objective**: Setup rails backend to sign up, log in, log out. Create foundation for database with some fixture data (Category, Group, Huddle)

###Phase 2: Landing page (1 Day)
**Objective**: Implement landing page wireframe that shows general data when not logged in - Categories, upcoming Events, how Events web-app works. General structure.

###Phase 3: Categories and Groups (3 Days)
**Objective**: Create Categories. Implement to create a Group in category, show individual Group page, with feature to join this Group.

###Phase 4: Events (2 Days)
**Objective**: Implement create an Event in Group, show individual Event, with feature to RSVP for Event.

###Phase 6: User page (1.5 Days)
**Objective**: Show users Groups that they join and the Events they RSVP'd to.

###Phase 7: Search (Until submission time)
**Objective**: Implement a search feature to look up Groups or Categories.

###Phase 8: Search (Until submission time)
**Objective**: Show location based "Events near you". Calendar In User Page.

###Bonus Features (Will Try to Implement):
- [ ] Add tags to groups
- [ ] Recommend other groups to User based on Groups with similar tags
