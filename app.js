/**+-Ahora vamos a Codear React.js usando el Lenguaje JSX que es una Extensión de Javascript (Como lo es SASS de CSS) que mezcla Javascript con HTML creada Específicamente para ser usada en React.JS 
  * y simplificar su Código. Antes de Poder usar JSX debemos Permitir que nuestro Archivo "app.js" o el Archivo .js que tengamos COMPILE JSX ya que éste no viene con esa opción por Defecto, para eso usamos el
  *  Programa Prepros 7 en el que Seleccionamos a Archivo "app.js" y le marcamos la Configuración de "Transpile with Babel", lo que va a crear un Nuevo Archivo Llamado "app-dist.js" en la misma Carpeta que el 
  * Archivo "app.js" y por el Cual se PreProcesará el Código JSX por lo cual ahora debemos llamar a "app-dist.js" en vez de a "app.js" desde Nuestro HTML, ya que ahora la Lógica Provrendrá de Allí.
  * Una vez hecho esto podremos escribir JSX Normalmente. NOTA:_ Todo lo que se ponga entre Corchetes "{...}" en JSX será interpretado como Javascript Normal y las Clases de los Elementos en JSX se 
  * escribe "className='***'" en vez de solo "class='***'". NO se pueden poner varios Elementos HTML/JSX en una misma constante/variable, en todo caso se puede Poner 1 Elemento que sea Contenedor de Otros Varios
  * Elementos dentro de él. Si se quieren escribir varias Líneas, poner todo el Contenido de la constante/variable dentro de Paréntesis "(...)".*/

/**+-Los Estados de Un Componente en React.js son muy similares a las Propiedades de Un Componente en React.js(Las Propiedades son a Un Componente en React.js lo que Los Atrinutos a Un Elemento en HTML, son los 
 * Datos que se pasan A y A TRAVÉS de ese Componente), CON LAS DIFERENCIAS de que Un Estado es Variable y pueden hacer que el Componente Cambie(Las Propiedades son Inmutables y Nunca Cambian) y que son
 *  ESPECÍFICOS de Un Componente; se crean Dentro de Él, se Modifican/Actualizan dentro de Él y "mueren" o Dejan de Usarse Dentro del Mismo Componente en el Cual fueron Creados, no pueden Heredarse de Un Componente
 * Padre a un Sub-Componente ni Viceversa. Así, las Propiedades son Los Datos que se de Un Componente/Que Se Le Pasan a Un Componente y Los Estados son la Fase(O los Estados) de esos Datos.*/

/**(1)-Hasta la Clase Anterior construimos en React.js Stateless Functional Components(Componentes sin Estado hechos a partir de Funciones); eso nos sirve para "Dibujar" o Exponer Contenido en HTML; pero ya cuando
 * queremos Crear un Componente de React.js con Datos que vayan a CAMBIAR(Osea que queremos que tengan Estados) creamos un Componente de tipo Clase(Class Component) que usa la Sintaxis de Javascript ES6 para crear
 * un Componente que es Una Clase(O Ramificación, una Copia) de Otro Componente ya Predefinido. Los Componentes de tipo Clase se crean Extendiendo el Componente por defecto "React.Component" de la Siguiente Manera:_.*/

class Hello extends React.Component {
  constructor(props) {
    super(props);
   /**+-(1/4)Hasta Acá llega todo lo que tiene que ser Obligatoriamente Escrito para que el Componente de tipo Clase "Hello" funcione Correctamente y Herede todas las Propiadades de la Clase/Componente que está
   extendiendo, que Por Defecro es "React.Component".*/
   this.state = {
     name: 'Jimmy'
   }/**+-(2/4)Esta Sintaxis "this.state = {***}" es el Estado en sí, sus Datos se Escriben y Guardan en Notación de Objeto de Javascript.*/
  }

  sayGoodbye() {
    alert('Goodbye!');
    this.setState({
      name: 'Saul'
    })
  }/**+-(3/4)Esta Función/Método "sayGoodbye() {***}" que creamos aquí es un Evento(Los Eventos sirven para Desatar Acciones y/o Cambiar Estados) que va a ser Activado por el Event Listener "onClick={***}"; Cuando el
   Usuario haga Click en el Elemento HTML en el que está el Event Listener "() => this.sayGoodbye()" va a Abrir una Ventana que Diga "Goodbye" y con la Sintaxis "this.setState({***})"(Donde "***" son los Nuevos Datos 
   Actualizados del Estado) va a Cambiar el "name: ***" de Nuestro State de 'Jimmy' a 'Saul'.*/

  render(){
     return (
       <h1 onClick={() => this.sayGoodbye()}>Hello {this.state.name}!</h1>
       //(Para entender más de la Sintaxis JS dentro del Elemnto <h1> de aquí arriba, Véase JSON(Javascript Object Model) y "Programación en Javascript Orientada a Objetos".)
     );
   }/**+-(4/4)Esta es la 4ta parte que tiene que estar Presente en Todo Class Component de React,.js ; la Función Predefinida Por Defecto de React.js "render(){***}" con su "return(***);" Obligatorio Interno.
      Esta Parte vendría a Fucionar como un "return ***;" en una Función en Javascript; sirve para poder "Exportar" Los Datos del Class Component.*/
}

ReactDOM.render(<Hello />, document.getElementById('p1'));
/**+-Los Class Components se Renderizan Igual que los Stateless Components. Como Dijimos antes, los Estados se definen Completamente dentro de sus Componentes, por lo que no hace falta especificar nada afuera del
 * Class Component en el que fué Creado, incluso al Renderizar.*/


 /**(2)-Ahora para Practicar todo lo que Aprendimos recién sobre los Estados y los Eventos de los Class Components en React.js vamos a hacer un Contador:_.*/

 class Counter extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
     count: 0
   }
  }

  upCount(){
    this.setState({
      count: this.state.count+1
   });
  }

  downCount(){
    this.setState({
      count: this.state.count-1
   });
  }
  resetCount(){
    this.setState({count: 0});
  }

  render(){
     return (
       <div>
         <div>{this.state.count}</div>
         <div>
           <a href="#" onClick={() => this.upCount()} className="btn btn-info">Up</a>
           <a href="#" onClick={() => this.downCount()} className="btn btn-dark">Down</a>
           <a href="#" onClick={() => this.resetCount()} className="btn btn-danger">Reset</a>
         </div>
       </div>
     );
   }
}

ReactDOM.render(<Counter />, document.getElementById('p2'));