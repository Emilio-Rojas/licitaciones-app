import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SubirLicitacionModalComponent } from '../../components/subir-licitacion-modal/subir-licitacion-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-licitaciones',
  templateUrl: './lista-licitaciones.component.html',
  styleUrls: ['./lista-licitaciones.component.scss']
})
export class ListaLicitacionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'organismo', 'segmento', 'producto', 'presupuesto', 'fechaCierre', 'estado'];

  licitaciones = [
    // Segmento CORP
    {
      id: 1011,
      titulo: 'Indopractes telecomunicaciones',
      organismo: 'Indgensa teccl.',
      fechaCierre: '2023-01-22',
      estado: 'Abierta',
      segmento: 'CORP',
      presupuesto: '$12.000.000',
      productoServicio: 'Servicios de telefonía IP'
    },
    {
      id: 1020,
      titulo: 'Inferium de telecomunicaciones',
      organismo: 'MercadeSas',
      fechaCierre: '2023-02-23',
      estado: 'Cerrada',
      segmento: 'CORP',
      presupuesto: '$8.500.000',
      productoServicio: 'Mantenimiento de infraestructura'
    },
    {
      id: 1033,
      titulo: 'Efecto técnica interdepente',
      organismo: 'Indoketsitelar',
      fechaCierre: '2023-07-21',
      estado: 'Adjudicada',
      segmento: 'CORP',
      presupuesto: '$5.400.000',
      productoServicio: 'Consultoría técnica'
    },
    {
      id: 1040,
      titulo: 'Extender lárdica inidipentes',
      organismo: 'Alsedo Clerro',
      fechaCierre: '2022-11-29',
      estado: 'Abierta',
      segmento: 'CORP',
      presupuesto: '$18.000.000',
      productoServicio: 'Red de fibra óptica'
    },
    {
      id: 1055,
      titulo: 'Exlajatria, baraken telecomunicac',
      organismo: 'Albar inc.',
      fechaCierre: '2023-06-31',
      estado: 'Abierta',
      segmento: 'CORP',
      presupuesto: '$9.500.000',
      productoServicio: 'Comunicaciones empresariales'
    },

    // Segmento GGEE
    {
      id: 2001,
      titulo: 'Macroanalítica avanzada',
      organismo: 'Gigatek Solutions',
      fechaCierre: '2023-08-15',
      estado: 'Cerrada',
      segmento: 'GGEE',
      presupuesto: '$22.000.000',
      productoServicio: 'Plataforma de análisis de datos'
    },
    {
      id: 2002,
      titulo: 'Rediseño eléctrico modular',
      organismo: 'Nexcorp Ingeniería',
      fechaCierre: '2023-04-10',
      estado: 'Abierta',
      segmento: 'GGEE',
      presupuesto: '$17.800.000',
      productoServicio: 'Instalación eléctrica industrial'
    },
    {
      id: 2003,
      titulo: 'Consultoría estratégica de energía',
      organismo: 'Tecnomind Chile',
      fechaCierre: '2023-09-05',
      estado: 'Adjudicada',
      segmento: 'GGEE',
      presupuesto: '$14.600.000',
      productoServicio: 'Auditoría y planificación energética'
    },

    // Segmento PYME
    {
      id: 3001,
      titulo: 'Implementación e-commerce básico',
      organismo: 'PymeDigital',
      fechaCierre: '2023-10-12',
      estado: 'Abierta',
      segmento: 'PYME',
      presupuesto: '$3.200.000',
      productoServicio: 'Tienda en línea con carrito de compras'
    },
    {
      id: 3002,
      titulo: 'Soporte TI remoto mensual',
      organismo: 'BitServicio',
      fechaCierre: '2023-05-28',
      estado: 'Cerrada',
      segmento: 'PYME',
      presupuesto: '$1.200.000',
      productoServicio: 'Mantenimiento y soporte técnico remoto'
    },
    {
      id: 3003,
      titulo: 'Diseño gráfico institucional',
      organismo: 'Creativa Studio',
      fechaCierre: '2023-07-19',
      estado: 'Adjudicada',
      segmento: 'PYME',
      presupuesto: '$950.000',
      productoServicio: 'Diseño corporativo y branding'
    },
    {
      id: 3004,
      titulo: 'Gestión de redes sociales',
      organismo: 'MKT Express',
      fechaCierre: '2023-06-02',
      estado: 'Abierta',
      segmento: 'PYME',
      presupuesto: '$1.500.000',
      productoServicio: 'Marketing digital y contenido'
    },
    {
      id: 3005,
      titulo: 'Capacitación en contabilidad',
      organismo: 'Contapyme',
      fechaCierre: '2023-03-17',
      estado: 'Cerrada',
      segmento: 'PYME',
      presupuesto: '$850.000',
      productoServicio: 'Taller contable básico para pymes'
    },
    {
      id: 3006,
      titulo: 'Provisión de papelería general',
      organismo: 'Suministros Sur',
      fechaCierre: '2023-08-25',
      estado: 'Abierta',
      segmento: 'PYME',
      presupuesto: '$1.100.000',
      productoServicio: 'Insumos de oficina y papelería'
    },
    {
      id: 3007,
      titulo: 'Desarrollo web institucional',
      organismo: 'NetPyme',
      fechaCierre: '2023-09-30',
      estado: 'Abierta',
      segmento: 'PYME',
      presupuesto: '$2.600.000',
      productoServicio: 'Sitio web institucional responsivo'
    }
  ];

  dataSource = new MatTableDataSource(this.licitaciones);

  filters = {
    organismo: '',
    fechaInicio: '',
    fechaFin: '',
    segmento: ''
  };
  nombreArchivo = '';
  totalLicitaciones: number = 0;
  fechaMinima: string = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.actualizarResumen();
  }

  setSegmento(segmento: string): void {
    this.filters.segmento = segmento;
    this.buscar();
  }

  actualizarResumen(): void {
    const base = this.filters.segmento
      ? this.licitaciones.filter(l => l.segmento === this.filters.segmento)
      : this.licitaciones;

    this.totalLicitaciones = base.length;

    const fechas = base
      .map(l => new Date(l.fechaCierre))
      .filter(f => !isNaN(f.getTime()));

    if (fechas.length) {
      const fechaMin = new Date(Math.min(...fechas.map(f => f.getTime())));
      this.fechaMinima = fechaMin.toISOString().split('T')[0];
    } else {
      this.fechaMinima = 'N/A';
    }
  }

  abrirModalSubir(): void {
    const dialogRef = this.dialog.open(SubirLicitacionModalComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.licitaciones.push(result);
        // this.filtrarPorSegmento(); // Para actualizar según segmento activo
        this.buscar();
      }
    });
  }

  buscar() {
    this.dataSource.filterPredicate = (data, filter) => {
      const filters = JSON.parse(filter);
      const matchOrganismo = !filters.organismo || data.organismo.toLowerCase().includes(filters.organismo.toLowerCase());
      const matchFechaInicio = !filters.fechaInicio || new Date(data.fechaCierre) >= new Date(filters.fechaInicio);
      const matchFechaFin = !filters.fechaFin || new Date(data.fechaCierre) <= new Date(filters.fechaFin);
      const matchesSegmento = !this.filters.segmento || data.segmento === this.filters.segmento;
      return matchOrganismo && matchFechaInicio && matchFechaFin && matchesSegmento;
    };
    this.dataSource.filter = JSON.stringify(this.filters);
    this.actualizarResumen();
  }


  limpiar() {
    this.filters = { organismo: '', fechaInicio: '', fechaFin: '', segmento: '' };
    this.dataSource = new MatTableDataSource(this.licitaciones);
  }
}
