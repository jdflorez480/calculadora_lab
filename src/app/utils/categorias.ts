import {
  BriefcaseIcon,
  CalculatorIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export const categorias = [
  {
    id: 'laborales',
    titulo: 'Calculadoras Laborales',
    descripcion: 'Herramientas para cálculos relacionados con tu trabajo',
    calculadoras: [
      {
        titulo: 'Liquidación Laboral',
        descripcion: 'Calcula tu liquidación final incluyendo todas tus prestaciones sociales',
        icono: BriefcaseIcon,
        href: '/calculadoras/liquidacion'
      },
      {
        titulo: 'Calculadora de Nómina',
        descripcion: 'Calcula tu salario neto mensual incluyendo todas las deducciones',
        icono: CalculatorIcon,
        href: '/calculadoras/nomina'
      },
      {
        titulo: 'Horas Extras',
        descripcion: 'Calcula el valor de tus horas extras, recargos nocturnos y dominicales',
        icono: ClockIcon,
        href: '/calculadoras/horas-extras'
      },
      {
        titulo: 'Retención en la Fuente',
        descripcion: 'Calcula el valor de tu retención en la fuente mensual',
        icono: CurrencyDollarIcon,
        href: '/calculadoras/retencion'
      }
    ]
  },
  {
    id: 'financieras',
    titulo: 'Calculadoras Financieras',
    descripcion: 'Herramientas para tus finanzas personales',
    calculadoras: [
      {
        titulo: 'GMF (4x1000)',
        descripcion: 'Calcula el gravamen a los movimientos financieros',
        icono: BanknotesIcon,
        href: '/calculadoras/gmf'
      },
      {
        titulo: 'Préstamos',
        descripcion: 'Simula créditos y calcula cuotas mensuales',
        icono: HomeIcon,
        href: '/calculadoras/prestamos'
      },
      {
        titulo: 'Impuesto de Renta',
        descripcion: 'Calcula tu impuesto de renta anual',
        icono: DocumentTextIcon,
        href: '/calculadoras/renta'
      }
    ]
  },
  {
    id: 'seguridad-social',
    titulo: 'Seguridad Social',
    descripcion: 'Calcula tus aportes a la seguridad social',
    calculadoras: [
      {
        titulo: 'Aportes Independientes',
        descripcion: 'Calcula tus aportes como trabajador independiente',
        icono: UserGroupIcon,
        href: '/calculadoras/aportes-independientes'
      }
    ]
  }
];