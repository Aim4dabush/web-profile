import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export const projectData = [
  {
    id: "magic-eight-ball",
    title: "Magic Eight Ball",
    image:
      process.env.PUBLIC_URL +
      "/images/projects/pics/magic_eight_ball_project.png",
    gif: process.env.PUBLIC_URL + "/images/projects/gifs/magic_eight_ball.mp4",
    description:
      "One of my first projects with javascript. It's the classic magic eight ball toy. You input a question and the magic eight ball will give you an answer.",
    github: "https://github.com/Aim4dabush/magic8ball",
    deploySite: "https://aim4dabush.github.io/magic8ball/",
    responsive: "any width",
    languages: [
      {
        id: 1,
        icon: faCss3Alt,
      },
      {
        id: 2,
        icon: faHtml5,
      },
      {
        id: 3,
        icon: faJsSquare,
      },
      {
        id: 4,
        icon: faBootstrap,
      },
    ],
  },
  {
    id: "api-store",
    title: "API Store",
    image: process.env.PUBLIC_URL + "/images/projects/pics/api_store.png",
    gif: process.env.PUBLIC_URL + "/images/projects/gifs/api_store.mp4",
    description:
      "This is my first project using an api. The api is called fake store api. The mvp and stretch goals are in the readme file if you go to the repository.",
    github: "https://github.com/Aim4dabush/api-store",
    deploySite: "https://aim4dabush.github.io/api-store/",
    responsive: "no",
    languages: [
      {
        id: 1,
        icon: faBootstrap,
      },
      {
        id: 2,
        icon: faCss3Alt,
      },
      {
        id: 3,
        icon: faHtml5,
      },
      {
        id: 4,
        icon: faJsSquare,
      },
      {
        id: 5,
        icon: faReact,
      },
    ],
  },
  {
    id: "intro-sign-up-form",
    title: "Intro Sign Up Form",
    image:
      process.env.PUBLIC_URL + "/images/projects/pics/intro_sign_up_form.png",
    gif:
      process.env.PUBLIC_URL + "/images/projects/gifs/intro_sign_up_form.mp4",
    description:
      "Project 5 of 16 from '16 front-end projects to help improve your coding skills'. We had to recreate the website as well as add form validation. It was one of our first projects so we did mobile only.",
    github: "https://github.com/Aim4dabush/intro-sign-up-form",
    deploySite: "https://aim4dabush.github.io/intro-sign-up-form/",
    responsive: "max-width: 375px",
    languages: [
      {
        id: 1,
        icon: faCss3Alt,
      },
      {
        id: 2,
        icon: faHtml5,
      },
      {
        id: 3,
        icon: faJsSquare,
      },
      {
        id: 4,
        icon: faSass,
      },
      {
        id: 5,
        icon: faReact,
      },
    ],
  },
  {
    id: "war-card-game",
    title: "War Card Game",
    image: process.env.PUBLIC_URL + "/images/projects/pics/war_card_game.png",
    gif: process.env.PUBLIC_URL + "/images/projects/gifs/war_card_game.mp4",
    description:
      "This is the war card game. I used the deck api for the cards but the rest I coded. For more details you can visit the repository.",
    github: "https://github.com/Aim4dabush/war-card-game",
    deploySite: "https://aim4dabush.github.io/war-card-game/",
    responsive: "no",
    languages: [
      {
        id: 1,
        icon: faCss3Alt,
      },
      {
        id: 2,
        icon: faHtml5,
      },
      {
        id: 3,
        icon: faJsSquare,
      },
      {
        id: 4,
        icon: faReact,
      },
    ],
  },
];
