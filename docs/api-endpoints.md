# API Endpoints

## HTML API

### Root

- `GET /` - will load **Welcome component**

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/user/:userId/`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Categories

- `GET /api/categories`
- `GET /api/categories/:id`

### Groups

- `GET /api/groups`
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups`

### Events

- `GET /api/events`
- `POST /api/events`
- `GET /api/groups/:groupId/events`
- `GET /api/groups/:groupId/events/:id`
- `DELETE /api/events`
- `PATCH /api/events/:id`
