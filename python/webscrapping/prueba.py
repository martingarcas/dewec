from selenium import webdriver
import time

# Set the path to the Chromedriver
DRIVER_PATH = '/path/to/chromedriver'

# Initialize the Chrome driver
driver = webdriver.Chrome()

# Navigate to the URL
driver.get('https://google.com')

driver.execute_script('document.getElementsByTagName("button")[3].click()')
time.sleep(3)
driver.execute_script('document.querySelector("textarea").value = "gato"')
time.sleep(3)
driver.execute_script('document.querySelector("input[type=submit]").click()')
time.sleep(3)
driver.execute_script('document.getElementsByTagName("a")[3].click()')
time.sleep(3)

time.sleep(300)
# It's a good practice to close the browser when done
#driver.quit()