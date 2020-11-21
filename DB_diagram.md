## Users

Id int PK FK >- Follows.userid
userName string
email string
password string
avatar string
createdAt date

## Projects

id int PK
userId int FK >- Users.Id
title string
description string
photo string
video string
createdAt date

## Steps

id int PK
stepNumber int
projectid int FK >- Projects.id
title string
description string
photo string
video string

## Comments

id int PK
userId int FK >- Users.Id
projectId int FK >- Projects.id
text string
createdAt date

## Follows

id int PK
userid int
followableId int
followableType string
