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
export const AUXILIO_TRANSPORTE_2025 = 200000;

// Constantes para horas extras (actualizadas según reforma laboral 2025)
export const RECARGO_HORA_EXTRA_DIURNA = 0.25; // 25% adicional
export const RECARGO_HORA_EXTRA_NOCTURNA = 0.75; // 75% adicional
export const RECARGO_HORA_DOMINICAL_FESTIVO = 0.80; // 80% adicional (cambio 2025)
export const RECARGO_HORA_EXTRA_DOMINICAL_FESTIVO = 1.00; // 100% adicional
export const RECARGO_NOCTURNO = 0.35; // 35% adicional (horario cambia a 7PM-6AM en julio 2025)

// Constantes para retención en la fuente 2025
export const UVT_2025 = 49799;
export const RANGO_UVT = {
  RANGO1: 95,
  RANGO2: 150,
  RANGO3: 360,
  RANGO4: 640,
  RANGO5: 945,
  RANGO6: 2300
};

// Constantes para independientes
export const PORCENTAJE_PRESUNCION_COSTOS = 0.75; // 75% para independientes que no contratan empleados
export const PORCENTAJE_PRESUNCION_COSTOS_CON_EMPLEADOS = 0.5; // 50% para independientes que contratan empleados
export const LIMITE_PRESUNCION_COSTOS = 1000 * UVT_2025; // 1000 UVT

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
  tipoPersona: 'empleado' | 'independiente';
  salarioBase: number;
  bonificaciones?: number;
  comisiones?: number;
  auxilioTransporte: boolean;
  fondoVoluntarioPensiones?: number;
  afc?: number;
  dependientes: boolean;
  interesesVivienda?: number;
  medicinaPrepagada?: number;
  // Campos específicos para independientes
  contrataEmpleados?: boolean;
  aplicaPresuncionCostos?: boolean;
  gastosReales?: number;
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

interface DatosPrima {
  salarioBase: number;
  otrosIngresos: number;
  auxilioTransporte: boolean;
  fechaInicio: Date;
  fechaFin: Date;
}

interface ResultadoPrima {
  auxilioTransporte: number;
  totalPrima: number;
}

export const calcularPrima = (datos: DatosPrima): ResultadoPrima => {
  // Calcular el salario promedio incluyendo otros ingresos
  const salarioPromedio = datos.salarioBase + datos.otrosIngresos;

  // Determinar si aplica auxilio de transporte
  const auxilioTransporte = datos.auxilioTransporte ? AUXILIO_TRANSPORTE_2025 : 0;

  // Calcular los días trabajados en el semestre
  const diasTrabajados = calcularDiasLaborados(datos.fechaInicio, datos.fechaFin);
  const diasSemestre = Math.min(diasTrabajados, DIAS_SEMESTRE);

  // Calcular el valor de la prima
  // La prima es igual a: (Salario promedio + Auxilio de transporte) * días trabajados / 360
  const totalPrima = Math.round(((salarioPromedio + auxilioTransporte) * diasSemestre) / DIAS_ANO);

  return {
    auxilioTransporte,
    totalPrima
  };
};

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

const obtenerFechasSemestre = (año: number, semestre: 1 | 2): { inicio: Date; fin: Date } => {
  if (semestre === 1) {
    return {
      inicio: new Date(año, 0, 1), // 1 de enero
      fin: new Date(año, 5, 30)    // 30 de junio
    };
  } else {
    return {
      inicio: new Date(año, 6, 1),  // 1 de julio
      fin: new Date(año, 11, 31)    // 31 de diciembre
    };
  }
};

const calcularDiasSemestre = (fechaInicio: Date, fechaFin: Date, fechaSemestreInicio: Date, fechaSemestreFin: Date): number => {
  // Ajustar las fechas de inicio y fin al rango del semestre
  const inicioEfectivo = new Date(Math.max(fechaInicio.getTime(), fechaSemestreInicio.getTime()));
  const finEfectivo = new Date(Math.min(fechaFin.getTime(), fechaSemestreFin.getTime()));

  // Si no hay superposición con el semestre, retornar 0
  if (inicioEfectivo > fechaSemestreFin || finEfectivo < fechaSemestreInicio) {
    return 0;
  }

  // Calcular los días trabajados en el semestre
  const diasEnSemestre = calcularDiasLaborados(inicioEfectivo, finEfectivo);
  return Math.min(diasEnSemestre, DIAS_SEMESTRE);
};

