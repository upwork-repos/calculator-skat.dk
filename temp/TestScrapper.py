from Scrapper import BaseScrapper
from selenium.webdriver.support.ui import WebDriverWait

from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


class TestScrapper(BaseScrapper):

    headless = False

    def scrap(self):
        super().scrap()

		# wait till page loads the list
        try:
            WebDriverWait(self.driver, 20).until(EC.element_to_be_clickable((By.XPATH, "//button[@class='coi-banner__accept']"))).click()
        except Exception as e:
            print(e)
            print('end of exception')
            
        vehicleType = self.driver.find_elements(By.XPATH, "//select[@id='vehicleType']")[0]
        vehicleType.click()


        vehicleType = self.driver.find_elements(By.XPATH, "//select[@id='vehicleType']")[0]
        types = vehicleType.find_elements(By.XPATH, ".//option")
        # print(types)
        for vt in types :
            # vt.click()
            print(vt.text)
        types[4].click()
        
        fuelType = self.driver.find_elements(By.XPATH, "//select[@id='fuelType']")[0]
        types = fuelType.find_elements(By.XPATH, ".//option")
        # print(types)
        for vt in types :
            # vt.click()
            print(vt.text)
        types[1].click()

        # vdp-datepicker
        calendar = self.driver.find_elements(By.XPATH, "//div[@class='vdp-datepicker']")[0]
        calendar.click()




        # for product_element in product_list_elements:
        #     href = product_element.get_attribute('href')
        #     productInfo_element = product_element.find_elements(By.XPATH, ".//div[@class='plp__productInfo__RQ1zn']")
		# 	# check for the existence of product info
        #     if (len(productInfo_element) ==  1) :
        #         labels = productInfo_element[0].find_elements(By.XPATH, ".//p")

        #         # find price : regular or discounted
        #         regular_price_element = productInfo_element[0].find_elements(By.XPATH, ".//span")
        #         discounted_price_element = productInfo_element[0].find_elements(By.XPATH, ".//*[@data-testid='price-container']")
        #         price = regular_price_element[0].text

        #         has_regular_price = True if price else False
        #         if (has_regular_price == False) :
        #             price_string = discounted_price_element[0].text
        #             price_string_map = price_string.split('$')
        #             if ( len( price_string_map ) > 1 ):
        #                 price = "$" + price_string_map[1]
        #             else :
        #                 price = price_string 

        #         sr = {
        #             'price' : price,
        #             'brand' : labels[0].text,
        #             'name' : labels[1].text ,
        #             'href' : href
        #         }
        #         self.products.append(sr)
        #         print(sr)


search_urls = [
	# electronics
    ( "shoppersdrugmart-electronics", "https://shop.shoppersdrugmart.ca/Electronics?_ga=2.75415890.1700396287.1637996593-1096713644.1637996593"),
	# health
	# ( "shoppersdrugmart-health", "https://shop.shoppersdrugmart.ca/Health?s_tnt=146191%3A1%3A0&adobe_mc_sdid=SDID%3D7A4272972FD0128D-496270F3DD2B4FD5%7CMCORGID%3D99911CFE5329657B0A490D45%40AdobeOrg%7CTS%3D1638173396&adobe_mc_ref=https%3A%2F%2Fshop.shoppersdrugmart.ca%2FShop%2FCategories%2FHealth%2FMedicine-%252526-Treatments%2FCough%25252C-Cold-%252526-Flu%2FHumidifiers%25252C-Purifiers-%252526-Vaporizers%2Fc%2FFS-HT-M105%3Fnav%3D%25252Fshop%25252FCategories%25252FMedicineAndTreatments%25252FHumidifiersPurifiersAndVaporizers%26sort%3Dtrending%26page%3D0"),
]


for file_name, search_url in search_urls:
    print("scraping " + search_url)
    x = TestScrapper(url= "https://www.skat.dk/skat.aspx?oid=54460")
    x.scrap()
    # x.toJSON( str(file_name)+ ".json")