from bs4 import BeautifulSoup as bs
import urllib.request as uR
import xlsxwriter as xlsx
#from selenium import webdriver

#driver = webdriver.Chrome()

#driver.get('https://www.resultados-futbol.com/primera')
#fuente = driver.page_source

fuente = uR.urlopen('https://www.resultados-futbol.com/primera').read()
soup = bs(fuente, 'html.parser')
tbody = soup.findAll('table')[18].find('tbody')
jornada = []
for fila in tbody.findAll('tr'):
	celdas = fila.findAll('td')
	row=[i.text for i in celdas[0:8]]
	jornada.append(row)

#Guardo la jornada en un excell
myexcel = xlsx.Workbook('Jornada10.xlsx')
hoja = myexcel.add_worksheet('Hoja1')
nFilas = len(jornada)
for i in range(0, nFilas):
	for j in range(0, 8):
		hoja.write(i,j,jornada[i][j])

myexcel.close()