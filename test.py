from selenium import webdriver
import time

def test_simultation(browser, port):
    browser.get("http://0.0.0.0:"+port+"/send")


port = input("Enter Port:\n")
browser = webdriver.Chrome("/home/saify2j/Desktop/chromedriver_linux64/chromedriver")
before = time.time()
for i in range(0,200):
  test_simultation(browser,port)
after = time.time()
print('time taken'+str(after-before))
