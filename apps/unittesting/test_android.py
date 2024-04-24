import unittest
from unittest import TestSuite
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy
# from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from unittest_prettify.colorize import (
    colorize,
    GREEN,
)

import logging

logging.basicConfig(level=logging.INFO, format='%(message)s')


capabilities = dict(
    platformName='Android',
    automationName='uiautomator2',
    deviceName='Automation',
    appPackage='com.wezacare.nexuscare',
    appActivity='com.wezacare.nexuscare.MainActivity',
    language='en',
    locale='US'
)

appium_server_url = 'http://localhost:4723'

@colorize(color=GREEN)
class CreateOrganisation(unittest.TestCase):
    def setUp(self) -> None:
        self.driver = webdriver.Remote(appium_server_url, options=UiAutomator2Options().load_capabilities(capabilities))
        self.wait = WebDriverWait(self.driver, 180)
    def tearDown(self) -> None:
        if self.driver:
            self.driver.quit()
    
    
    def test_create_org_flow(self) -> None:

        "Test create organisation flow"

        with self.subTest():
            logging.info("\nRunning test for navigating to the sign up page")
            self.register_page()
        with self.subTest():
            logging.info("Running test for navigating to the create organisation page")
            self.create_organisation_page()


    def register_page(self) -> None:
        "Should navigate to the sign up page"
        
        self.wait.until(EC.presence_of_element_located((AppiumBy.CLASS_NAME, "android.widget.ScrollView")))

        start_x = self.driver.get_window_rect()['width']/2
        start_y = self.driver.get_window_rect()['height'] * 8/9
        end_x = self.driver.get_window_rect()['width']/2
        end_y = self.driver.get_window_rect()['height']/9

        self.driver.swipe( start_x, start_y, end_x, end_y, 1000)
        self.wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Login"]')))

        login_text = self.driver.find_element(by=AppiumBy.XPATH, value='//android.widget.TextView[@text="Login"]')
        signup_text = self.driver.find_element(by=AppiumBy.XPATH, value='//android.widget.TextView[@text="Sign Up"]')

        self.assertEqual("Login", login_text.text)
        self.assertEqual("Sign Up", signup_text.text)

    def create_organisation_page(self) -> None:
        "should navigate to create or join organisation page"

        signup_button  = self.driver.find_element(by=AppiumBy.XPATH, value='//android.widget.ScrollView/android.view.View[4]')
        signup_button.click()

# def create_organisation_suite() -> TestSuite:
#     suite = unittest.TestSuite()
#     suite.addTest(CreateOrganisation('test_register_page'))
#     suite.addTest(CreateOrganisation('test_create_organisation_page'))
#     return suite
    
        
if __name__ == '__main__':
    unittest.main(verbosity=2)
    # runner = unittest.TextTestRunner(verbosity=2)
    # runner.run(create_organisation_suite())