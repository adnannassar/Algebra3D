interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  {name: 'geogebra-script-source', src: '../assets/js/geogebra-source.js'},
  {name: 'mathjax-script-source', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/mml-chtml.min.js'},
  {name: 'geogebra-applet-intersection-two-planes', src: '../assets/js/planes-scripts/intersection-two-planes.js'},
  {name: 'geogebra-applet-intersection-plane-line', src: '../assets/js/planes-scripts/intersection-plane-line.js'},
  {name: 'geogebra-applet-line-between-tow-points', src: '../assets/js/lines-scripts/line-between-tow-points.js'}
];
