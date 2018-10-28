import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonserviceService {
    private products = new BehaviorSubject<any>(null);
	  private product = new BehaviorSubject<any>(null);
    allProducts = this.products.asObservable();
    currentProduct = this.product.asObservable();

	  private listProducts;
    private category: string = '';
    private query: string = '';

  	constructor() {
      	this.listProducts = [
            {
            "title": "SanDisk Ultra microSDXC UHS-I 80 MB/s Card with Adapter 64GB - SDSQUNS-064G-GN3MA",
            "ean": "2724285854797",
            "id": 2886500398,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/sandisk-ultra-microsdxc-uhs-i-80-mb-s-card-with-adapter-64gb-sdsquns-064g-gn3ma-2886500398/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2017/12/03/65/59/35/3/item_L_6559353_80057736.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:84%\"></i></i> <small class=\"txtcolor-gray\">(308)</small>",
            "itemPrice": "91.89",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "1"
          },
          {
            "title": "MicroUSB Data Cable ECB-DU4AWE - White",
            "ean": "2724287598583",
            "id": 32167800029,
            "is_unit": true,
            "discount": "<span class=\"discount\">66 % off</span>",
            "sPrimaryLink": "https://uae.souq.com/ae-en/microusb-data-cable-ecb-du4awe-white-32167800029/u/",
            "imageUrl": "https://cf3.s3.souqcdn.com/item/2014/03/14/67/31/60/9/item_L_6731609_4349861.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:64%\"></i></i> <small class=\"txtcolor-gray\">(159)</small>",
            "itemPrice": "1.08",
            "itemOldPrice": "3.15 AED",
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "1"
          },
          {
            "title": "Sandisk Ultra 16 GB Class 10 UHS-I Micro SDHC Card - SDSQUNB-016G-GN3MA",
            "ean": "2724317908115",
            "id": 3524200398,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/sandisk-ultra-16-gb-class-10-uhs-i-micro-sdhc-card-sdsqunb-016g-gn3ma-3524200398/u/",
            "imageUrl": "https://cf5.s3.souqcdn.com/item/2017/04/19/97/16/22/4/item_L_9716224_30783074.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:92%\"></i></i> <small class=\"txtcolor-gray\">(274)</small>",
            "itemPrice": "25.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "1"
          },
          {
            "title": "NodeMCU v2 - Lua based ESP8266 development kit",
            "ean": "2724465953098",
            "id": 459400066,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/nodemcu-v2-lua-based-esp8266-development-kit-459400066/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2017/08/19/23/85/31/37/item_L_23853137_34591568.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:96%\"></i></i> <small class=\"txtcolor-gray\">(43)</small>",
            "itemPrice": "23.90",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "1"
          },
          {
            "title": "Generic J5 Earphones - White",
            "ean": "2724500019284",
            "id": 47899500373,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/generic-j5-earphones-white-47899500373/u/",
            "imageUrl": "https://cf2.s3.souqcdn.com/item/2017/10/17/25/83/87/48/item_L_25838748_46068875.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:84%\"></i></i> <small class=\"txtcolor-gray\">(12)</small>",
            "itemPrice": "1.98",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "2"
          },
          {
            "title": "Premium Gold-Plated HDMI Cable for PS3 Sony AppleTV 1080P 1M 3FT",
            "ean": "2724272065830",
            "id": 32119200029,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/premium-gold-plated-hdmi-cable-for-ps3-sony-appletv-1080p-1m-3ft-32119200029/u/",
            "imageUrl": "https://cf5.s3.souqcdn.com/item/2013/07/07/49/93/24/7/item_L_4993247_2321876.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:84%\"></i></i> <small class=\"txtcolor-gray\">(47)</small>",
            "itemPrice": "3.22",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "2"
          },
          {
            "title": "Raspberry Pi 3 Model B plus",
            "ean": "2724634646929",
            "id": 4436100558,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/raspberry-pi-3-model-b-plus-4436100558/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2018/06/24/36/06/92/87/item_L_36069287_142163172.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:100%\"></i></i> <small class=\"txtcolor-gray\">(1)</small>",
            "itemPrice": "184.80",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "2"
          },
          {
            "title": "Raspberry Pi Zero Wireless",
            "ean": "2724605750679",
            "id": 4096700558,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/raspberry-pi-zero-wireless-4096700558/u/",
            "imageUrl": "https://cf3.s3.souqcdn.com/item/2018/04/22/33/45/28/39/item_L_33452839_130864578.jpg",
            "itemPrice": "120.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "2"
          },
          {
            "title": "Arduino / Raspberry Wifi Serial Transceiver Module with ESP8266 Chip",
            "ean": "2724304925354",
            "id": 1610900070,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/arduino-raspberry-wifi-serial-transceiver-module-with-esp8266-chip-1610900070/u/",
            "imageUrl": "https://cf2.s3.souqcdn.com/item/2015/06/08/84/35/68/9/item_L_8435689_8169005.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:92%\"></i></i> <small class=\"txtcolor-gray\">(47)</small>",
            "itemPrice": "10.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "xd-58c pulse sensor",
            "ean": "2724607222020",
            "id": 3620400558,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/xd-58c-pulse-sensor-3620400558/u/",
            "imageUrl": "https://cf5.s3.souqcdn.com/item/2018/04/26/33/58/83/77/item_L_33588377_131609770.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:20%\"></i></i> <small class=\"txtcolor-gray\">(1)</small>",
            "itemPrice": "18.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "Raspberry Pi Zero Wireless",
            "ean": "2724640293704",
            "id": 4096900558,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/raspberry-pi-zero-wireless-4096900558/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2018/07/12/36/48/59/81/item_L_36485981_143184371.jpg",
            "itemPrice": "130.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "1"
          },
          {
            "title": "Soil Moisture Sensor & Soil Hygrometer Detection Module arduino / raspberry pi / AVR / AR​​M / PIC",
            "ean": "2724304804062",
            "id": 88398000024,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/soil-moisture-sensor-soil-hygrometer-detection-module-arduino-raspberry-pi-avr-ar-m-pic-88398000024/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2015/06/05/84/25/25/4/item_L_8425254_8142259.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:96%\"></i></i> <small class=\"txtcolor-gray\">(9)</small>",
            "itemPrice": "9.90",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "NRF24L01 2.4Ghz Arduino Wireless Network Module",
            "ean": "2724305744534",
            "id": 1609400070,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/nrf24l01-2-4ghz-arduino-wireless-network-module-1609400070/u/",
            "imageUrl": "https://cf3.s3.souqcdn.com/item/2015/06/22/85/15/61/3/item_L_8515613_8352036.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:100%\"></i></i> <small class=\"txtcolor-gray\">(1)</small>",
            "itemPrice": "14.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "NE555 Adjustable Module Square Rectangular Wave Stepping Motor Driver LED Indicator Pulse Generator Frequency Duty Cycle",
            "ean": "2724606710054",
            "id": 4129000558,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/ne555-adjustable-module-square-rectangular-wave-stepping-motor-driver-led-indicator-pulse-generator-frequency-duty-cycle-4129000558/u/",
            "imageUrl": "https://cf5.s3.souqcdn.com/item/2018/04/25/33/53/95/23/item_L_33539523_131439941.jpg",
            "itemPrice": "35.00",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "Microphone Sensor Module for Arduino",
            "ean": "2724311032687",
            "id": 458700066,
            "is_unit": true,
            "discount": "",
            "sPrimaryLink": "https://uae.souq.com/ae-en/microphone-sensor-module-for-arduino-458700066/u/",
            "imageUrl": "https://cf4.s3.souqcdn.com/item/2015/09/09/90/35/20/9/item_L_9035209_9406614.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:84%\"></i></i> <small class=\"txtcolor-gray\">(6)</small>",
            "itemPrice": "4.40",
            "itemOldPrice": null,
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          },
          {
            "title": "TowerPro SG90 9G micro servo motor arduino / raspberry pi / AVR / AR​​M / PIC",
            "ean": "2724304803812",
            "id": 88545800024,
            "is_unit": true,
            "discount": "<span class=\"discount\">73 % off</span>",
            "sPrimaryLink": "https://uae.souq.com/ae-en/towerpro-sg90-9g-micro-servo-motor-arduino-raspberry-pi-avr-ar-m-pic-88545800024/u/",
            "imageUrl": "https://cf1.s3.souqcdn.com/item/2015/06/05/84/25/23/4/item_L_8425234_8142211.jpg",
            "reviews_average_rating": "<i class=\"star-rating-svg\"><i style=\"width:90%\"></i></i> <small class=\"txtcolor-gray\">(60)</small>",
            "itemPrice": "10.00",
            "itemOldPrice": "36.75 AED",
            "itemCPTprice": "",
            "listViewPoints": null,
            "fbs": "false",
            "isAgs": false,
            "freeShipping": "",
            "category": "3"
          }
        ];

        this.products.next(this.listProducts);
  	}


    filterCategory(category: string){
        this.category = category;
        this.filter(this.query);
    }

  	filter(query: string): void {
        this.query = query;
        let filterList = [];
        if(query==='' && this.category === ''){
          this.products.next(this.listProducts);
        }else if(query === '' && this.category != ''){
              this.listProducts.forEach(element => {
                  if(element.category.startsWith(this.category)){
                      filterList.push(element);
                  }
              });
              this.products.next(filterList);
            }
            else if (query != '' && this.category === ''){
        this.listProducts.forEach(element => {
          if(element.title.startsWith(query)){
            filterList.push(element);
          }
        });
              this.products.next(filterList);
        }
        else if (query != '' && this.category != ''){
            this.listProducts.forEach(element => {
                if(element.title.startsWith(query)&&element.category.startsWith(this.category)){
                    filterList.push(element);
                }
            });
            this.products.next(filterList);
        }
  	}

  	getProducts(): Observable<[]> {
    	return this.allProducts;
   	}

    changeCurrentProduct(data: any): void {
        this.product.next(data);
    }

    getProduct(): Observable<[]> {
        return this.currentProduct;
    }


}
