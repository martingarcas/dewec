from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
#import pandas as pd
from openpyxl import load_workbook
import time

wb = load_workbook("Libro.xlsx", data_only=True)
sh = wb["Hoja1"]

driver = webdriver.Firefox()
driver.get("http://localhost/dewec/validacion/form.html")

time.sleep(2)
a=2+1
try:

    btn = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "btn"))
    )

    element1 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "nombre"))
    )

    element2 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "apellido"))
    )

    element3 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "dni"))
    )

    element4 = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "fecha"))
    )

    fila = 1
    caso = ""
    casos = []
    while sh["a" + str(fila)].value is not None:
        casos.append([
            sh["a" + str(fila)].value,
            "" if sh["b" + str(fila)].value is None else sh["b" + str(fila)].value,
            bool(sh["c" + str(fila)].value)
        ])

        fila = fila + 1

    for i in range(0,3):
        element1.clear()
        element2.clear()
        element3.clear()
        element4.clear()
        element1.send_keys(casos[i*4][1])
        element2.send_keys(casos[i*4+1][1])
        element3.send_keys(casos[i*4+2][1])
        element4.send_keys(casos[i*4+3][1])
        btn.click()
        respuesta = [
            "no-valido" not in element1.get_attribute("class"),
            "no-valido" not in element2.get_attribute("class"),
            "no-valido" not in element3.get_attribute("class"),
            "no-valido" not in element4.get_attribute("class")
            #element4.get_attribute("class").find("no-valido")
        ]

        respuestaEsperada = [
            casos[i*4][2], casos[i* 4 + 1][2],
            casos[i*4 + 2][2], casos[i* 4 + 3][2],
        ]

        print("Prueba :" + str(i) + str(respuesta == respuestaEsperada))

        if respuesta != respuestaEsperada:
            print("Respuesta esperada: ")
            print(respuesta)
            print(respuestaEsperada)

        time.sleep(2)


    #element.clear()

    time.sleep(2)

    #print(respuesta)

    time.sleep(300)

finally:
    driver.quit()

time.sleep(30)