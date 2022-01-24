import os
import sys
import urllib.request

client_id = "aceu7U67G4aU0IcBTbgy"
client_secret = "t7vYe5n5iu"


encText = urllib.parse.quote("컴퓨터")

url = "https://openapi.naver.com/v1/search/blog?query=" + encText # json 결과

request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)