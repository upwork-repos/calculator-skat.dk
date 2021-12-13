import os
import errno
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import os
from re import search
import time
from PIL import Image
import io
import requests
import csv
import json
from datetime import datetime



class BaseScrapper:
    headless = True
    url_to_be_scrapped = ""
    driver = ""
    # an array containing scrapped products
    products = []
    # columns to use used in csv
    columns = ['Name', 'Currency', 'Price', 'Link']

    def __init__(self, url):
        self.url_to_be_scrapped = url
        opts = webdriver.ChromeOptions()
        
        if (self.headless == True):
            opts.headless = True
            opts.add_argument("--window-size=1920,1080")

        s=Service(ChromeDriverManager().install())

        caps = DesiredCapabilities().CHROME
        # wait till the screen is interactive
        caps["pageLoadStrategy"] = "eager"  
        self.driver = webdriver.Chrome(options=opts, service=s, desired_capabilities=caps )
        self.driver.maximize_window()

    def toCSV(self, filename):
        try:
            with open(filename, 'w') as csvfile:
                writer = csv.DictWriter(csvfile, fieldnames=self.columns)
                writer.writeheader()
                for data in self.products:
                    writer.writerow(data)
        except IOError:
            print("I/O error")
        

    def toJSON(self, filename):
        filename = self.slugify(filename)
        fn = "data/"+datetime.today().strftime('%Y/%m/%d/') +filename

        self.create_dir(filename=fn)
        with open(fn, 'w') as fp:
            json.dump(self.products, fp)      

    # @abstractmethod
    def scrap(self):
        try:
            self.driver.get(self.url_to_be_scrapped)
        except TimeoutException:
            self.driver.execute_script("window.stop();")    




    # utilities methods

    def index_in_list(self, a_list, index):
        return index < len(a_list)
    
    def slugify(self, text):
        non_url_safe = ['"', '#', '$', '%', '&', '+',
                    ',', '/', ':', ';', '=', '?',
                    '@', '[', '\\', ']', '^', '`',
                    '{', '|', '}', '~', "'"]
        """
        Turn the text content of a header into a slug for use in an ID
        """
        non_safe = [c for c in text if c in non_url_safe]
        if non_safe:
            for c in non_safe:
                text = text.replace(c, '')
        # Strip leading, trailing and multiple whitespace, convert remaining whitespace to _
        text = u'_'.join(text.split())
        return text

    def create_dir(self, filename):
        if not os.path.exists(os.path.dirname(filename)):
            try:
                os.makedirs(os.path.dirname(filename))
            except OSError as exc: # Guard against race condition
                if exc.errno != errno.EEXIST:
                    raise    
