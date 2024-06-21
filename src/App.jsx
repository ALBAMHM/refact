import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

    const empleadosData = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
  

    const almacenamiento = [];
    for (let i = 0; i < empleadosData.length; i++) {
      almacenamiento.push(
        <div key={i} className='cartas_empleados'>
          <p className="detalle-empleados">Nombre: {empleadosData[i].name}</p>
          <p className="detalle-empleados">Apellidos: {empleadosData[i].lastName}</p>
          <p className="detalle-empleados">Hobbies: {empleadosData[i].hobbies.join(', ')}</p>
          <p className="detalle-empleados">Edad: {empleadosData[i].age}</p>
        </div>
      );
    }

   
  return (
    
    <div className="envoltura">
      <header>
        <img className="logo" src="./src/assets/cocretainc.jpg" alt="Logo de la Empresa" />
      </header>
      <h2>Datos de los Empleados</h2>
      {almacenamiento}
      <div className="calculadora">
        <h2>Calculadora</h2>
        <div className='input_calculadora'>
          <label htmlFor="num1">Primer número</label>
          <input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} id='num1'/>
          <label htmlFor="num2">Segundo número</label>
          <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} id='num2'/>
       </div>
        
        <div className='botones_calculadora'>
          <button onClick={() => setResult(parseFloat(num1) + parseFloat(num2))}>+</button>
          <button onClick={() => setResult(parseFloat(num1) - parseFloat(num2))}>-</button>
          <button onClick={() => setResult(parseFloat(num1) * parseFloat(num2))}>*</button>
          <button onClick={() => setResult(parseFloat(num1) / parseFloat(num2))}>/</button>
  
        </div>
        
        <p>El resultado es: {result}</p>

      </div>
      
      <footer>
        <ul className='footer_list'>
          <li>Todos los derechos reservados. </li>
          <li>Croquetas INC ©  </li>
          <li>Dirección: Simancas (Madriz)</li>
          <li>Teléfono: 917335673 - 635444912 </li>
          <li>Email: croquetasINC@hotmail.com</li>
        </ul>
      </footer>
      
    </div>
    
  )
}

export default App
