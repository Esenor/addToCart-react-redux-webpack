# React Es6 Babel Application #

Simple ToDo list application project with React, Webpack and Babel.

    docker-compose -f docker/docker-compose_dev.yml build
    docker-compose -f docker/docker-compose_dev.yml up -d
    
> Open http://{dockerhost}:8044

## Build webpack bundle ##

file will be created in /static/bundle.js

> Inside container

    npm run build
