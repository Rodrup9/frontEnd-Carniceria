const { exec, spawn } = require('child_process');

// Variable para almacenar el proceso de Python
let pythonProcess = null;

// Función para verificar si el proceso está corriendo
const isPythonRunning = () => {
  return pythonProcess !== null;
};

// Función para iniciar el script de Python
const startPythonScript = () => {
  if (!isPythonRunning()) {
    const pythonProcess = spawn('python', ['C:/Users/HP/Desktop/front/peso-prueba.py']);
        console.log('Script de Python iniciado.');
    
    // Escuchar los eventos del proceso
    pythonProcess.stdout.on('data', (data) => {
      console.log(`Salida de Python: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Error en Python: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      console.log(`Proceso de Python finalizado con código: ${code}`);
      pythonProcess = null; // Reiniciar el estado del proceso
    });
  } else {
    console.log('El script de Python ya está corriendo.');
  }
};

// Función para detener el script de Python
const stopPythonScript = () => {
  if (isPythonRunning()) {
    pythonProcess.kill('SIGINT');
    console.log('Script de Python detenido.');
    pythonProcess = null;
  } else {
    console.log('El script de Python no está corriendo.');
  }
};

// Función para reiniciar el script de Python
const restartPythonScript = () => {
  if (isPythonRunning()) {
    stopPythonScript();
  }
  startPythonScript();
};

module.exports = { startPythonScript, stopPythonScript, restartPythonScript };