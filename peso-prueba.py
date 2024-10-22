import serial
import asyncio
import socketio
from aiohttp import web
import random  # Importamos random para simular pesos

# Configuración del puerto serial
port = 'COM4'  # Reemplaza con el puerto correcto
baudrate = 9600  # Velocidad en baudios según el manual
timeout = 0.5  # Timeout para la lectura

# Crear una instancia de Socket.IO server
sio = socketio.AsyncServer(cors_allowed_origins='*')
app = web.Application()
sio.attach(app)

async def send_weight():
    try:
        while True:
            try:
                # SIMULACIÓN: Generamos un peso aleatorio entre 0 y 100 kg
                weight = round(random.uniform(0, 100), 2)  
                # weight = round(1.87)  
                print(f"Peso simulado: {weight}")

                # Enviar el peso simulado
                message = {'weight': weight}
                await sio.emit('message', message)
                print(f"Peso enviado: {weight}")

                # Disminuir el tiempo de espera antes de la próxima simulación
                await asyncio.sleep(1)  # Espera 1 segundo antes de enviar otro peso

                # Comentar las líneas siguientes para deshabilitar la lectura del puerto serial
                # if not ser.is_open:
                #     try:
                #         ser.open()
                #         print(f"Reconexión serial establecida en el puerto {port}")
                #     except serial.SerialException as e:
                #         print(f"No se pudo reconectar el puerto {port}: {e}")
                #         await asyncio.sleep(5)
                #         continue
                #     except Exception as e:
                #         print(f"Error inesperado al intentar reconectar el puerto: {e}")
                #         await asyncio.sleep(5)
                #         continue

                # ser.write(b'p')
                # print("Comando enviado para solicitar el peso")
                # line = ser.readline().decode('utf-8').strip()
                # print(f"Respuesta recibida de la báscula: '{line}'")

                # if line:
                #     try:
                #         weight_str = line.split()[0]
                #         weight = float(weight_str)
                #         message = {'weight': weight}
                #         await sio.emit('message', message)
                #         print(f"Peso enviado: {weight}")
                #     except ValueError:
                #         print(f"Error al convertir el peso: '{line}' no es un número válido")
                #     except Exception as e:
                #         print(f"Error inesperado al procesar el peso: {e}")
                # else:
                #     message = {'weight': 0}
                #     await sio.emit('message', message)
                #     print("Peso enviado: 0")

            except Exception as e:
                print(f"Error inesperado durante la simulación: {e}")
                await asyncio.sleep(5)  # Esperar antes de reintentar

    except Exception as e:
        print(f'Error general en send_weight: {e}')
    finally:
        if 'ser' in globals() and ser.is_open:
            ser.close()
            print("Conexión serial cerrada")

# Manejo de reconexión de WebSocket
@sio.event
async def connect(sid, environ):
    print(f"Cliente conectado: {sid}")
    await sio.emit('message', {'message': 'Conexión establecida'}, to=sid)

@sio.event
async def disconnect(sid):
    print(f"Cliente desconectado: {sid}")

# Iniciar la tarea para enviar el peso
async def start_background_tasks(app):
    loop = asyncio.get_event_loop()
    app['weight_task'] = loop.create_task(send_weight())

app.on_startup.append(start_background_tasks)

if __name__ == '__main__':
    try:
        # Comentamos la inicialización del puerto serial
        # ser = serial.Serial(port, baudrate, bytesize=serial.EIGHTBITS,
        #                     parity=serial.PARITY_NONE, stopbits=serial.STOPBITS_ONE, timeout=timeout)
        # print(f"Conexión serial establecida en el puerto {port}")
        pass  # Evitar que falle por la falta de la báscula
    except serial.SerialException as e:
        print(f"No se pudo abrir el puerto {port}: {e}")
        exit()
    except Exception as e:
        print(f"Error inesperado al abrir el puerto serial: {e}")
        exit()

    web.run_app(app, host='0.0.0.0', port=8765)