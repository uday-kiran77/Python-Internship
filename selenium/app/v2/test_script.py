from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Initialise Chrome Web Driver
ServiceObj = Service('path/to/driver/chromedriver.exe')
driver = webdriver.Chrome(service=ServiceObj)

driver.implicitly_wait(10)

driver.maximize_window()
driver.get('http://localhost:3000')

# Enter Values in form
driver.find_element(By.NAME, "fName").send_keys("Uday")
driver.find_element(By.NAME, "lName").send_keys("Kiran")
driver.find_element(By.XPATH, "//input[@name='email']").send_keys("uday@gmail.com")
driver.find_element(By.XPATH, "//input[@name='password']").send_keys("uday@123")
driver.find_element(By.XPATH, "//input[@name='gender'][@value='male']").click()

# Select Day
driver.find_element(By.XPATH, '//*[@id="mui-component-select-dateBirth"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-dateBirth"]/div[3]/ul/li[13]').click()
# Select Month
driver.find_element(By.XPATH, '//*[@id="mui-component-select-dateMonth"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-dateMonth"]/div[3]/ul/li[5]').click()
# Select Year
driver.find_element(By.XPATH, '//*[@id="mui-component-select-dateYear"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-dateYear"]/div[3]/ul/li[1]').click()

# Click next button
driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/button[2]').click()

# payment details
driver.find_element(By.NAME, "nameOnCard").send_keys("Uday Kiran")
driver.find_element(By.NAME, "cardNumber").send_keys("1234567812345678")
# Select card month
driver.find_element(By.XPATH, '//*[@id="mui-component-select-cardMonth"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-cardMonth"]/div[3]/ul/li[1]').click()
# Select card year
driver.find_element(By.XPATH, '//*[@id="mui-component-select-cardYear"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-cardYear"]/div[3]/ul/li[7]').click()

driver.find_element(By.NAME, "cardCvv").send_keys("123")
# save card checkbox
driver.find_element(By.NAME, 'saveCard').click()

driver.find_element(By.XPATH, '//*[@id="root"]/div/div[3]/button[2]').click()

time.sleep(1)
# # Get Values and print
portal = driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[2]/div/div[2]').text

# check for form error and raise exception
try:
    assert 'Form Submitted Successfully' in portal
except AssertionError:
    # close popup
    driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[2]/div/div[2]/button').click()
    print("Test Failed: Please Fillout all Fields ")
else:
    # reset form
    driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div/button[1]').click()
    print("Test Passed")
# wait for 2 seconds and close the window
time.sleep(1)
driver.close()

