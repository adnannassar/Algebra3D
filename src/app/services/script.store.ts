interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  {name: 'geogebra-applet', src: '../assets/js/geogebra.js'},
  {name: 'geogebra-script-source', src: '../assets/js/geogebra-source.js'},
  {name: 'mathjax-script-source', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/mml-chtml.min.js'}
];
