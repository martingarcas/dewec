import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="martin",
  database="martin"
)

mycursor = mydb.cursor()

lista = []

def guardar_dni_nombre(dni, nombre):
    with open('dni_nombres.csv', 'a') as f:
       f.write('DNI;NOMBRE\n')
       f.write(f'{dni};{nombre}\n')

def main():
    while True:
        dni = input("Introduce el DNI (o presiona Enter para salir): ")
        if dni == "":
            break  # Termina si el DNI está vacío

        nombre = input("Introduce el nombre: ")
        guardar_dni_nombre(dni, nombre)
        alumno = (dni,nombre)
        lista.append(alumno)
        print(f'DNI y nombre guardados: {dni};{nombre}')

if __name__ == "__main__":
    main()

sql = "INS"
mycursor.execute("CREATE DATABASE mydatabase")