export const calcularPrimaServicios = (salarioTotal: number, diasLaborados: number, fechaInicio: Date, fechaFin: Date): { primerSemestre: number, segundoSemestre: number } => {
  // Obtener el año o años involucrados
  const añoInicio = fechaInicio.getFullYear();
  const añoFin = fechaFin.getFullYear();
  
  let diasPrimerSemestre = 0;
  let diasSegundoSemestre = 0;

  // Si es el mismo año
  if (añoInicio === añoFin) {
    const fechasPrimerSemestre = obtenerFechasSemestre(añoInicio, 1);
    const fechasSegundoSemestre = obtenerFechasSemestre(añoInicio, 2);

    diasPrimerSemestre = calcularDiasSemestre(fechaInicio, fechaFin, fechasPrimerSemestre.inicio, fechasPrimerSemestre.fin);
    diasSegundoSemestre = calcularDiasSemestre(fechaInicio, fechaFin, fechasSegundoSemestre.inicio, fechasSegundoSemestre.fin);
  } else {
    // Si son años diferentes, debemos calcular para cada año
    // Primer semestre del primer año
    const fechasPrimerSemestreInicio = obtenerFechasSemestre(añoInicio, 1);
    diasPrimerSemestre = calcularDiasSemestre(fechaInicio, fechaFin, fechasPrimerSemestreInicio.inicio, fechasPrimerSemestreInicio.fin);

    // Segundo semestre del último año
    const fechasSegundoSemestreFin = obtenerFechasSemestre(añoFin, 2);
    diasSegundoSemestre = calcularDiasSemestre(fechaInicio, fechaFin, fechasSegundoSemestreFin.inicio, fechasSegundoSemestreFin.fin);
  }

  // Calcular el valor de cada prima
  const valorPrimaPrimerSemestre = Math.round((salarioTotal * diasPrimerSemestre) / DIAS_ANO);
  const valorPrimaSegundoSemestre = Math.round((salarioTotal * diasSegundoSemestre) / DIAS_ANO);

  return {
    primerSemestre: valorPrimaPrimerSemestre,
    segundoSemestre: valorPrimaSegundoSemestre
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
  const { primerSemestre: primaPrimerSemestre, segundoSemestre: primaSegundoSemestre } = calcularPrimaServicios(salarioTotal, diasLaborados, datos.fechaInicio, datos.fechaFin);
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

  if (datos.tipoPersona === 'empleado') {
    return calcularRetencionEmpleado(datos, ingresoTotal);
  } else {
    return calcularRetencionIndependiente(datos, ingresoTotal);
  }
};

const calcularRetencionEmpleado = (datos: DatosRetencion, ingresoTotal: number): ResultadoRetencion => {
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

  // 8. Calcular retención
  const retencion = calcularRetencionSegunTabla(baseGravable);

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

const calcularRetencionIndependiente = (datos: DatosRetencion, ingresoTotal: number): ResultadoRetencion => {
  // 1. Calcular costos y gastos
  let costos = 0;
  let detalleCostos = '';

  if (datos.aplicaPresuncionCostos) {
    // Aplicar presunción de costos según si contrata empleados o no
    const porcentajePresuncion = datos.contrataEmpleados 
      ? PORCENTAJE_PRESUNCION_COSTOS_CON_EMPLEADOS 
      : PORCENTAJE_PRESUNCION_COSTOS;
    
    costos = Math.min(ingresoTotal * porcentajePresuncion, LIMITE_PRESUNCION_COSTOS);
    detalleCostos = `Presunción de costos ${datos.contrataEmpleados ? '50%' : '75%'} (máx. 1000 UVT)`;
  } else {
    costos = datos.gastosReales || 0;
    detalleCostos = 'Costos y gastos reales';
  }

  // 2. Calcular renta líquida
  const rentaLiquida = ingresoTotal - costos;

  // 3. Calcular deducciones adicionales (no aplican aportes obligatorios para independientes)
  const fondoVoluntarioPensiones = datos.fondoVoluntarioPensiones || 0;
  const afc = datos.afc || 0;
  const interesesVivienda = datos.interesesVivienda || 0;
  const medicinaPrepagada = Math.min(datos.medicinaPrepagada || 0, 16 * UVT_2025);

  // 4. Calcular deducción por dependientes (sobre renta líquida)
  const deduccionDependientes = datos.dependientes ? (rentaLiquida * 0.10) : 0;

  // 5. Calcular total deducciones
  const totalDeducciones = 
    costos +
    fondoVoluntarioPensiones +
    afc +
    interesesVivienda +
    medicinaPrepagada +
    deduccionDependientes;

  // 6. Calcular renta exenta (25% de la renta líquida menos deducciones adicionales)
  const baseParaRentaExenta = rentaLiquida - (fondoVoluntarioPensiones + afc + interesesVivienda + medicinaPrepagada + deduccionDependientes);
  const rentaExenta = Math.min(baseParaRentaExenta * 0.25, 240 * UVT_2025);

  // 7. Calcular base gravable
  const baseGravable = Math.max(0, ingresoTotal - totalDeducciones - rentaExenta);

  // 8. Calcular retención según tabla 383 (misma tabla que empleados)
  const retencion = calcularRetencionSegunTabla(baseGravable);

  return {
    baseGravable,
    totalDeducciones,
    rentaExenta,
    totalRetencion: retencion,
    detalleDeducciones: [
      { concepto: detalleCostos, valor: costos },
      { concepto: 'Fondo Voluntario de Pensiones', valor: fondoVoluntarioPensiones },
      { concepto: 'Cuenta AFC', valor: afc },
      { concepto: 'Intereses de Vivienda', valor: interesesVivienda },
      { concepto: 'Medicina Prepagada', valor: medicinaPrepagada },
      { concepto: 'Deducción por Dependientes', valor: deduccionDependientes }
    ]
  };
};

const calcularRetencionSegunTabla = (baseGravable: number): number => {
  // Convertir base gravable a UVT
  const baseGravableUVT = baseGravable / UVT_2025;

  // Calcular retención según tabla 383 (vigente para 2025)
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

  return Math.max(0, retencion);
};