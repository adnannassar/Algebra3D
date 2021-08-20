interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  {name: 'geogebra-script-source', src: '../assets/js/geogebra-source.js'},
  {name: 'geogebra-applet-intersection-two-planes', src: '../assets/js/intersection-two-planes.js'},
  {name: 'geogebra-applet-intersection-plane-line', src: '../assets/js/intersection-plane-line.js'},
  {name: 'mathjax-script-source', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/mml-chtml.min.js'}
];
