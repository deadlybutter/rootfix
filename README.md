# rootfix
Redirect route DNS to www

## Setup (Local)
```sh
$ git clone https://github.com/deadlybutter/rootfix.git
$ cd rootfix
$ cp .env.example .env
$ npm install
$ npm start
$ atom .
```

## Setup (Digital Ocean)
```sh
$ ssh root@ip_address
...
$ sudo apt-get update
$ sudo apt-get install git
$ git config --global user.name "Joe Kent"
$ git config --global user.email "thedeadlybutter@gmail.com"
$ npm install forever -g
$ git clone https://github.com/deadlybutter/rootfix.git
$ cd rootfix
$ cp .env.example .env
$ nano .env # Edit PORT to 80
$ npm install
$ forever start index.js
```
