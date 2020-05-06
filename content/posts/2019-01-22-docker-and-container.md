---

title:  "What really dockers and containers are ?"
date: 2019-01-07
published: true
tags: [ docker, cloud computing ]
cover_image : ./images/dockervscontainer.jpg
description: "Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions."
---
Well if you are out in the vast spaces of the internet, you might have come across the words like docker or container. It is hard to believe that you haven't. Even the studs like Google and Amazon are working to support such services 

Regardless of the immediate use case, if you belong to a field where apps are getting typed from your hands its must to understand the basics of the upcoming sensation. There are articles available in the voids but they are a bit heavy to digest suddenly, after this post it will be easier for you guys to accept those heavy tech words.

What is a container?

So if you ask a layman, a container is a box where you keep all your stuff mainly to isolate them and give them a separate space. 
Our tech container is no different than these containers. A container is used to isolate apps and their dependencies into one separate entity or you can say a container. This container then can be moved and shipped anywhere else in the world and can be deployed easily.

If you compare to traditional deployment paradigms, we need to have our separate server, a database, and our environment then we need to do big set up so that we can deploy our apps. But such setup is not scalable enough if a server crashes we need to do whole setup from the start which results in a big downtime.

So, a container provides us with system-level virtualization, we can completely set up our app in the virtual OS and then create a small container. This container contains our app core logic and setup including the operating system. Now, whenever we want to set up our app we just need to deploy this container and we are good to go.

What is docker?

So, in a simple terms docker is a widely used tool designed to make it easier to deploy and run applications using containers as discussed above. Docker helps a major problem of code working in one system and not working in other system. Application inside a container can run on any system that has docker installed.So, we dont need to setup our application on different platforms.

In the below image we can see a docker is in action :<br>
`1.Developer creates a docker file within the project itself by defining all the dependencies`<br>
`2.This docker files is used to create the docker image. Docker image will comprise of all the application and its dependencies`<br>
`3.Running the docker image will create the docker containers. Docker containers are nothing but the runtime instance of docker image`<br>
`4. These docker images can be stored in the online cloud repositories known as docker hub`<br>
`5. These images can be pulled to any enviroment (Test or production). This make sures that our application runs exactly the same way.`<br>

<!-- ![Docker Flow]({{site.baseurl}}/assets/images/dockerflow.jpg ){: .shadow style="width:600px"} -->

At first it might not be easy to digest to whole different workflow with dockers, but as compared to traditional app deployment dockers are efficient,scalable and easy to maintain.<br>

Further Reads:<br>

<a href='https://www.docker.com/get-started'>https://www.docker.com/get-started<a/>