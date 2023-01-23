## Personal Website


A personal Website.
Built with React, Gatsby, JavaScript, Sass, Firebase and Storybook.

[Live version](https://timely-sunshine-57d072.netlify.app/)

## Project Status

The project is complete, but I plan to add more animations and functionality in future.


## **Reflection**

A personal Website to showcase projects, flex skills, and send positive vibes.

I started making prototype in Figma and came up with a design inspired by the Google Chrome greeting page:

<img width="500" alt="googleExample" src="https://user-images.githubusercontent.com/88290696/184224995-713dc748-a1bf-4ad0-9c97-5b2804879894.png">

So I decided to make something similar and that was my first prototype:

<img width="500" alt="prototype" src="https://user-images.githubusercontent.com/88290696/184225015-a34000a4-e100-4d9c-afb2-4d6501c4ee76.png">


I learned GSAP animation Library which made animation 10x easier,  and I decided to experiment with it, which lead to the current state:

![pw-gif](https://user-images.githubusercontent.com/88290696/184225043-7b3e34b0-aae7-43b6-a199-917ab3c52aee.gif)


Gatsby Pages are rendered inside the Layout wrapper and the Layout itself holds the the state between renders using React Context, which opens Main Content area in full height even if user skips the Home page and access directly sub-pages: website/About.com or website/Projects.com.
