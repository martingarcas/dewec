#def guardar_dni_nombre(dni, nombre):
#    with open('dni_nombres.csv', 'a') as f:
#        f.write('DNI;NOMBRE\n')
#        f.write(f'{dni};{nombre}\n')

def guardar_dni_nombre(dni, nombre):
    f = open('dni_nombres.csv', 'a')
    f.write('DNI;NOMBRE\n')
    f.write(f'{dni};{nombre}\n')
    f.close()  # Cerrar el archivo manualmente

def main():
    while True:
        dni = input("Introduce el DNI (o presiona Enter para salir): ")
        if dni == "":
            break  # Termina si el DNI está vacío

        nombre = input("Introduce el nombre: ")
        guardar_dni_nombre(dni, nombre)
        print(f'DNI y nombre guardados: {dni};{nombre}')

if __name__ == "__main__":
    main()