import requests
import re
import json

ids = ['1203439', '1397016', '1187439', '1357145', '1356218',
       '1336601', '1297952', '1466295', '1331600', '1321671', 1331205, 1439146, 1381335, 1212472, 1310222, 1358119, 248182, 1367251, 1379740, 2265]

headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    "Cookie": "_lxsdk_cuid=180f53abcf35a-0b5cbe52fcd3fe-34726705-1fa400-180f53abcf4c8; iuuid=7341E480DB4411ECA16AAB6147C9C886E7F3CEC02BE748E9B5038B31A9A09812; selectci=true; ci=1%2C%E5%8C%97%E4%BA%AC; ci=1%2C%E5%8C%97%E4%BA%AC; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1657001119,1658819581; featrues=[object Object]; token=1BARvpLSS4wjwO3Lb9vdK8UEEKUAAAAA_xIAAJuBv1CVlwBmQD7z3OEVu3FFKwDl1FXePn0EY6q-wUHE4Rr9nAfvVB7DlMJCrJC1RA; uid=176065105; _lxsdk=7341E480DB4411ECA16AAB6147C9C886E7F3CEC02BE748E9B5038B31A9A09812; from=canary; trade_source=filmfestival; user=176065105%2C1BARvpLSS4wjwO3Lb9vdK8UEEKUAAAAA_xIAAJuBv1CVlwBmQD7z3OEVu3FFKwDl1FXePn0EY6q-wUHE4Rr9nAfvVB7DlMJCrJC1RA; _last_page=c_dmLad; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1659078067; _lxsdk_s=18248c1ab41-46-9b3-458%7C176065105%7C75"
}


html = requests.get(
    "https://i.maoyan.com/asgard/movie/1397016?channelId=4", headers=headers)


def getOneMovieData(html):

    jsonData = re.findall(r"var AppData = (\{.+?\});", html)

    if jsonData:
        return jsonData[0]

    return "{}"


def save(filename, text):

    with open(f'./{filename}.json', 'w', encoding="utf-8") as f:
        json.dump(text, f, ensure_ascii=False)


def saveMovie(raw):
    saveData = [{
        "name": raw['movie']['nm'],
        "enName": raw['movie']['enm'],
        "avatar": raw['movie']['img'],
        "score": raw['movie']['sc'],
        "threeD": 0,
        "imax": 0,
        "releaseTime": raw['movie']['pubDate'],
        "releaseNation": raw['movie']['src'],
        "duration": raw['movie']['episodeDur'],
        "intro": raw['movie']['dra'],
        "images": ','.join(raw['movie']['photos']),
        "videoImages": raw['movie'].get('videoImg', ''),
        "category": raw['movie']['cat'],
        "actor": json.dumps(raw['celebrities'], ensure_ascii=False)
    }]

    requests.post("http://192.168.20.204/movie/save", json=saveData)


for i in ids:
    html = requests.get(
        f"https://i.maoyan.com/asgard/movie/{i}?channelId=4", headers=headers)
    # save(i, getOneMovieData(html.text))
    saveMovie(json.loads(getOneMovieData(html.text)))


"""
name: ['movie']['nm']
en_name: ['movie']['enm']
avatar: ['movie']['img']
score: ['movie']['sc']
three_d: 0
imax: 0
release_time: ['movie']['pubDate']
release_nation: ['movie']['src']
duration: ['movie']['episodeDur']
intro: ['movie']['dra']
images: ['movie']['photos']
video_images: ['movie']['videoImg']
"""
