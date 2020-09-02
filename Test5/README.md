Surveyor App

##Back-End

1. First install depedencies with

```
$ npm i
```

2. Configure congfig.json in config folder

3. Set-up database

```
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed:all
```

4. Running your server

```
$ nodemon
```

##Front-End

1. Run Client with

```
$ npm i
$ npm run start
```

2. Login as Admin

```
        {
          email: "JohnDoe@email.com",
          password: "johnDoe",
        },
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
