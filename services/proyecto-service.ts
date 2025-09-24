export interface ProyectoFrontmatter {
  titulo: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  fecha: string;
  cliente: string;
  area: string;
  duracion: string;
  servicios: string[];
  destacado: boolean;
  imagen: string;
}

export interface Proyecto {
  slug: string;
  frontmatter: ProyectoFrontmatter;
  content: string;
  htmlContent?: string;
}

// Datos mock para desarrollo - en producción estos vendrían de archivos MD
const proyectosMock: Proyecto[] = [
  {
    slug: 'urbanizacion-villa-del-rio',
    frontmatter: {
      titulo: 'Urbanización Villa del Río',
      descripcion: 'Desarrollo urbano sostenible con enfoque en la preservación del medio ambiente y la calidad de vida de los residentes.',
      categoria: 'Urbanismo',
      ubicacion: 'Bogotá, Colombia',
      fecha: '2023-08-15',
      cliente: 'Constructora Villa del Río S.A.S.',
      area: '25 hectáreas',
      duracion: '18 meses',
      servicios: ['Diseño Urbano', 'Estudios Ambientales', 'Gestión de Permisos', 'Supervisión Técnica'],
      destacado: true,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20residential%20urbanization%20with%20green%20spaces%20and%20sustainable%20design%2C%20aerial%20view%2C%20contemporary%20architecture&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  },
  {
    slug: 'embalse-la-esperanza',
    frontmatter: {
      titulo: 'Embalse La Esperanza',
      descripcion: 'Proyecto de infraestructura hídrica para el suministro de agua potable y generación de energía limpia.',
      categoria: 'Infraestructura',
      ubicacion: 'Cundinamarca, Colombia',
      fecha: '2023-06-20',
      cliente: 'Empresa de Acueducto y Alcantarillado',
      area: '150 hectáreas',
      duracion: '24 meses',
      servicios: ['Estudios Hidrológicos', 'Diseño de Presa', 'Evaluación Ambiental', 'Gestión Social'],
      destacado: true,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=large%20water%20reservoir%20dam%20with%20hydroelectric%20infrastructure%2C%20mountain%20landscape%2C%20engineering%20project&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  },
  {
    slug: 'centro-comercial-metropolitano',
    frontmatter: {
      titulo: 'Centro Comercial Metropolitano',
      descripcion: 'Complejo comercial de última generación con espacios multifuncionales y tecnología inteligente.',
      categoria: 'Comercial',
      ubicacion: 'Medellín, Colombia',
      fecha: '2023-04-10',
      cliente: 'Grupo Inmobiliario Metropolitano',
      area: '8 hectáreas',
      duracion: '20 meses',
      servicios: ['Arquitectura Comercial', 'Ingeniería Estructural', 'Sistemas Inteligentes', 'Gestión de Proyecto'],
      destacado: false,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20shopping%20mall%20exterior%20with%20glass%20facade%20and%20contemporary%20design%2C%20urban%20setting%2C%20commercial%20architecture&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  },
  {
    slug: 'via-alterna-zipaquira',
    frontmatter: {
      titulo: 'Vía Alterna Zipaquirá',
      descripcion: 'Construcción de vía alterna para mejorar la conectividad y reducir los tiempos de desplazamiento.',
      categoria: 'Vial',
      ubicacion: 'Zipaquirá, Colombia',
      fecha: '2023-02-28',
      cliente: 'Instituto Nacional de Vías - INVÍAS',
      area: '12 km lineales',
      duracion: '15 meses',
      servicios: ['Diseño Vial', 'Estudios de Tráfico', 'Gestión Predial', 'Supervisión de Obra'],
      destacado: true,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20highway%20construction%20with%20bridges%20and%20road%20infrastructure%2C%20mountainous%20terrain%2C%20civil%20engineering&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  },
  {
    slug: 'parque-industrial-sabana',
    frontmatter: {
      titulo: 'Parque Industrial Sabana',
      descripcion: 'Desarrollo de parque industrial con infraestructura moderna y servicios especializados.',
      categoria: 'Industrial',
      ubicacion: 'Sabana de Bogotá, Colombia',
      fecha: '2022-12-15',
      cliente: 'Corporación Industrial Sabana',
      area: '45 hectáreas',
      duracion: '22 meses',
      servicios: ['Planificación Industrial', 'Infraestructura', 'Servicios Públicos', 'Gestión Ambiental'],
      destacado: false,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20park%20with%20modern%20warehouses%20and%20manufacturing%20facilities%2C%20aerial%20view%2C%20industrial%20architecture&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  },
  {
    slug: 'conjunto-residencial-los-pinos',
    frontmatter: {
      titulo: 'Conjunto Residencial Los Pinos',
      descripcion: 'Proyecto habitacional con viviendas de interés social y espacios comunitarios integrados.',
      categoria: 'Residencial',
      ubicacion: 'Soacha, Colombia',
      fecha: '2022-10-05',
      cliente: 'Ministerio de Vivienda',
      area: '18 hectáreas',
      duracion: '16 meses',
      servicios: ['Vivienda Social', 'Espacios Públicos', 'Infraestructura Básica', 'Gestión Comunitaria'],
      destacado: false,
      imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=social%20housing%20residential%20complex%20with%20green%20areas%20and%20community%20spaces%2C%20modern%20affordable%20housing&image_size=landscape_16_9'
    },
    content: 'Contenido del proyecto...'
  }
];

export interface ProyectoPreview {
  slug: string;
  frontmatter: ProyectoFrontmatter;
  content: string;
  htmlContent?: string;
}

export async function getAllProyectos(): Promise<ProyectoPreview[]> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return proyectosMock.sort((a, b) => {
    if (a.frontmatter.destacado && !b.frontmatter.destacado) return -1;
    if (!a.frontmatter.destacado && b.frontmatter.destacado) return 1;
    return new Date(b.frontmatter.fecha).getTime() - new Date(a.frontmatter.fecha).getTime();
  });
}

export async function getProyectoPorSlug(slug: string): Promise<Proyecto | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return proyectosMock.find(proyecto => proyecto.slug === slug) || null;
}

export async function getProyectosByCategoria(categoria: string): Promise<ProyectoPreview[]> {
  const proyectos = await getAllProyectos();
  return proyectos.filter(proyecto => 
    proyecto.frontmatter.categoria.toLowerCase() === categoria.toLowerCase()
  );
}

export async function getCategorias(): Promise<string[]> {
  const proyectos = await getAllProyectos();
  const categorias = Array.from(
    new Set(proyectos.map(proyecto => proyecto.frontmatter.categoria))
  );
  return categorias.sort();
}

export async function getProyectosDestacados(): Promise<ProyectoPreview[]> {
  const proyectos = await getAllProyectos();
  return proyectos.filter(proyecto => proyecto.frontmatter.destacado);
}

// Mantener funciones con nombres en español para compatibilidad
export const obtenerTodosLosProyectos = getAllProyectos;
export const obtenerProyectoPorSlug = getProyectoPorSlug;
export const obtenerProyectosPorCategoria = getProyectosByCategoria;
export const obtenerCategorias = getCategorias;
export const obtenerProyectosDestacados = getProyectosDestacados;

// Obtener estadísticas de proyectos
export async function getEstadisticasProyectos() {
  const todosLosProyectos = await getAllProyectos();
  const categorias = await getCategorias();
  
  const estadisticas = {
    totalProyectos: todosLosProyectos.length,
    proyectosDestacados: todosLosProyectos.filter(p => p.frontmatter.destacado).length,
    categorias: categorias.length,
    proyectosPorCategoria: categorias.reduce((acc, categoria) => {
      acc[categoria] = todosLosProyectos.filter(p => p.frontmatter.categoria === categoria).length;
      return acc;
    }, {} as Record<string, number>),
    ubicaciones: [...new Set(todosLosProyectos.map(p => p.frontmatter.ubicacion))].length,
    clientes: [...new Set(todosLosProyectos.map(p => p.frontmatter.cliente))].length,
  };

  return estadisticas;
}

// Buscar proyectos por término
export async function buscarProyectos(termino: string): Promise<ProyectoPreview[]> {
  const todosLosProyectos = await getAllProyectos();
  const terminoLower = termino.toLowerCase();
  
  return todosLosProyectos.filter(proyecto => {
    const { titulo, descripcion, categoria, ubicacion, cliente } = proyecto.frontmatter;
    return (
      titulo.toLowerCase().includes(terminoLower) ||
      descripcion.toLowerCase().includes(terminoLower) ||
      categoria.toLowerCase().includes(terminoLower) ||
      ubicacion.toLowerCase().includes(terminoLower) ||
      cliente.toLowerCase().includes(terminoLower)
    );
  });
}

// Obtener proyectos recientes
export async function getProyectosRecientes(limite: number = 6): Promise<ProyectoPreview[]> {
  const todosLosProyectos = await getAllProyectos();
  return todosLosProyectos.slice(0, limite);
}

// Validar si existe un proyecto
export function existeProyecto(slug: string): boolean {
  const fullPath = path.join(proyectosDirectory, `${slug}.md`);
  return fs.existsSync(fullPath);
}

// Obtener slugs de todos los proyectos (útil para generación estática)
export async function getAllProyectoSlugs(): Promise<string[]> {
  try {
    const fileNames = fs.readdirSync(proyectosDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error al obtener slugs de proyectos:', error);
    return [];
  }
}

// Obtener proyecto anterior y siguiente para navegación
export async function getProyectoNavegacion(slug: string): Promise<{
  anterior: ProyectoPreview | null;
  siguiente: ProyectoPreview | null;
}> {
  const todosLosProyectos = await getAllProyectos();
  const indiceActual = todosLosProyectos.findIndex(p => p.slug === slug);
  
  if (indiceActual === -1) {
    return { anterior: null, siguiente: null };
  }
  
  return {
    anterior: indiceActual > 0 ? todosLosProyectos[indiceActual - 1] : null,
    siguiente: indiceActual < todosLosProyectos.length - 1 ? todosLosProyectos[indiceActual + 1] : null,
  };
}