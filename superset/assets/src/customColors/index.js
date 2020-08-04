import { CategoricalScheme } from '@superset-ui/color';

const schemes = [
  {
    id: 'intraDayTracking',
    label: 'Intra-day Tracking',
    colors: ['#fa0201', '#01b201', '#e0e601', '#01b201', '#007A87'],
  },
  {
    id: 'routeGeneral',
    label: 'Route general',
    colors: ['#f2ff00', '#fa0201', '#007A87', '#e0e601', '#ff8800'],
  },
  {
    id: 'avgRoutePerformance',
    label: 'AVG Route Performance',
    colors: ['#e0e601', '#8a651a', '#ff8800', '#580087'],
  },
  {
    id: 'driverComparison',
    label: 'Driver Comparison',
    colors: ['#fa0201', '#592756', '#8a651a', '#580087', '#ff8800', '#007A87'],
  },
  {
    id: 'warehouseComparison',
    label: 'Warehouse Comparison',
    colors: ['#fa0201', '#e0e601', '#8a651a', '#580087', '#ff8800', '#007A87'],
  },
  {
    id: 'orderRoutesReturned',
    label: 'Order Routes Returned',
    colors: ['#008000', '#0000ff', '#ff0000'],
  },
  {
    id: 'orderRoutesPending',
    label: 'Order Routes Pending',
    colors: ['#008000', '#0000ff', '#d9c621', '#ff0000', '#ff8800'],
  },
  {
    id: 'pickup',
    label: 'Pickup',
    colors: ['#00ff00', '#f2ff00', '#007A87', '#0002d8', '#fa0201', '#00ff00'],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    colors: ['#00ff00', '#f2ff00', '#007A87', '#0002d8', '#fa0201', '#00ff00', '#7e0201'],
  },
  {
    id: 'driverGeneralPerformance',
    label: 'Driver General Performance',
    colors: ['#007A87', '#fa0201', '#00ff00'],
  },
  {
    id: 'driverPerformance',
    label: 'Driver Performance',
    colors: [
      '#007A87',
      '#0002d8',
      '#fa0201',
      '#00ff00',
      '#7e0201',
      '#0002d8',
      '#fa0201',
      '#00ff00',
    ],
  },
  {
    id: 'routeMetricComparison',
    label: 'Route Metric Comparison',
    colors: ['#fa0201', '#007A87', '#e0e601', '#fa0201', '#fa0201', '#007A87'],
  },
].map((s) => new CategoricalScheme(s));

export default schemes;
