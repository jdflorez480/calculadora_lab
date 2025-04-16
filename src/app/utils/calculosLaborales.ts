// Constantes
export const AUXILIO_TRANSPORTE_2024 = 200000;
export const DIAS_ANO = 360;
export const DIAS_SEMESTRE = 180;
export const SALARIO_MINIMO_2025 = 1423500;
export const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;

// Porcentajes de aportes del empleado
export const PORCENTAJE_SALUD_EMPLEADO = 0.04; // 4%
export const PORCENTAJE_PENSION_EMPLEADO = 0.04; // 4%

// Constantes para cálculos de nómina
export const PORCENTAJE_SALUD = 0.04; // 4% del salario base
export const PORCENTAJE_PENSION = 0.04; // 4% del salario base
export const AUXILIO_TRANSPORTE_2025 = 162000;

// Constantes para horas extras
export const RECARGO_HORA_EXTRA_DIURNA = 0.25; // 25% adicional
export const RECARGO_HORA_EXTRA_NOCTURNA = 0.75; // 75% adicional
export const RECARGO_HORA_DOMINICAL_FESTIVO = 0.75; // 75% adicional
export const RECARGO_HORA_EXTRA_DOMINICAL_FESTIVO = 1.00; // 100% adicional
export const RECARGO_NOCTURNO = 0.35; // 35% adicional

// Constantes para retención en la fuente 2025
export const UVT_2025 = 47065;
export const RANGO_UVT = {
  RANGO1: 95,
  RANGO2: 150,
  RANGO3: 360,
  RANGO4: 640,
  RANGO5: 945,
  RANGO6: 2300
};

export interface DatosLiquidacion {
  salarioBase: number;
  auxilioTransporte: boolean;
  fechaInicio: Date;
  fechaFin: Date;
}

interface DatosNomina {
  salarioBase: number;
  otrosIngresos?: number;
  diasTrabajados: number;
  auxilioTransporte: boolean;
}

interface ResultadoNomina {
  salarioBase: number;
  auxilioTransporte: number;
  otrosIngresos: number;
  totalIngresos: number;
  descuentoSalud: number;
  descuentoPension: number;
  totalDeducciones: number;
  salarioNeto: number;
}

interface DatosHorasExtras {
  salarioBase: number;
  horasExtrasDiurnas: number;
  horasExtrasNocturnas: number;
  horasDominicalesFestivas: number;
  horasExtrasDominicalesFestivas: number;
  horasNocturnas: number;
}

interface ResultadoHorasExtras {
  valorHoraOrdinaria: number;
  totalHorasExtrasDiurnas: number;
  totalHorasExtrasNocturnas: number;
  totalHorasDominicalesFestivas: number;
  totalHorasExtrasDominicalesFestivas: number;
  totalRecargoNocturno: number;
  totalGeneral: number;
}

interface DatosRetencion {
  salarioBase: number;
  bonificaciones?: number;
  comisiones?: number;
  auxilioTransporte: boolean;
  fondoVoluntarioPensiones?: number;
  afc?: number;
  dependientes: boolean;
  interesesVivienda?: number;
  medicinaPrepagada?: number;
}

interface ResultadoRetencion {
  baseGravable: number;
  totalDeducciones: number;
  rentaExenta: number;
  totalRetencion: number;
  detalleDeducciones: {
    concepto: string;
    valor: number;
  }[];
}

