const Trivia = require('../models/trivia.model');

const trivias = [
  new Trivia("9f6f8b7c-d1e5-4a0e-8d2b-5a7c9f2a3d02",
    "¿El promedio de los primeros 50 números naturales?", "25.5"),
  new Trivia("8a6d3b2e-3b64-4c2f-8e1b-9c1ac7f3d095",
    "¿Quién es el científico que nació el día de Pi?", "ALBERT EINSTEIN"),
  new Trivia("6f0d4c1e-fe18-4aab-821b-7a9c6g2h3j04",
    " ¿Cuál es la palabra para el dinero que ganas al dejar efectivo en el banco?", "INTERES"),
  new Trivia("5g1d3k2l-af19-4bac-931k-6b8d5h4i3j05",
    "¿Qué dos letras simbolizan un milímetro?", "MM"),
  new Trivia("4h2i3j4k-bg10-5cad-041i-5c7e4f3g2h06",
    "¿Cuántos grados hay en un ángulo recto?", "90"),
  new Trivia("3i1j2k3l-ch11-6dbe-151j-4d6f5g4h3i07",
    "¿Cómo se llaman los triángulos con dos los lados iguales y uno desigual?", "ISOSCELES"),
  new Trivia("8m7n6o5p-ei12-7ecf-261m-3e5g6h5i4j08",
    "¿Cuál es el resultado de multiplicar todos los números del 1 al 10?", "3628800"),
  new Trivia("7n6o5p4q-fj13-8fdg-371n-2f6h7i6j5k09",
    "¿Qué tipo de triángulo tiene tres lados iguales?", "EQUILATERO"),
  new Trivia("6p5q4r3s-gk14-9geh-481o-1g7i8j7k6l10",
    "¿Qué número es divisible por todos los enteros entre 1 y 10?", "2520"),
  new Trivia("5q4r3s2t-hl15-ahfi-591p-0h8j9k8l7m11",
    "El reloj de la Puerta del Sol da una campanada cada segundo. ¿Cuanto tarda en dar 12 campanadas ?", "11 SEGUNDOS"),
];

module.exports = trivias;

