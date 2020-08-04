import { CategoricalScheme } from '@superset-ui/color';

const schemes = [
  {
    id: 'mySuperColors',
    label: 'My Super Colors',
    colors: [
      '#FF5A5F',
      '#7B0051',
      '#00FF00',
      '#8800FF',
      '#007A87',
      '#FF0000',
      '#BBFFC5',
      '#FFB400',
      '#B4A76C',
      '#FF8083',
      '#00A1B3',
      '#00FFEB',
      '#880000',
      '#CBC29A',
      '#008000',
      '0000FF',
      '#FFFF00',
      '#719FE4',
      '#930000',
      '#B10072',
      '#0D0072',
    ],
  },
].map(s => new CategoricalScheme(s));

export default schemes;
