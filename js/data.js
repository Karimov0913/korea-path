// База данных Korea Path. Суммы ориентировочные: проверяйте условия на официальных сайтах перед подачей.
window.KOREA_DATA = {
  rates: { KRW_USD: 0.00072, UZS_USD: 0.000079, updated: '2026-09-29', fallback: true },
  universities: [
    {id:'uos',name:'University of Seoul (UOS)',city:'Сеул',topik:3,gpa:3.0,ielts:5.5,tuition:5200000,scholarship:'30–100% по успеваемости',deadline:'март / сентябрь',site:'https://oia.uos.ac.kr/',email:'international@uos.ac.kr'},
    {id:'inu',name:'Incheon National University (INU)',city:'Инчхон',topik:3,gpa:2.8,ielts:5.5,tuition:5600000,scholarship:'30–100% при поступлении',deadline:'апрель / октябрь',site:'https://www.inu.ac.kr/isc_eng/',email:'international@inu.ac.kr'},
    {id:'yonsei',name:'Yonsei University',city:'Сеул',topik:5,gpa:3.6,ielts:6.5,tuition:12500000,scholarship:'GKS и внутренние гранты',deadline:'март / сентябрь',site:'https://www.yonsei.ac.kr/en_sc/admission/',email:'iadms@yonsei.ac.kr'},
    {id:'ku',name:'Korea University',city:'Сеул',topik:4,gpa:3.5,ielts:6.5,tuition:11200000,scholarship:'Global KU, 50–100%',deadline:'март / сентябрь',site:'https://oia.korea.ac.kr/',email:'admission@korea.ac.kr'},
    {id:'konkuk',name:'Konkuk University',city:'Сеул',topik:3,gpa:3.0,ielts:5.5,tuition:9200000,scholarship:'30–100% по TOPIK/GPA',deadline:'апрель / октябрь',site:'https://www.konkuk.ac.kr/en/',email:'abroad@konkuk.ac.kr'},
    {id:'khu',name:'Kyung Hee University',city:'Сеул',topik:3,gpa:3.2,ielts:6.0,tuition:9900000,scholarship:'Admission / excellence',deadline:'март / сентябрь',site:'https://iadmission.khu.ac.kr/',email:'ciss@khu.ac.kr'},
    {id:'ajou',name:'Ajou University',city:'Сувон',topik:3,gpa:3.0,ielts:5.5,tuition:8500000,scholarship:'30–100% по языку/GPA',deadline:'май / ноябрь',site:'https://www.ajou.ac.kr/iadmissions_en/',email:'admission@ajou.ac.kr'},
    {id:'skku',name:'Sungkyunkwan University (SKKU)',city:'Сеул/Сувон',topik:4,gpa:3.5,ielts:6.0,tuition:10800000,scholarship:'10–100% по результатам',deadline:'март / сентябрь',site:'https://admission-global.skku.edu/eng/',email:'fore@skku.edu'}
  ],
  cities: [
    {city:'Сеул',housing:550000,food:400000,transport:75000,internet:35000,insurance:76000,phone:35000},
    {city:'Инчхон',housing:430000,food:350000,transport:70000,internet:33000,insurance:76000,phone:35000},
    {city:'Пусан',housing:380000,food:340000,transport:65000,internet:33000,insurance:76000,phone:33000},
    {city:'Тэгу',housing:330000,food:320000,transport:60000,internet:32000,insurance:76000,phone:33000}
  ],
  phrases: [
    ['Здравствуйте','안녕하세요','ан-нён-ха-се-ё'],['Спасибо','감사합니다','кам-са-хам-ни-да'],['Сколько это стоит?','얼마예요?','оль-ма-е-ё?'],['Дайте, пожалуйста, чек','영수증 주세요','ён-су-джын чу-се-ё'],['Мне нужен банковский счёт','은행 계좌가 필요해요','ын-хэн ке-чва-га пи-рё-хэ-ё'],['Я хочу отправить деньги','송금하고 싶어요','сон-гым-ха-го щи-по-ё'],['Мне нужен врач','의사가 필요해요','ый-са-га пи-рё-хэ-ё'],['Где больница?','병원이 어디예요?','пён-вон-и о-ди-е-ё?'],['Позвоните 119','119에 전화해 주세요','иль-иль-гу-е чон-хва-хэ чу-се-ё'],['Помогите, пожалуйста','도와주세요','то-ва-чу-се-ё'],['Где полицейский участок?','경찰서가 어디예요?','кён-чхаль-со-га о-ди-е-ё?'],['Я потерял ARC','외국인등록증을 잃어버렸어요','ве-гу-гин-тын-нок-чжын-ыль и-ро-бо-рё-со-ё']
  ],
  points: [
    {n:'Seoul Central Mosque',c:'Мечеть',city:'Сеул',lat:37.5335,lng:126.9970,a:'39 Usadan-ro 10-gil, Yongsan-gu'},
    {n:'Korea Muslim Federation',c:'Мечеть',city:'Сеул',lat:37.5334,lng:126.9971,a:'Itaewon, Yongsan-gu'},
    {n:'Masjid Al-Falah',c:'Мечеть',city:'Сеул',lat:37.4817,lng:126.9528,a:'Gwanak-gu, уточняйте перед визитом'},
    {n:'Foreign Food Mart',c:'Халяль',city:'Сеул',lat:37.5343,lng:126.9949,a:'Itaewon-ro, Yongsan-gu'},
    {n:'Eid Halal Korean Food',c:'Халяль',city:'Сеул',lat:37.5338,lng:126.9959,a:'Usadan-ro 10-gil, Yongsan-gu'},
    {n:'Makan Halal Korean Restaurant',c:'Халяль',city:'Сеул',lat:37.5331,lng:126.9952,a:'Usadan-ro 10-gil, Yongsan-gu'},
    {n:'Kervan Itaewon',c:'Халяль',city:'Сеул',lat:37.5347,lng:126.9942,a:'Itaewon-ro, Yongsan-gu'},
    {n:'Seoul National University Hospital',c:'Больница',city:'Сеул',lat:37.5796,lng:126.9990,a:'101 Daehak-ro, Jongno-gu'},
    {n:'Severance Hospital',c:'Больница',city:'Сеул',lat:37.5624,lng:126.9408,a:'50-1 Yonsei-ro, Seodaemun-gu'},
    {n:'Samsung Medical Center',c:'Больница',city:'Сеул',lat:37.4880,lng:127.0856,a:'81 Irwon-ro, Gangnam-gu'},
    {n:'Hana Bank Itaewon',c:'Банк',city:'Сеул',lat:37.5342,lng:126.9940,a:'Itaewon-dong, Yongsan-gu'},
    {n:'Woori Bank Seoul Station',c:'Банк',city:'Сеул',lat:37.5549,lng:126.9709,a:'Seoul Station area'},
    {n:'UOS International Office',c:'Университет',city:'Сеул',lat:37.5838,lng:127.0588,a:'163 Seoulsiripdae-ro, Dongdaemun-gu'},
    {n:'Yonsei Global Office',c:'Университет',city:'Сеул',lat:37.5658,lng:126.9386,a:'50 Yonsei-ro, Seodaemun-gu'},
    {n:'Korea University Global Services',c:'Университет',city:'Сеул',lat:37.5895,lng:127.0324,a:'145 Anam-ro, Seongbuk-gu'},
    {n:'Konkuk International Office',c:'Университет',city:'Сеул',lat:37.5419,lng:127.0766,a:'120 Neungdong-ro, Gwangjin-gu'},
    {n:'Kyung Hee Global Office',c:'Университет',city:'Сеул',lat:37.5963,lng:127.0525,a:'26 Kyungheedae-ro, Dongdaemun-gu'},
    {n:'SKKU International Hall',c:'Университет',city:'Сеул',lat:37.5882,lng:126.9936,a:'25-2 Sungkyunkwan-ro, Jongno-gu'},
    {n:'INU International Office',c:'Университет',city:'Инчхон',lat:37.3759,lng:126.6327,a:'119 Academy-ro, Yeonsu-gu'},
    {n:'Incheon Masjid',c:'Мечеть',city:'Инчхон',lat:37.4522,lng:126.7052,a:'Namdong-gu, уточняйте перед визитом'},
    {n:'Inha University Hospital',c:'Больница',city:'Инчхон',lat:37.4588,lng:126.6338,a:'27 Inhang-ro, Jung-gu'},
    {n:'Gachon University Gil Medical Center',c:'Больница',city:'Инчхон',lat:37.4526,lng:126.7090,a:'21 Namdong-daero 774beon-gil'},
    {n:'Shinhan Bank Songdo',c:'Банк',city:'Инчхон',lat:37.3948,lng:126.6503,a:'Songdo-dong, Yeonsu-gu'},
    {n:'Songdo Dormitory Area',c:'Общежитие',city:'Инчхон',lat:37.3792,lng:126.6346,a:'INU campus area'},
    {n:'Busan Al-Fatah Mosque',c:'Мечеть',city:'Пусан',lat:35.2294,lng:129.0895,a:'Geumdan-ro, Geumjeong-gu'},
    {n:'Busan Mosque Halal Market',c:'Халяль',city:'Пусан',lat:35.2296,lng:129.0898,a:'Near Busan Al-Fatah Mosque'},
    {n:'Pusan National University Hospital',c:'Больница',city:'Пусан',lat:35.1006,lng:129.0190,a:'179 Gudeok-ro, Seo-gu'},
    {n:'Busan Paik Hospital',c:'Больница',city:'Пусан',lat:35.1455,lng:129.0214,a:'75 Bokji-ro, Busanjin-gu'},
    {n:'BNK Busan Bank Main Office',c:'Банк',city:'Пусан',lat:35.1588,lng:129.0637,a:'Munhyeongeumyung-ro, Nam-gu'},
    {n:'Pusan National University International',c:'Университет',city:'Пусан',lat:35.2338,lng:129.0798,a:'2 Busandaehak-ro 63beon-gil'},
    {n:'Dong-A University International',c:'Университет',city:'Пусан',lat:35.1041,lng:128.9670,a:'37 Nakdong-daero 550beon-gil'},
    {n:'Haeundae Halal Food Area',c:'Халяль',city:'Пусан',lat:35.1632,lng:129.1636,a:'Haeundae-gu, проверяйте сертификацию'},
    {n:'Ajou International Office',c:'Университет',city:'Сувон',lat:37.2829,lng:127.0438,a:'206 World cup-ro, Yeongtong-gu'},
    {n:'Ajou University Hospital',c:'Больница',city:'Сувон',lat:37.2795,lng:127.0475,a:'164 World cup-ro, Yeongtong-gu'},
    {n:'SKKU Natural Sciences Campus',c:'Университет',city:'Сувон',lat:37.2945,lng:126.9754,a:'2066 Seobu-ro, Jangan-gu'},
    {n:'Suwon Mosque',c:'Мечеть',city:'Сувон',lat:37.2677,lng:127.0170,a:'Paldal-gu, уточняйте перед визитом'}
  ]
};
