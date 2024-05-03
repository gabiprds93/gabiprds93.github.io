import NextJSIcon from '@/icons/NextJS.astro'

export const EXPERIENCE = [
  {
    date: 'Nov. 2021 - Nov. 2023',
    title: 'Frontend Developer',
    company: 'Terapify',
    description: [
      'Implementar el nuevo diseño al espacio de los usuarios que tiene sesión iniciada.',
      'Construcción de una calendario para el registro diario de como se sienten los usuarios.',
      'Documentación e implementación de pautas para estandarizar el desarrollo entre los integrantes del área de tecnología.',
    ],
    link: 'https://www.terapify.com/',
  },
  {
    date: 'Oct. 2020 - Oct. 2021',
    title: 'Frontend Engineer',
    company: 'Trade EC',
    description: [
      'Maquetación y programación de SPA y App móvil.',
      'Resolución de conflictos en Bitbucket sobre el Frontend.',
      'Reducir el tiempo de revisión del código en un 5% desarrollando código de calidad.',
      'Reducir el 50% del tiempo en una tarea implementando el react-select que tenía las funcionalidades que se requerían.',
      'Sugerir cambios en los estilos para una mejor experiencia de usuario.',
    ],
    link: 'https://trdglobal.io/',
  },
  {
    date: 'Jun. 2019 - Jun. 2020',
    title: 'Software Engineer, Frontend',
    company: 'Urbaner',
    description: [
      'Maquetación y programación de SPA.',
      'Resolución de conflictos en Gitlab sobre el Frontend.',
      'Implementar el nuevo diseño de creación de pedidos mejorando la experiencia del usuario.',
      'Integrar la nueva apariencia de la web hecha en Jquery hacia ReactJs.',
      'Participar en reuniones semanales dedicadas a temas de tecnología.',
      'Implementar funcionalidad de geolocalización, reduciendo costos para la empresa.',
    ],
    link: 'https://www.urbaner.com/',
  },
  {
    date: 'Ago. 2018 - May. 2019',
    title: 'Analista Programador Frontend',
    company: 'TECNIKA SOLUCIONES S.R.L.',
    description: ['Maquetación y programación de Landing Page.'],
  },
  {
    date: 'Abr. 2018 - Jul. 2018',
    title: 'Frontend Developer',
    company: 'Eureka Tech',
    description: [
      'Maquetación y programación de Landing Page y One Page.',
      'Maquetación de Mailing para envíos masivos a través de EmBlue.',
      'Resolución de conflictos en Gitlab sobre el Frontend.',
    ],
  },
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextJSIcon,
  },
}

export const PROJECTS = [
  {
    title: 'Titulo del proyecto',
    description:
      'Donec iaculis neque vel est lacinia, non consectetur arcu euismod. Proin dapibus vulputate orci, non imperdiet ante placerat sit amet. Aliquam vitae dolor id risus sodales ultrices. Donec diam ipsum, rhoncus ut ante sollicitudin, tristique viverra mi. Fusce in diam nibh. Integer mauris neque, interdum sed viverra at, laoreet non ligula. Nulla facilisi. Nam ut purus felis. Nunc suscipit nibh vel sem dignissim aliquam.',
    link: 'https://svgl.vercel.apphttps://github.com/gabiprds93',
    github: 'https://github.com/gabiprds93',
    image: '/projects/project1.webp',
    tags: [TAGS.NEXT],
  },
]

export const navItems = [
  {
    title: 'Inicio',
    label: 'inicio',
    url: '/#inicio',
  },
  {
    title: 'Experiencia',
    label: 'experiencia',
    url: '/#experiencia',
  },
  {
    title: 'Proyectos',
    label: 'proyectos',
    url: '/#proyectos',
  },
  {
    title: 'Sobre mí',
    label: 'sobre-mi',
    url: '/#sobre-mi',
  },
]
