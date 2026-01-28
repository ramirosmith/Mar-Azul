
import type { Section } from './types';
import { KeyIcon, HomeIcon, FireIcon, WifiIcon, WaterDropIcon, BoltIcon, WrenchIcon, CogIcon, SunIcon, SparklesIcon, ArrowUpOnSquareIcon } from './components/icons';

const colors = {
  sky: { bg: 'bg-sky-100', text: 'text-sky-700', hoverBg: 'hover:bg-sky-50', hoverText: 'hover:text-sky-700', ring: 'focus:ring-sky-500' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-700', hoverBg: 'hover:bg-rose-50', hoverText: 'hover:text-rose-700', ring: 'focus:ring-rose-500' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', hoverBg: 'hover:bg-amber-50', hoverText: 'hover:text-amber-700', ring: 'focus:ring-amber-500' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700', hoverBg: 'hover:bg-violet-50', hoverText: 'hover:text-violet-700', ring: 'focus:ring-violet-500' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', hoverBg: 'hover:bg-teal-50', hoverText: 'hover:text-teal-700', ring: 'focus:ring-teal-500' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', hoverBg: 'hover:bg-emerald-50', hoverText: 'hover:text-emerald-700', ring: 'focus:ring-emerald-500' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', hoverBg: 'hover:bg-indigo-50', hoverText: 'hover:text-indigo-700', ring: 'focus:ring-indigo-500' },
  lime: { bg: 'bg-lime-100', text: 'text-lime-700', hoverBg: 'hover:bg-lime-50', hoverText: 'hover:text-lime-700', ring: 'focus:ring-lime-500' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', hoverBg: 'hover:bg-slate-50', hoverText: 'hover:text-slate-700', ring: 'focus:ring-slate-500' },
};

export const initialContent: Section[] = [
  {
    id: 'descripcion',
    title: 'Descripción de la casa',
    icon: HomeIcon,
    items: [
      '**Planta baja:** living comedor amplio, cocina y toilette.',
      '**Planta alta:** una habitación matrimonial, una habitación con dos camas simples y un baño completo.',
    ],
    color: colors.sky,
  },
  {
    id: 'seguridad',
    title: 'Seguridad y acceso',
    icon: KeyIcon,
    items: [
      '**Al llegar:** Cargar la clave provista en el panel a la derecha de la puerta. Ingresar únicamente los 4 números y esperar el sonido de desactivación de la alarma.',
      '**Al salir de la casa:** Revisar que no queden puertas ni ventanas abiertas. Activar la alarma antes de salir. Una vez ingresada la clave, hay **30 segundos** para salir.',
    ],
    color: colors.rose,
  },
   {
    id: 'ultimo-dia',
    title: 'Al dejar la casa el último día',
    icon: ArrowUpOnSquareIcon,
    items: [
      'Apagar el calefón y **cerrar la llave de paso del gas.**',
      'Cerrar todas las puertas y ventanas.',
      'Desenchufar la heladera y dejar las puertas de la misma abiertas.',
      'Dejar la alarma activada.',
    ],
    color: colors.indigo,
  },
  {
    id: 'servicios',
    title: 'Servicios de la vivienda',
    icon: SparklesIcon,
    items: [
      'La casa cuenta con gas envasado (garrafa), electricidad, internet, lavarropas y agua de pozo.',
    ],
    color: colors.violet,
  },
  {
    id: 'gas',
    title: 'Gas (garrafa)',
    icon: FireIcon,
    items: [
      'La garrafa es de **45 kg**.',
      'En caso de que se agote, solicitar recarga a los proveedores (contactos en la **puerta de la heladera**).',
      '**Para encender el calefón:** Abrir la llave de gas debajo del mismo, encender el piloto siguiendo las instrucciones y se recomienda usarlo en **posición 2** para mayor eficiencia.',
      'Al finalizar la estadía, **apagar el calefón y cerrar la llave de gas**.',
    ],
    color: colors.amber,
  },
  {
    id: 'internet',
    title: 'Internet',
    icon: WifiIcon,
    items: ['**Red:** Casa Esperanza', '**Clave:** manolo2020'],
    color: colors.teal,
  },
  {
    id: 'agua',
    title: 'Agua',
    icon: WaterDropIcon,
    items: [
      'El agua es **potable** y proviene de pozo.',
      'Es normal que tenga características distintas al agua de red (color o sabor leve).',
    ],
    color: colors.sky,
  },
  {
    id: 'pozo-ciego',
    title: 'Pozo ciego',
    icon: WrenchIcon,
    items: [
      'Se encuentra en la parte posterior de la casa, hacia la derecha.',
      '**Evitar caminar por esa zona.**',
      'No arrojar papeles ni objetos por el inodoro, ya que puede afectar su funcionamiento.',
    ],
    color: colors.slate,
  },
  {
    id: 'electricidad',
    title: 'Electricidad',
    icon: BoltIcon,
    items: [
      'La vivienda cuenta con electricidad de red.',
      'En caso de corte eléctrico, verificar las térmicas que se encuentran en el living sobre el lado izquierdo.',
      'En caso de corte prolongado, cuenta con Luz recargable.',
    ],
    color: colors.amber,
  },
  {
    id: 'bomba',
    title: 'Bomba presurizadora',
    icon: CogIcon,
    items: [
      'Aumenta la presión del agua y funciona de manera automática al detectar consumo.',
      'Evitar dejar canillas abiertas durante períodos prolongados.',
      'Si la bomba no se detiene (se escucha en la zona del baño del primer piso), verificar que no haya pérdidas de agua.',
    ],
    color: colors.indigo,
  },
  {
    id: 'lavarropas',
    title: 'Lavarropas',
    icon: WrenchIcon,
    items: [
      'Dispone de lavarropas, centrifugadora y tender.',
      'El lavado y el centrifugado se realizan en dos artefactos distintos.',
      'Para el centrifugado, colocar una palangana antes de encenderlo en la salida de agua, ya que no dispone de desagote instalado.',
    ],
    color: colors.slate,
  },
  {
    id: 'calefaccion',
    title: 'Calefacción',
    icon: FireIcon,
    items: [
      'La casa cuenta con dos calefactores a leña, uno en planta baja y otro en el primer piso.',
      '**No utilizar leña de pino**, ya que puede tapar las chimeneas con la resina.',
    ],
    color: colors.rose,
  },
  {
    id: 'exterior',
    title: 'Exterior',
    icon: SunIcon,
    items: [
      'Cuenta con **riego automatizado** en el frente y el fondo, que se activa automáticamente durante la madrugada.',
      'La **iluminación exterior** se enciende alrededor de las 20:30 hs y se apaga al amanecer.',
      'Hay espacio para estacionar vehículos fuera de la casa. Es importante utilizar esos lugares para evitar inconvenientes con los aspersores.',
    ],
    color: colors.lime,
  },
];
