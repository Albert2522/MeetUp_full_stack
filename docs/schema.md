## Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name      | string    | not null


##categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
author_id   | integer   | not null
category_id | integer   | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | integer   | not null
group_id    | integer   | not null, foreign key (references group), only has one
author_id   | integer   | not null
description | text      | not null
date        | datetime  | not null

##photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
event_id    | integer   | not null


## user_groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user)
group_id    | integer   | not null, foreign key (references group)

## user_events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user)
event_id    | integer   | not null, foreign key (references event)

## React Routes
route       | component
------------|----------
/           | App
/signup     | SessionForm
/login      | SessionForm
/user       | UserIndex > RSVPIndex
/groups     | GroupIndex
/categories | CategoryIndex
