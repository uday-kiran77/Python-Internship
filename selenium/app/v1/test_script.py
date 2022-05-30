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

# Enter Values
driver.find_element(By.NAME, "name").send_keys("Uday")
driver.find_element(By.NAME, "email").send_keys("udaykiran@gmail.com")
driver.find_element(By.XPATH, '//*[@id="select-gender"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-gender"]/div[3]/ul/li[1]').click()
driver.find_element(By.NAME, "dob").send_keys("12/12/2022")

# Click Next button
driver.find_element(By.XPATH, '//button[@name="goNextBtn"]').click()

driver.find_element(By.NAME, "addressHouseNum").send_keys("27/1-A")
driver.find_element(By.NAME, "addressStreet").send_keys("Gandhi Street")
driver.find_element(By.NAME, "addressArea").send_keys("Dilsukhnagar")
driver.find_element(By.NAME, "addressCity").send_keys("Hyderabad")
driver.find_element(By.XPATH, '//*[@id="select-state"]').click()
driver.find_element(By.XPATH, '//*[@id="menu-addressState"]/div[3]/ul/li[2]').click()
driver.find_element(By.NAME, "addressPincode").send_keys("500001")
driver.find_element(By.XPATH, '//*[@id="root"]/div/div[2]/div[7]/div/button[1]').click()

# Click Next button
driver.find_element(By.XPATH, '//button[@name="goNextBtn"]').click()

driver.find_element(By.NAME, "nameOnCard").send_keys("Uday Kiran")
driver.find_element(By.NAME, "cardNumber").send_keys("1234567891011")
driver.find_element(By.NAME, "cardDate").send_keys("11/22")
driver.find_element(By.NAME, "cardCvv").send_keys("123")
driver.find_element(By.NAME, "saveCard").click()

# Submit form
driver.find_element(By.XPATH, '//button[@name="submitBtn"]').click()

# Get Values and print
bodyText = driver.find_element(By.NAME, 'formDetails').text
# print(bodyText)

# check for form error and raise exception
try:
    assert 'Please Fillout all Fields' not in driver.find_element(By.NAME, 'message').text
except AssertionError:
    print("Test Failed: Please Fillout all Fields ")
else:
    print("Test Passed")

# wait for 2 seconds and close the window
time.sleep(2)
driver.close()

