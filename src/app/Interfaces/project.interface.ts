// Interfaces

// Projects
export interface Projects {
  projectId: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  imgHero: string;
  projectBackstage: boolean;
  productions: Productions[];
}

// Productions
export interface Productions {
  productionNumber: string;
  productionTitle: string;

  backgroundURL?: string;
  photos: string[];
}

export interface ContactInfoCompany {
  email: string;
  cel: number;
  tel?: number;
  address: string;
  numberAddress: number;
  cp?: number;
  city: string;
  province?: string;
  country: string;
}

export interface Company {
  name: string;
  contactInfo: ContactInfoCompany;
}

const COMPANY: Company = {
  name: 'Viky Habegger',
  contactInfo: {
    email: 'info@vikyhabegger.com',
    cel: 353,
    address: 'Belgrano',
    numberAddress: 388,
    cp: 2667,
    city: 'Ucacha',
    province: 'Córdoba',
    country: 'Argentina'
  }
};

// Prueba de Interces

// let projects: Projects[] = [
//   {
//     projectId: '0',
//     projectName: 'Vale Ellena',
//     projectType: 'XV AÑOS',
//     projectDescription: 'Esto es una breve descripción del project',
//     imgHero: 'assets/images/valeElenaPoster.jpg',
//     projectBackstage: true,
//     productions: [
//       {
//         productionNumber: 'Producción I',
//         productionTitle: 'Ama lo que haces',
//         backgroundURL: 'Ruta Video',
//         photos: [
//           '/assets/images/pofo-portfolio-layout-img-01.jpg',
//           'assets/images/pofo-portfolio-layout-img-02.jpg',
//           'assets/images/pofo-portfolio-layout-img-03.jpg',
//           'assets/images/pofo-portfolio-layout-img-04.jpg',
//           'assets/images/pofo-portfolio-layout-img-05.jpg'
//         ]
//       },
//       {
//         productionNumber: 'Production II',
//         productionTitle: 'Casual Nature',
//         backgroundURL: 'Ruta video',
//         photos: [
//           'assets/images/pofo-portfolio-layout-img-01.jpg',
//           'assets/images/pofo-portfolio-layout-img-02.jpg',
//           'assets/images/pofo-portfolio-layout-img-03.jpg',
//           'assets/images/pofo-portfolio-layout-img-04.jpg',
//           'assets/images/pofo-portfolio-layout-img-05.jpg'
//         ]
//       }
//     ]
//   }
// ];
