class Coche:
    def __init__(self, modelo, marca, matricula, color):
        self.modelo 	= modelo
        self.marca 		= marca
        self.matricula 	= matricula
        self.color 		= color
        
    def __str__(self):
        return f"Coche {self.marca} {self.modelo} de color {self.color} con matrícula {self.matricula}."
    
    def pintar(self, nuevoColor):
        self.color = nuevoColor
        print(f"El coche ha sido pintado de {self.color}.")
    
	

c1 = Coche("Clase A", "Mercedes", "ABC123", "Negro mate")

# Imprimir la información del coche
print(c1)

c1.pintar("Rojo")
print(c1)