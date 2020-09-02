Surveyor App

#Back-End
1. Run Server with
```
$ nodemon
```
2. (this is one time only) Because the only way to login is you must have an account and as the first person the only way you can login is by registering yourself first using app like Postman, after that click "Body" then "x-www-form-urlencoded" fill with key-value pair like below
```
{
    firstName: (your first name),
    lastName: (your last name),
    email: (your email),
    password: (your password),
    role: "admin",
}
```
3. Then you can go to Client side and login with email and password you just filled in and you can register another account there

#Front-End
1. Run Client with
```
$ npm run start
```

#Features
## Admin
- Can create a new User(Admin/Surveyor)
- Can Approve or Decline a Product
- Can see approved product

## Surveyor
- Can add a new product 
- Can take down declined product 
- Can see approved product

## Visitor
- Can see approved product
- Can't Login