export const calcularDiasLaborados = (fechaInicio: Date, fechaFin: Date): number => {
  const mesesCompletos = (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12 + 
    (fechaFin.getMonth() - fechaInicio.getMonth());
  
  let diasTotales = mesesCompletos * 30;

  // Calcular los días del primer mes (considerando 30 días máximo)
  const diaInicio = Math.min(fechaInicio.getDate(), 30);
  diasTotales -= (diaInicio - 1);

  // Calcular los días del último mes (considerando 30 días máximo)
  const diaFin = Math.min(fechaFin.getDate(), 30);
  diasTotales += diaFin;

  // No permitir días negativos y limitar a 360 días máximo
  return Math.max(0, Math.min(diasTotales, DIAS_ANO));
};

export const calcularSalarioTotal = (salarioBase: number, incluirAuxilio: boolean): number => {
  return incluirAuxilio ? salarioBase + AUXILIO_TRANSPORTE_2024 : salarioBase;
};

export const calcularCesantias = (salarioTotal: number, diasLaborados: number): number => {
  return Math.round((salarioTotal * diasLaborados) / DIAS_ANO);
};

export const calcularInteresesCesantias = (cesantias: number, diasLaborados: number): number => {
  return Math.round((cesantias * 0.12 * diasLaborados) / DIAS_ANO);
};

export const calcularPrimaServicios = (salarioTotal: number, diasLaborados: number): { primerSemestre: number, segundoSemestre: number } => {
  const valorPrimaSemestre = Math.round((salarioTotal * Math.min(diasLaborados, DIAS_SEMESTRE)) / DIAS_ANO);
  if (diasLaborados <= DIAS_SEMESTRE) {
    return {
      primerSemestre: valorPrimaSemestre,
      segundoSemestre: 0
    };
  }
  return {
    primerSemestre: valorPrimaSemestre,
    segundoSemestre: valorPrimaSemestre
  };
};

export const calcularVacaciones = (salarioBase: number, diasLaborados: number): number => {
  return Math.round((salarioBase * diasLaborados) / 720);
};

export const calcularAporteSalud = (salarioBase: number): number => {
  return Math.round(salarioBase * PORCENTAJE_SALUD_EMPLEADO);
};

export const calcularAportePension = (salarioBase: number): number => {
  return Math.round(salarioBase * PORCENTAJE_PENSION_EMPLEADO);
};

export const calcularTotalAportes = (salarioBase: number): number => {
  return calcularAporteSalud(salarioBase) + calcularAportePension(salarioBase);
};

export const calcularLiquidacionTotal = (datos: DatosLiquidacion) => {
  const diasLaborados = calcularDiasLaborados(datos.fechaInicio, datos.fechaFin);
  const salarioTotal = calcularSalarioTotal(datos.salarioBase, datos.auxilioTransporte);
  const cesantias = calcularCesantias(salarioTotal, diasLaborados);
  const interesesCesantias = calcularInteresesCesantias(cesantias, diasLaborados);
  const { primerSemestre: primaPrimerSemestre, segundoSemestre: primaSegundoSemestre } = calcularPrimaServicios(salarioTotal, diasLaborados);
  const vacaciones = calcularVacaciones(datos.salarioBase, diasLaborados);
  const aportesSalud = calcularAporteSalud(datos.salarioBase);
  const aportesPension = calcularAportePension(datos.salarioBase);
  
  // El total es la suma de todas las prestaciones (los aportes son solo informativos)
  const total = cesantias + interesesCesantias + primaPrimerSemestre + primaSegundoSemestre + vacaciones;
  
  return {
    diasLaborados,
    cesantias,
    interesesCesantias,
    primaPrimerSemestre,
    primaSegundoSemestre,
    vacaciones,
    aportesSalud,
    aportesPension,
    total,
    totalDescuentos: aportesSalud + aportesPension // Solo para mostrar informativamente
  };
};

export const calcularNomina = (datos: DatosNomina): ResultadoNomina => {
  const {
    salarioBase,
    otrosIngresos = 0,
    diasTrabajados,
    auxilioTransporte
  } = datos;

  // Calcular salario proporcional a días trabajados
  const salarioProporcional = (salarioBase / 30) * diasTrabajados;
  
  // Calcular auxilio de transporte si aplica
  const auxilioTransporteProporcional = auxilioTransporte
    ? (AUXILIO_TRANSPORTE_2025 / 30) * diasTrabajados
    : 0;

  // Calcular deducciones
  const baseParaDeducciones = salarioProporcional;
  const descuentoSalud = baseParaDeducciones * PORCENTAJE_SALUD;
  const descuentoPension = baseParaDeducciones * PORCENTAJE_PENSION;
  
  // Calcular totales
  const totalIngresos = salarioProporcional + auxilioTransporteProporcional + otrosIngresos;
  const totalDeducciones = descuentoSalud + descuentoPension;
  const salarioNeto = totalIngresos - totalDeducciones;

  return {
    salarioBase: salarioProporcional,
    auxilioTransporte: auxilioTransporteProporcional,
    otrosIngresos,
    totalIngresos,
    descuentoSalud,
    descuentoPension,
    totalDeducciones,
    salarioNeto
  };
};

export const calcularHorasExtras = (datos: DatosHorasExtras): ResultadoHorasExtras => {
  const valorHoraOrdinaria = datos.salarioBase / 240; // 30 días x 8 horas

  // Cálculo de cada tipo de hora extra
  const totalHorasExtrasDiurnas = 
    valorHoraOrdinaria * (1 + RECARGO_HORA_EXTRA_DIURNA) * datos.horasExtrasDiurnas;

  const totalHorasExtrasNocturnas = 
    valorHoraOrdinaria * (1 + RECARGO_HORA_EXTRA_NOCTURNA) * datos.horasExtrasNocturnas;

  const totalHorasDominicalesFestivas = 
    valorHoraOrdinaria * (1 + RECARGO_HORA_DOMINICAL_FESTIVO) * datos.horasDominicalesFestivas;

  const totalHorasExtrasDominicalesFestivas = 
    valorHoraOrdinaria * (1 + RECARGO_HORA_EXTRA_DOMINICAL_FESTIVO) * datos.horasExtrasDominicalesFestivas;

  const totalRecargoNocturno =
    valorHoraOrdinaria * RECARGO_NOCTURNO * datos.horasNocturnas;

  // Suma total
  const totalGeneral = 
    totalHorasExtrasDiurnas +
    totalHorasExtrasNocturnas +
    totalHorasDominicalesFestivas +
    totalHorasExtrasDominicalesFestivas +
    totalRecargoNocturno;

  return {
    valorHoraOrdinaria,
    totalHorasExtrasDiurnas,
    totalHorasExtrasNocturnas,
    totalHorasDominicalesFestivas,
    totalHorasExtrasDominicalesFestivas,
    totalRecargoNocturno,
    totalGeneral
  };
};

export const calcularRetencionFuente = (datos: DatosRetencion): ResultadoRetencion => {
  // 1. Calcular ingreso total mensual
  const ingresoTotal = datos.salarioBase + 
    (datos.bonificaciones || 0) + 
    (datos.comisiones || 0);

  // 2. Calcular deducciones obligatorias
  const aportesSalud = ingresoTotal * PORCENTAJE_SALUD;
  const aportesPension = ingresoTotal * PORCENTAJE_PENSION;
  const fsp = ingresoTotal >= (16 * UVT_2025) ? (ingresoTotal * 0.01) : 0;

  // 3. Calcular deducciones adicionales
  const auxilioTransporte = datos.auxilioTransporte ? AUXILIO_TRANSPORTE_2025 : 0;
  const fondoVoluntarioPensiones = datos.fondoVoluntarioPensiones || 0;
  const afc = datos.afc || 0;
  const interesesVivienda = datos.interesesVivienda || 0;
  const medicinaPrepagada = Math.min(datos.medicinaPrepagada || 0, 16 * UVT_2025);

  // 4. Calcular deducción por dependientes
  const deduccionDependientes = datos.dependientes ? (ingresoTotal * 0.10) : 0;

  // 5. Calcular total deducciones
  const totalDeducciones = 
    aportesSalud + 
    aportesPension + 
    fsp +
    fondoVoluntarioPensiones +
    afc +
    interesesVivienda +
    medicinaPrepagada +
    deduccionDependientes;

  // 6. Calcular renta exenta (25% del ingreso menos deducciones)
  const baseParaRentaExenta = ingresoTotal - totalDeducciones;
  const rentaExenta = Math.min(baseParaRentaExenta * 0.25, 240 * UVT_2025);

  // 7. Calcular base gravable
  const baseGravable = ingresoTotal - totalDeducciones - rentaExenta - auxilioTransporte;

  // 8. Convertir base gravable a UVT
  const baseGravableUVT = baseGravable / UVT_2025;

  // 9. Calcular retención según tabla
  let retencion = 0;
  if (baseGravableUVT <= RANGO_UVT.RANGO1) {
    retencion = 0;
  } else if (baseGravableUVT <= RANGO_UVT.RANGO2) {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO1) * 0.19) * UVT_2025;
  } else if (baseGravableUVT <= RANGO_UVT.RANGO3) {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO2) * 0.28 + 10.45) * UVT_2025;
  } else if (baseGravableUVT <= RANGO_UVT.RANGO4) {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO3) * 0.33 + 69.05) * UVT_2025;
  } else if (baseGravableUVT <= RANGO_UVT.RANGO5) {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO4) * 0.35 + 162.65) * UVT_2025;
  } else if (baseGravableUVT <= RANGO_UVT.RANGO6) {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO5) * 0.37 + 269.40) * UVT_2025;
  } else {
    retencion = ((baseGravableUVT - RANGO_UVT.RANGO6) * 0.39 + 770.15) * UVT_2025;
  }

  return {
    baseGravable,
    totalDeducciones,
    rentaExenta,
    totalRetencion: retencion,
    detalleDeducciones: [
      { concepto: 'Aportes a Salud', valor: aportesSalud },
      { concepto: 'Aportes a Pensión', valor: aportesPension },
      { concepto: 'Fondo de Solidaridad Pensional', valor: fsp },
      { concepto: 'Fondo Voluntario de Pensiones', valor: fondoVoluntarioPensiones },
      { concepto: 'Cuenta AFC', valor: afc },
      { concepto: 'Intereses de Vivienda', valor: interesesVivienda },
      { concepto: 'Medicina Prepagada', valor: medicinaPrepagada },
      { concepto: 'Deducción por Dependientes', valor: deduccionDependientes }
    ]
  };
};