import NextjsIcon from "@/icons/NextjsIcon.astro"
import ReactIcon from "@/icons/ReactIcon.astro"
import BootstrapIcon from "@/icons/BootstrapIcon.astro"
import ReduxIcon from "@/icons/ReduxIcon.astro"
import SassIcon from "@/icons/SassIcon.astro"
import TypeScriptIcon from "@/icons/TypeScriptIcon.astro"
import HTMLIcon from "@/icons/HTMLIcon.astro"
import CSSIcon from "@/icons/CSSIcon.astro"
import JavaScriptIcon from "@/icons/JavaScriptIcon.astro"

export const EXPERIENCE = [
  {
    date: "Nov. 2021 - Nov. 2023",
    title: "Frontend Developer",
    company: "Terapify",
    description: [
      "Implementar el nuevo diseño al espacio de los usuarios que tiene sesión iniciada.",
      "Construcción de una calendario para el registro diario de como se sienten los usuarios.",
      "Documentación e implementación de pautas para estandarizar el desarrollo entre los integrantes del área de tecnología.",
    ],
    link: "https://www.terapify.com/",
  },
  {
    date: "Oct. 2020 - Oct. 2021",
    title: "Frontend Engineer",
    company: "Trade EC",
    description: [
      "Maquetación y programación de SPA y App móvil.",
      "Resolución de conflictos en Bitbucket sobre el Frontend.",
      "Reducir el tiempo de revisión del código en un 5% desarrollando código de calidad.",
      "Reducir el 50% del tiempo en una tarea implementando el react-select que tenía las funcionalidades que se requerían.",
      "Sugerir cambios en los estilos para una mejor experiencia de usuario.",
    ],
    link: "https://trdglobal.io/",
  },
  {
    date: "Jun. 2019 - Jun. 2020",
    title: "Software Engineer, Frontend",
    company: "Urbaner",
    description: [
      "Maquetación y programación de SPA.",
      "Resolución de conflictos en Gitlab sobre el Frontend.",
      "Implementar el nuevo diseño de creación de pedidos mejorando la experiencia del usuario.",
      "Integrar la nueva apariencia de la web hecha en Jquery hacia ReactJs.",
      "Participar en reuniones semanales dedicadas a temas de tecnología.",
      "Implementar funcionalidad de geolocalización, reduciendo costos para la empresa.",
    ],
    link: "https://www.urbaner.com/",
  },
  {
    date: "Ago. 2018 - May. 2019",
    title: "Analista Programador Frontend",
    company: "Tecnika Soluciones",
    description: ["Maquetación y programación de Landing Page."],
  },
  {
    date: "Abr. 2018 - Jul. 2018",
    title: "Frontend Developer",
    company: "Eureka Tech",
    description: [
      "Maquetación y programación de Landing Page y One Page.",
      "Maquetación de Mailing para envíos masivos a través de EmBlue.",
      "Resolución de conflictos en Gitlab sobre el Frontend.",
    ],
  },
]

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-[#595959]",
    icon: NextjsIcon,
  },
  REACT: {
    name: "React",
    class: "bg-[#087ea4]",
    icon: ReactIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#3E1989]",
    icon: BootstrapIcon,
  },
  REDUX: {
    name: "Redux",
    class: "bg-[#19013f]",
    icon: ReduxIcon,
  },
  SASS: {
    name: "Sass",
    class: "bg-[#405E5E]",
    icon: SassIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#262626]",
    icon: TypeScriptIcon,
  },
  HTML: {
    name: "HTML5",
    class: "bg-[#832a00]",
    icon: HTMLIcon,
  },
  CSS: {
    name: "CSS3",
    class: "bg-[#002678]",
    icon: CSSIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#615800]",
    icon: JavaScriptIcon,
  },
}

export const PROJECTS = [
  {
    title: "Catálogo de Amiibos",
    description:
      "Plataforma que muestra la lista de Amiibos usando AmiiboAPI. Hecho con Next.js, React, TypeScript, Sass. Fue una prueba para una postulación.",
    link: "https://amiibos.vercel.app/",
    github: "https://github.com/gabiprds93/amiibo-catalog-nextjs",
    image: "/projects/amiibos.webp",
    tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.SASS],
  },
  {
    title: "Pokédex",
    description:
      "Plataforma con la lista de Pokémons usando PokéApi. Hecho con Next.js, React, TypeScript. Se realizó para una prueba técnica",
    link: "https://complete-pokedex.vercel.app/",
    github: "https://github.com/gabiprds93/pokedex",
    image: "/projects/pokedex.webp",
    tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT],
  },
  {
    title: "Disney Trivia",
    description:
      "Trivia sobre películas de Disney. Hecho con React, Redux, Bootstrap. Este fue un ejercicio que se hizo en el bootcamp de Laboratoria.",
    link: "https://gabiprds93.github.io/Trivia-Redux/",
    github: "https://github.com/gabiprds93/Trivia-Redux/",
    image: "/projects/trivia.webp",
    tags: [TAGS.REACT, TAGS.REDUX, TAGS.BOOTSTRAP],
  },
  {
    title: "Run Maze",
    description:
      "Laberinto donde se tiene que encontrar la salida. Hecho con React, Redux, Bootstrap. Este fue un ejercicio que se hizo en el bootcamp de Laboratoria.",
    link: "https://gabiprds93.github.io/Laberinto/",
    github: "https://github.com/gabiprds93/Laberinto/",
    image: "/projects/maze.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
  },
]

export const navItems = [
  {
    title: "Inicio",
    label: "inicio",
    url: "/#inicio",
  },
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
]
