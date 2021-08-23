interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  {name: 'geogebra-script-source', src: '../assets/js/geogebra-source.js'},
  {name: 'mathjax-script-source', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/mml-chtml.min.js'},
  {name: 'geogebra-applet-intersection-two-planes', src: '../assets/js/planes-scripts/intersection-two-planes.js'},
  {name: 'geogebra-applet-intersection-plane-line', src: '../assets/js/planes-scripts/intersection-plane-line.js'},
  {name: 'geogebra-applet-line-between-two-points', src: '../assets/js/lines-scripts/line-between-two-points.js'},
  {name: 'geogebra-applet-length-between-two-points', src: '../assets/js/lines-scripts/length-between-two-points.js'},
  {name: 'geogebra-applet-parallel-line', src: '../assets/js/lines-scripts/parallel-line.js'}

];
