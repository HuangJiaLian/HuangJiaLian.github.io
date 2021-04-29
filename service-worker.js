/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac39af75522262ca8dac44a537261c5d"
  },
  {
    "url": "about/index.html",
    "revision": "93f9d85c28b34744a0b39207f204e847"
  },
  {
    "url": "assets/css/0.styles.d4e4a38f.css",
    "revision": "7ac1e6dbc75d982479f3a7ae22336f66"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2de90f98.js",
    "revision": "924eea7b06bb1d5194c7eb2486b4379a"
  },
  {
    "url": "assets/js/100.b7dd9a80.js",
    "revision": "517ef0f49bb9157110a00a4fddd31686"
  },
  {
    "url": "assets/js/101.0f47485c.js",
    "revision": "a86339ec8dfe71d7791e0a5bb35e0812"
  },
  {
    "url": "assets/js/102.7146a69c.js",
    "revision": "2b4c10c07fc7b54f2eb0eb081c8d06fc"
  },
  {
    "url": "assets/js/103.6d5e2b0b.js",
    "revision": "f1bdde8840b9e7e867405befb509b2e4"
  },
  {
    "url": "assets/js/104.9194288d.js",
    "revision": "0e65cf6858e14de1d4a94b26ffb57bdd"
  },
  {
    "url": "assets/js/105.84f699d0.js",
    "revision": "6a318c46ef333b5da906bdde0bf7fb67"
  },
  {
    "url": "assets/js/106.8507fccc.js",
    "revision": "e7fd1d079bf0a7834ab41e5e9c85de0f"
  },
  {
    "url": "assets/js/107.aca9c52c.js",
    "revision": "b25d120d114ba7a12554f88501d578a3"
  },
  {
    "url": "assets/js/108.9e860b75.js",
    "revision": "2027dfce36fb6c5c4c42ffe999376fb0"
  },
  {
    "url": "assets/js/109.c18312a7.js",
    "revision": "b617e29d7f3026e1b876a2e56687b405"
  },
  {
    "url": "assets/js/11.3e4275c0.js",
    "revision": "5f0db3dc7a9967ccfcc62af1d1900733"
  },
  {
    "url": "assets/js/110.dced683c.js",
    "revision": "72437a00a79dfef7e7fd26bf281d08bd"
  },
  {
    "url": "assets/js/111.e1037020.js",
    "revision": "d8b0293d964702ebdbb764e59bce190a"
  },
  {
    "url": "assets/js/112.fc6f9a48.js",
    "revision": "86f56c47c96fdcd977847a0676e0f11f"
  },
  {
    "url": "assets/js/113.241eaf0c.js",
    "revision": "3ecc33b92f701eb0b88cd7fbf0a8ce23"
  },
  {
    "url": "assets/js/114.928668b7.js",
    "revision": "68257ed63e122f3996f3c9178fcac7a5"
  },
  {
    "url": "assets/js/115.7ea18f56.js",
    "revision": "29ace5deac4a51b8a5fdb1b6037f40b5"
  },
  {
    "url": "assets/js/116.cc16a4e4.js",
    "revision": "90a9de1d190d8d6fac8dabbcbff40c9b"
  },
  {
    "url": "assets/js/117.e283475a.js",
    "revision": "8d02f75e88a2545003a0860e7dab4d17"
  },
  {
    "url": "assets/js/118.c67c5853.js",
    "revision": "7ae5d896babf82129c8f0b22fc867933"
  },
  {
    "url": "assets/js/119.7f136d58.js",
    "revision": "ecdcd6df7f83a74cec09c0615ae3d8e4"
  },
  {
    "url": "assets/js/12.e0af2809.js",
    "revision": "f70beff0982f8de9b4be086806e2a1e2"
  },
  {
    "url": "assets/js/120.99998981.js",
    "revision": "28591532f9d3dbbc1545b4149a118829"
  },
  {
    "url": "assets/js/121.7673e3f3.js",
    "revision": "5ba948fc7cb83a1d2549db40f03279ff"
  },
  {
    "url": "assets/js/122.1e8fabb6.js",
    "revision": "c55b7327039a880e37a13e1e09a2d88c"
  },
  {
    "url": "assets/js/123.06f7f0f2.js",
    "revision": "61c8e6e42f362ac93427c7d51b555f80"
  },
  {
    "url": "assets/js/124.b3daa8a6.js",
    "revision": "f5819d7c23f9ebf67b42475f7e4907ed"
  },
  {
    "url": "assets/js/125.135a0a32.js",
    "revision": "e46b02d1e143cdad444ff9790f782cf3"
  },
  {
    "url": "assets/js/126.668baf73.js",
    "revision": "58d9b282f549f9cfea2844055311798d"
  },
  {
    "url": "assets/js/127.d06caf84.js",
    "revision": "a3f8002c22595d9b19a3d5c710344786"
  },
  {
    "url": "assets/js/128.70067fc3.js",
    "revision": "66cdfd94304589d4667e19359edc30a3"
  },
  {
    "url": "assets/js/13.3c51ec96.js",
    "revision": "1d277a5b387d4a51d648f86f482fbd2f"
  },
  {
    "url": "assets/js/14.215b743d.js",
    "revision": "78447881fc4cc36dee7d76f1d2a71adf"
  },
  {
    "url": "assets/js/15.ac327dcc.js",
    "revision": "84e04a3e8233d473319ab56ef1463107"
  },
  {
    "url": "assets/js/16.3f539031.js",
    "revision": "18a58ceec7e63ad7ff55d576fea6ede2"
  },
  {
    "url": "assets/js/17.327c325c.js",
    "revision": "e8b9680e12a791c1d5763085792752ae"
  },
  {
    "url": "assets/js/18.4ca43f25.js",
    "revision": "9ec4d5a9bb45613efa94f57836af1ebb"
  },
  {
    "url": "assets/js/19.598f91ab.js",
    "revision": "1d72940ba121c89c36dce82bfde6a643"
  },
  {
    "url": "assets/js/20.62457730.js",
    "revision": "6abe97059eb1797243b9621399899582"
  },
  {
    "url": "assets/js/21.1af94adb.js",
    "revision": "223321f6123a5eb6f61f9bb27c125017"
  },
  {
    "url": "assets/js/22.87b90f5d.js",
    "revision": "a80d8fa3a5322b29a0c8e4f2f09a38ae"
  },
  {
    "url": "assets/js/23.e8ad7658.js",
    "revision": "4700fc672e022a84efac3726a89cc23c"
  },
  {
    "url": "assets/js/24.8128f673.js",
    "revision": "f6bed8a3267b2ffc323ad050e116f065"
  },
  {
    "url": "assets/js/25.dc43051a.js",
    "revision": "dc692ba38457bbd0266fc26ae3dd719f"
  },
  {
    "url": "assets/js/26.44788433.js",
    "revision": "aa2330f921ea5aeb5281f9f1e5b88e1d"
  },
  {
    "url": "assets/js/27.e3f7fb93.js",
    "revision": "d1af3408c67b27c6370567db8858be6d"
  },
  {
    "url": "assets/js/28.b8e00552.js",
    "revision": "4af8f160da1f40db31ba97b891deb7ba"
  },
  {
    "url": "assets/js/29.31f5d513.js",
    "revision": "77e36b350f17a3890d362dedbb6eaba4"
  },
  {
    "url": "assets/js/3.dbd3da8d.js",
    "revision": "a580c0b908383230d52ac6d42ac13652"
  },
  {
    "url": "assets/js/30.1b694b70.js",
    "revision": "ce2de4d105e3105de2e091c6e6534d60"
  },
  {
    "url": "assets/js/31.2f498c30.js",
    "revision": "036ed343258e69ee092e9d4449235700"
  },
  {
    "url": "assets/js/32.7acf83b4.js",
    "revision": "55ebb38929144e6bd0f49c8959e6682a"
  },
  {
    "url": "assets/js/33.095627b0.js",
    "revision": "2df5639b437efce366684cd7a3c86efc"
  },
  {
    "url": "assets/js/34.857b4e86.js",
    "revision": "b85e679cb64a540cae6cc1054556ac01"
  },
  {
    "url": "assets/js/35.da7e9bde.js",
    "revision": "0a83071c11f5be208f22076c48b572f3"
  },
  {
    "url": "assets/js/36.cb1b2f62.js",
    "revision": "23eb8ea25ad06ddb52290fb0b1619a7b"
  },
  {
    "url": "assets/js/37.3c025e70.js",
    "revision": "250ca64e46fa93a3da46269f78fbd178"
  },
  {
    "url": "assets/js/38.4d4792fa.js",
    "revision": "de9891664200a4ae56098dcca3db22cd"
  },
  {
    "url": "assets/js/39.4746bc71.js",
    "revision": "7ceff823d1ad97074b38911e8fbac11f"
  },
  {
    "url": "assets/js/4.0936329b.js",
    "revision": "084958971e06ad79c2caa5a0a6b7ffc7"
  },
  {
    "url": "assets/js/40.0a3f3d42.js",
    "revision": "332885948614d6d6f7adf6515e67ffa6"
  },
  {
    "url": "assets/js/41.9eff1de1.js",
    "revision": "1c494c9d03579db170b8dd30f1859911"
  },
  {
    "url": "assets/js/42.8c852756.js",
    "revision": "de99c3f763053215b74f9e485ecfec11"
  },
  {
    "url": "assets/js/43.15c77eb7.js",
    "revision": "98bf6aa34f89ee65780bea2bffa9296d"
  },
  {
    "url": "assets/js/44.0a4efc07.js",
    "revision": "4630fa1c522c9f7dbf46b85ce4c11944"
  },
  {
    "url": "assets/js/45.05fc10c4.js",
    "revision": "62dbb710ddd793baa95934b116503135"
  },
  {
    "url": "assets/js/46.f899e23b.js",
    "revision": "13ed741b9d056087280e6cfadfba4b36"
  },
  {
    "url": "assets/js/47.75b958dc.js",
    "revision": "3b16b0f720cd4178f4d63e00a73af0d5"
  },
  {
    "url": "assets/js/48.bf3b7231.js",
    "revision": "9d21e6d21061e16a13344d1d9876b2c8"
  },
  {
    "url": "assets/js/49.a9165223.js",
    "revision": "5960f9664d074d33c6b49035277881d7"
  },
  {
    "url": "assets/js/5.6b657563.js",
    "revision": "5edd0c83d0bf9e007f207b955de8bb46"
  },
  {
    "url": "assets/js/50.020a8d9a.js",
    "revision": "12cd07512f4095301bf0f0ca2b94e5ed"
  },
  {
    "url": "assets/js/51.82cfc10c.js",
    "revision": "c8f7e1125f749f3030e87c8f99158624"
  },
  {
    "url": "assets/js/52.8f800115.js",
    "revision": "b016dbe806ec0f83c1e4b71c812de108"
  },
  {
    "url": "assets/js/53.1ab38117.js",
    "revision": "8f82a1bfd38f14b6f364584cad830fb2"
  },
  {
    "url": "assets/js/54.4b8e72f3.js",
    "revision": "6639e9232407c2468d86ace3f928afe1"
  },
  {
    "url": "assets/js/55.610b19cb.js",
    "revision": "d0ff8101ca10ebdb12c9c808bc01fb88"
  },
  {
    "url": "assets/js/56.50becf48.js",
    "revision": "199a0ffe4b79caba950f5c0d80c91d4a"
  },
  {
    "url": "assets/js/57.e3cb2362.js",
    "revision": "c8e9b4b65cd77b84b4d7aa883c46e2f1"
  },
  {
    "url": "assets/js/58.79e55b30.js",
    "revision": "738b62eeae3a66d3e0dea75d3b09474f"
  },
  {
    "url": "assets/js/59.6310a332.js",
    "revision": "7f470c71bb18597080d04bdcad8dd6e8"
  },
  {
    "url": "assets/js/6.a17fb6d6.js",
    "revision": "12c26488f43e236c7e794eff5e9cf93d"
  },
  {
    "url": "assets/js/60.71c5a435.js",
    "revision": "6270aa1477046b0063b920205eea7300"
  },
  {
    "url": "assets/js/61.eadc1cdc.js",
    "revision": "444f2ba8f366a1ff964c5e31d36547aa"
  },
  {
    "url": "assets/js/62.f54fdfa1.js",
    "revision": "317096a3286e8da5c0130caadded6074"
  },
  {
    "url": "assets/js/63.e4029dee.js",
    "revision": "62b139436de6962933a6670ba662b47c"
  },
  {
    "url": "assets/js/64.03e895fc.js",
    "revision": "5ef53406d8f46e842bf9dae9de24c17b"
  },
  {
    "url": "assets/js/65.51c30949.js",
    "revision": "fa0399846a5b12ce63ce9a60efbb9b8b"
  },
  {
    "url": "assets/js/66.a54c2419.js",
    "revision": "e474d4dece3d934f5d62c77f555502c1"
  },
  {
    "url": "assets/js/67.de31ae21.js",
    "revision": "7566bba79ea0b53b1b1f9b5639a1b1c2"
  },
  {
    "url": "assets/js/68.3d58a16e.js",
    "revision": "779bf3f1e318441e03d80884b85b3e6a"
  },
  {
    "url": "assets/js/69.8be8610a.js",
    "revision": "bf1190265337993e7ee7b25d1724bab3"
  },
  {
    "url": "assets/js/7.eae8a930.js",
    "revision": "a343a4365faae72193f570e59b1efe41"
  },
  {
    "url": "assets/js/70.f0613e30.js",
    "revision": "2e1b972ba7df310a2cc642a83757854f"
  },
  {
    "url": "assets/js/71.0ab14a83.js",
    "revision": "6b218106f2000282d0bd6884d47f64e9"
  },
  {
    "url": "assets/js/72.103b338c.js",
    "revision": "374189798f761db8b4b37e2f1c42159c"
  },
  {
    "url": "assets/js/73.88f2dd73.js",
    "revision": "10c3c818a91dcce0825c40491fa5758c"
  },
  {
    "url": "assets/js/74.f916ad51.js",
    "revision": "cc01f44dc680f6501bca099372299dcc"
  },
  {
    "url": "assets/js/75.02f33ee5.js",
    "revision": "79cfd6a6491a25acd0add7165f7c72e8"
  },
  {
    "url": "assets/js/76.ee8a5e6a.js",
    "revision": "be1d8bcd1e28d892899b52a65bbbdf55"
  },
  {
    "url": "assets/js/77.a43c5a93.js",
    "revision": "5edea6d1bf1f8164a858571dcf88d3f5"
  },
  {
    "url": "assets/js/78.d82b2f71.js",
    "revision": "1400b52b694c3be208bad81727b43119"
  },
  {
    "url": "assets/js/79.6b931bd2.js",
    "revision": "0d6d59259d4b4cdacd1440cd544557e4"
  },
  {
    "url": "assets/js/8.6c2a591e.js",
    "revision": "59d6b7f657b8eebf5e180235b78798f4"
  },
  {
    "url": "assets/js/80.97631c2e.js",
    "revision": "385b559f8cadff0bd5915b888965030b"
  },
  {
    "url": "assets/js/81.11e80f65.js",
    "revision": "c368c12db1fe1ba66a9896b13bf7b505"
  },
  {
    "url": "assets/js/82.a7ff4eb0.js",
    "revision": "554dd411f2d08988d2aba1048ce874d1"
  },
  {
    "url": "assets/js/83.e77e2bd1.js",
    "revision": "da9836a120e6efefe229873a23dd8dbf"
  },
  {
    "url": "assets/js/84.2c277d3f.js",
    "revision": "5fba3f8727e39387f81eb6ef463a20fb"
  },
  {
    "url": "assets/js/85.dfd1c4db.js",
    "revision": "c3885bcf163d95aaa3bd90cecc12886f"
  },
  {
    "url": "assets/js/86.d7e1c664.js",
    "revision": "af267a97755e306accfde6063b1b8f3e"
  },
  {
    "url": "assets/js/87.b398fab6.js",
    "revision": "e9701ad73fc398158ad8e9d413aa6c79"
  },
  {
    "url": "assets/js/88.84c6fe22.js",
    "revision": "c9a3a8d1d8d8418c9227e2328669547e"
  },
  {
    "url": "assets/js/89.30261686.js",
    "revision": "5965242779d709398fb2b3dc19b14ed2"
  },
  {
    "url": "assets/js/9.e42fbba9.js",
    "revision": "0b514ae55a5d1e68c2f1f83ffa3b79ab"
  },
  {
    "url": "assets/js/90.b4079eac.js",
    "revision": "08abefc5dc07b5d52286280c2a30aa62"
  },
  {
    "url": "assets/js/91.547615ea.js",
    "revision": "4db5a238b0ca61e8dc19c5cf3423c272"
  },
  {
    "url": "assets/js/92.dfd9434c.js",
    "revision": "da8dc85d8fdcdf1a981472afe681d7fe"
  },
  {
    "url": "assets/js/93.5fc378a5.js",
    "revision": "e2bec59f00f0f4acef04d59e30aa31a8"
  },
  {
    "url": "assets/js/94.d33bc49e.js",
    "revision": "258cf3b8199409ad6d120120b0581e13"
  },
  {
    "url": "assets/js/95.d4b43345.js",
    "revision": "281482100c4c5e3772320b901cf3f0b3"
  },
  {
    "url": "assets/js/96.deee15c6.js",
    "revision": "789322106c90a02f01ddac836880c861"
  },
  {
    "url": "assets/js/97.34a700ce.js",
    "revision": "84191d9f48d32cac203c4a0cabbf8af6"
  },
  {
    "url": "assets/js/98.2d36f031.js",
    "revision": "96e49cb4e37cf24856418324cdce054b"
  },
  {
    "url": "assets/js/99.249f9a3c.js",
    "revision": "e8bc4c065092ffcf05bab9ed9ec2cc7b"
  },
  {
    "url": "assets/js/app.aef505b2.js",
    "revision": "7c549b1a6229dba3752aa1d5183d23b5"
  },
  {
    "url": "assets/js/vendors~flowchart.861c9f2e.js",
    "revision": "3913d3e0ac8e329e601c40f3dcc72a3d"
  },
  {
    "url": "dream/tutorial/2020.html",
    "revision": "2639a57dec1f324eab495dfe44cdcdd8"
  },
  {
    "url": "dream/tutorial/conf_database.html",
    "revision": "89e31f4711db10c88519e14258925c78"
  },
  {
    "url": "dream/tutorial/index.html",
    "revision": "203df206ac53f8dd564bfdd7c8fcbe0f"
  },
  {
    "url": "dream/tutorial/install_django.html",
    "revision": "c17f8f46dc24c792fed6c8048f4b1b42"
  },
  {
    "url": "dream/tutorial/record_video.html",
    "revision": "50eaa413e3b561ce922077474242270f"
  },
  {
    "url": "images/about/jack.png",
    "revision": "715276cd79832194a000547bc393ceb0"
  },
  {
    "url": "images/ico.png",
    "revision": "a4c3f85248bc96d15820a040369d0bcb"
  },
  {
    "url": "images/learn/japanese/fayin/wushiyin1.png",
    "revision": "9dff10524ea7a150bbfb5cf9e4a17b58"
  },
  {
    "url": "images/learn/japanese/fayin/wushiyin2.png",
    "revision": "bdc303307cbf0fb6885aa21939eb0f08"
  },
  {
    "url": "images/learn/japanese/life_japanese/bunengchi.jpg",
    "revision": "28176cfe0983316c3ade8ffaa57b30b6"
  },
  {
    "url": "images/learn/japanese/life_japanese/doi_omeyga_0.jpg",
    "revision": "56613aaf9fceabcb45d8690aa52a8401"
  },
  {
    "url": "images/learn/japanese/life_japanese/doi_omeyga_1.jpg",
    "revision": "efb93543e5573c5a06238d892825fd09"
  },
  {
    "url": "images/learn/tools/anki_practice.png",
    "revision": "63c4cce92f3f93b5c322b577d44e1293"
  },
  {
    "url": "images/learn/tools/anki.png",
    "revision": "504ada6e7f260201a86c68591357b327"
  },
  {
    "url": "images/learn/tools/pdf_example.png",
    "revision": "e710a0210676e42fd4e71b9be37b351c"
  },
  {
    "url": "images/life/2005/checao.jpg",
    "revision": "f94f6a357263c26e932778adca0d92df"
  },
  {
    "url": "images/life/2005/huilaojia.jpg",
    "revision": "a0559f80f0ea07c1114b7b1f0082efdd"
  },
  {
    "url": "images/life/2005/jiejiejie.jpg",
    "revision": "b9089b1aabfd62be891fc608f4083d1b"
  },
  {
    "url": "images/life/2005/kanyayi.jpg",
    "revision": "dc04ccf73bf28aef576249682804cbc1"
  },
  {
    "url": "images/life/2005/liunianji.jpg",
    "revision": "4a463259b909dd0e62ab85a24e9a4c16"
  },
  {
    "url": "images/life/2005/luobo.jpg",
    "revision": "f2384c6bece157385a3e21f5c4be540c"
  },
  {
    "url": "images/life/2005/quyangmahe.jpg",
    "revision": "a6e03dfe9c0ad5e790e4c620f2c735af"
  },
  {
    "url": "images/life/2006/tiqianzhufan.jpg",
    "revision": "c91beccd11de1ada7aefddb64ecf8022"
  },
  {
    "url": "images/life/2006/zhongqiuganji.jpg",
    "revision": "08772ba0532943e6b3449782c2bb55ce"
  },
  {
    "url": "index.html",
    "revision": "c1f44e381cf256eb360ce45f6025b683"
  },
  {
    "url": "learn/A_Global_History/index.html",
    "revision": "d8be2e1e1c71fb9025dfa71a6670940f"
  },
  {
    "url": "learn/A_Global_History/note.html",
    "revision": "02989902b2ce3fd7ce7aac7aea26bd56"
  },
  {
    "url": "learn/Condensed_Matter_Physics/index.html",
    "revision": "7b6493c30b81ae2d95b3cae3af25c232"
  },
  {
    "url": "learn/Condensed_Matter_Physics/structure_factor.html",
    "revision": "f261fc930854e27bfad15d5b5df1be7d"
  },
  {
    "url": "learn/Docker/get_started_with_docker.html",
    "revision": "1a68a52b74a7a05e236b5a6f8507721b"
  },
  {
    "url": "learn/Docker/index.html",
    "revision": "4747d17131972edfbf8f6039f1038f93"
  },
  {
    "url": "learn/English/IELTS.html",
    "revision": "15426fef96b179a87ca4286ad3408c71"
  },
  {
    "url": "learn/English/index.html",
    "revision": "561c248a77919004d897ff56b70117a2"
  },
  {
    "url": "learn/IRL/get_started_with_irl.html",
    "revision": "84a287f6d01ab7e357d33be41f01e2e7"
  },
  {
    "url": "learn/IRL/index.html",
    "revision": "bcd280280c1f9029d9c79710dceaab14"
  },
  {
    "url": "learn/Japanese/365日の紙飛行機.html",
    "revision": "1c450bf09842d7c07b3e7820c30784c9"
  },
  {
    "url": "learn/Japanese/fayin.html",
    "revision": "50e7b501e408400984b44954088f6a7a"
  },
  {
    "url": "learn/Japanese/index.html",
    "revision": "4d51f16da0d0b96bcb673bc531c607d1"
  },
  {
    "url": "learn/Japanese/life_japanese.html",
    "revision": "4b3ef493d2746f683ec0be78d109f3db"
  },
  {
    "url": "learn/Javascript/index.html",
    "revision": "a5271d8a8ca2a0a34ed2908a9e7fd8a8"
  },
  {
    "url": "learn/Javascript/learn_javascript_in_one_hour.html",
    "revision": "b375994a6c14d226239b50a091d1de66"
  },
  {
    "url": "learn/Javascript/vue_js_crash_course.html",
    "revision": "0aefcce40a8aae62317980a1025ffe54"
  },
  {
    "url": "learn/Math/index.html",
    "revision": "c86f0dcef710ae71fffc32b77ec4b846"
  },
  {
    "url": "learn/Math/MultivariableFunctions.html",
    "revision": "06f0d112dac0e24cb172187ec98508ce"
  },
  {
    "url": "learn/Tools/how_set_email_in_calibre.html",
    "revision": "060c96a086c03749edc30e2bae1f7958"
  },
  {
    "url": "learn/Tools/how_to_connet_to_remote_cluster.html",
    "revision": "1330375b31160a462a0c18e1d7a9a30b"
  },
  {
    "url": "learn/Tools/how_to_dictionary_in_mac.html",
    "revision": "361218e40c6f2c209e1fd687c00e7647"
  },
  {
    "url": "learn/Tools/how_to_draw_flowchart_in_Vuepress.html",
    "revision": "a40771ff3249516f578ce06c11ce52a9"
  },
  {
    "url": "learn/Tools/how_to_draw_in_vuepress.html",
    "revision": "e6ec0d78f4c4fef716d420577dac5522"
  },
  {
    "url": "learn/Tools/how_to_flash_original_android.html",
    "revision": "83179ba0cb485778c1d2ee13beb94df6"
  },
  {
    "url": "learn/Tools/how_to_import_to_anki_from_csv.html",
    "revision": "7917e9a68ef14dba80f6c2ee9398b4d0"
  },
  {
    "url": "learn/Tools/how_to_use_filezilla.html",
    "revision": "8b07a351725243da6d7b952f51f81c5e"
  },
  {
    "url": "learn/Tools/how_to_use_mac.html",
    "revision": "807edf5ec1a8425bf04c1e29d1b55104"
  },
  {
    "url": "learn/Tools/how_to_use_ssr.html",
    "revision": "c3e3f36d5b67a4d48672794f87fd6c9f"
  },
  {
    "url": "learn/Tools/how_to_use_vscode.html",
    "revision": "f9c3e087121d747b39c0bc290f9e7ac2"
  },
  {
    "url": "learn/Tools/index.html",
    "revision": "274763e252d0e035f18502df486f4293"
  },
  {
    "url": "life/2005/2005-03-12-yangmahe.html",
    "revision": "f5ebc5e151fe1be8086352f11a39d8d2"
  },
  {
    "url": "life/2005/2005-03-13-huilaojia.html",
    "revision": "32b582b54c59ae0d0443a4c2ef285cc8"
  },
  {
    "url": "life/2005/2005-03-19-luobo.html",
    "revision": "be5a84c802c0dfffb80e4069b5b6ac23"
  },
  {
    "url": "life/2005/2005-03-20-kanyayi.html",
    "revision": "c155e06fa69e991fdf756f43d2959787"
  },
  {
    "url": "life/2005/2005-03-26-checao.html",
    "revision": "2f65d3fe68114ace7563b3852a044787"
  },
  {
    "url": "life/2005/2005-03-27-jiejiejie.html",
    "revision": "277e135adc599627d36ecc3db5760c4d"
  },
  {
    "url": "life/2005/index.html",
    "revision": "0d4ad14eb8bd5f4980abf4a64376dc27"
  },
  {
    "url": "life/2006/2006-10-06-ganji.html",
    "revision": "8e23ee6fc7f41268e8f91b4f159e4414"
  },
  {
    "url": "life/2006/2006-10-06-zhufan.html",
    "revision": "b0fefb23928f97f1573a9af74570b892"
  },
  {
    "url": "life/2006/index.html",
    "revision": "70334642b7c4f1edf8790a596f83c8e9"
  },
  {
    "url": "life/2008/2008-03-09-pashan.html",
    "revision": "d2189e886bbae143a61939fe67cb04ae"
  },
  {
    "url": "life/2008/2008-05-13-dizhenzhihou.html",
    "revision": "00460e91d7b863b2d0dc28326839dd94"
  },
  {
    "url": "life/2008/index.html",
    "revision": "6634d80e2dd82cb8912df9c026ff9677"
  },
  {
    "url": "life/2018/2018-04-22-long-time-no-see.html",
    "revision": "5ab19725720851ec68041a499ef8ab70"
  },
  {
    "url": "life/2018/2018-05-06-first-time-to-beijing.html",
    "revision": "8e3d70f910c3a5ad7c9e6fe2d8dd5db7"
  },
  {
    "url": "life/2018/2018-05-13-a-nice-weekend.html",
    "revision": "8d219e2b242996638955561aa2ebbbcb"
  },
  {
    "url": "life/2018/2018-05-21-i-want-to-be-free.html",
    "revision": "31f3c6268b241f5bd73d2957d3c870e8"
  },
  {
    "url": "life/2018/2018-05-22-i-am-happy-today.html",
    "revision": "df6dccf46b61e46b9d113dccfea53bf0"
  },
  {
    "url": "life/2018/2018-10-02-MountainBigLuo.html",
    "revision": "2997d646d5ce57dc6c890abbbbd824c8"
  },
  {
    "url": "life/2018/2018-10-03-langyabang-finished.html",
    "revision": "50034582ecb0484ac96b392cf3a208e2"
  },
  {
    "url": "life/2018/2018-10-15-through-the-darkness.html",
    "revision": "b13dca0dfffa102cdde577de2498d37d"
  },
  {
    "url": "life/2018/2018-10-16-i-was.html",
    "revision": "6fda9241aece3f9f9d4b1ca5ff40df1d"
  },
  {
    "url": "life/2018/2018-10-21-hard-day.html",
    "revision": "e781c51deb68acff936e8d07ed1a9dc4"
  },
  {
    "url": "life/2018/2018-10-28-To-RuiAn.html",
    "revision": "0372d863c39f9a8eb15fa8fffa88f4ed"
  },
  {
    "url": "life/2018/2018-11-11-See-you-Na.html",
    "revision": "4f827985ba067b64696a7942695064e6"
  },
  {
    "url": "life/2018/2018-11-12-Talk.html",
    "revision": "47eebddde1295780a253a23ab667059c"
  },
  {
    "url": "life/2018/2018-11-18-Sunday.html",
    "revision": "774c4c6792b7909940236a6fee8ae893"
  },
  {
    "url": "life/2018/2018-11-20-Think-What-Happened.html",
    "revision": "48e755924fd3e1f2f1b2da71f0ac6638"
  },
  {
    "url": "life/2018/2018-11-22-today.html",
    "revision": "2e4c4e220b6b9dae77a60ee07113789e"
  },
  {
    "url": "life/2018/2018-11-23-alive.html",
    "revision": "5714fa84c8ce72f83b6cf27165cbbfd4"
  },
  {
    "url": "life/2018/2018-11-24-focus.html",
    "revision": "6bfef44278e9578b1f3af28409e05147"
  },
  {
    "url": "life/2018/2018-11-25-IS.html",
    "revision": "f641e5a682ba28a6435b39faee88aec4"
  },
  {
    "url": "life/2018/2018-6-11-say-something.html",
    "revision": "bd0c7654ab5cea72206bf536e7693d4a"
  },
  {
    "url": "life/2018/2018-6-20-keep-living.html",
    "revision": "def50915e504b896fa0f96a5ddd1e21e"
  },
  {
    "url": "life/2018/2018-7-25-to-long.html",
    "revision": "d5da0c18df55aea834952fbad192e4b8"
  },
  {
    "url": "life/2018/2018-7-29-i-am-feeling-bad.html",
    "revision": "fd50b9760b0af14d9f5f94f97a38032e"
  },
  {
    "url": "life/2018/2018-7-30-anxiety.html",
    "revision": "d40910eec844e911e99158e537abfd65"
  },
  {
    "url": "life/2018/2018-7-5-a-little-step.html",
    "revision": "17ed2ceb9c0acfce919f6ffa1d2cd69f"
  },
  {
    "url": "life/2018/2018-8-5-free-happy.html",
    "revision": "921f7e7f3fdf9be55a0d935e7baf706a"
  },
  {
    "url": "life/2018/2018-9-1-anxious.html",
    "revision": "f206a79ec569982cc8f4318162444163"
  },
  {
    "url": "life/2018/2018-9-11-to-wenzhou.html",
    "revision": "93e95c2d035413c0869f7933c4bceb96"
  },
  {
    "url": "life/2018/2018-9-12-back-to-school-life.html",
    "revision": "908d396629b10a878a4a47a0f55e0140"
  },
  {
    "url": "life/2018/2018-9-13-calm-down-slowly.html",
    "revision": "c9f3b85f078e8358762b9846afe7a006"
  },
  {
    "url": "life/2018/2018-9-14-happy-day.html",
    "revision": "e52ef602318433c5c4723b146afa9a86"
  },
  {
    "url": "life/2018/2018-9-15-whatever.html",
    "revision": "6fff19e69fd24d0894804d13b2f391ae"
  },
  {
    "url": "life/2018/2018-9-23-positive-psychology.html",
    "revision": "77db7524f357940737c54efcf96b3c31"
  },
  {
    "url": "life/2018/index.html",
    "revision": "738fe0a4ee41716262b868674517c6a3"
  },
  {
    "url": "life/2019/2019-03-02-back-to-study.html",
    "revision": "c236a6f1374f4703aa56341574967366"
  },
  {
    "url": "life/2019/2019-05-03-wenzhou-thinking.html",
    "revision": "89cdbfa3add2bfbdd4fd5adffc3e83e9"
  },
  {
    "url": "life/2019/2019-07-10-taiwan-trip1.html",
    "revision": "e49405657eb41e4a8fa5ba1bac12359d"
  },
  {
    "url": "life/2019/2019-07-11-taiwan-shilin.html",
    "revision": "69538d1ef5106005965c235850c081ab"
  },
  {
    "url": "life/2019/2019-07-11-taiwan-trip2.html",
    "revision": "79c8686a6f33c52df33217fcea163ea1"
  },
  {
    "url": "life/2019/2019-07-11-taiwan-trip3.html",
    "revision": "946c401423c3ecb270d7373ee6e192bb"
  },
  {
    "url": "life/2019/2019-07-12-taiwan-hualien-1.html",
    "revision": "10ec0b3012815d0282599c2b77744b30"
  },
  {
    "url": "life/2019/2019-07-13-taiwan-a-day-at-hualien.html",
    "revision": "aa7504b35847c73627ca5522749b3a3a"
  },
  {
    "url": "life/2019/2019-08-28-beijing.html",
    "revision": "84eba56cc3c8f7a04fe41bc1f1d9c20e"
  },
  {
    "url": "life/2019/2019-08-30-talk-to-mom.html",
    "revision": "d479d6260fdf2452cbf95562fee808a6"
  },
  {
    "url": "life/2019/2019-09-04-kaixue.html",
    "revision": "cc3ad0ab6f58f9efe3a708f67b3d0e84"
  },
  {
    "url": "life/2019/2019-09-05-some-think.html",
    "revision": "38ff294c7ec717a9f59c77b895b70b3d"
  },
  {
    "url": "life/2019/2019-09-07-face-myself.html",
    "revision": "0b84dd80da61034cc7b6c871d4cb11f7"
  },
  {
    "url": "life/2019/2019-09-22-local-minimum.html",
    "revision": "ce6ead116bbd54dbcf3566e175d0d03a"
  },
  {
    "url": "life/2019/2019-10-01-70.html",
    "revision": "ee931cbf75910bb1e62151a5d45cf2c5"
  },
  {
    "url": "life/2019/2019-10-20-irl-over.html",
    "revision": "64b05e8fabf47e2dc504ef81bfdb1653"
  },
  {
    "url": "life/2019/2019-10-27-talk-to-tao.html",
    "revision": "6231c5b8b750a09303aea2b3e42d59e5"
  },
  {
    "url": "life/2019/index.html",
    "revision": "d7e864e0cc442f69d1f3a60efbd1c43c"
  },
  {
    "url": "life/2020/2020-01-14-think.html",
    "revision": "f69ef50597d8efe1a3f7d57c24e50306"
  },
  {
    "url": "life/2020/2020-01-17-ten-reasons-to-be-rich.html",
    "revision": "f4d215584916e88d0c970ff03d1b4bc8"
  },
  {
    "url": "life/2020/2020-01-18-what-to-do-next.html",
    "revision": "fb5993a3fc92601767790ef68d73ac71"
  },
  {
    "url": "life/2020/2020-09-29-happy-days.html",
    "revision": "26c3ab8f9bf37ceb21702fe5b48c6548"
  },
  {
    "url": "life/2020/2020-10-19-happy.html",
    "revision": "0a705d0213771f2a8b40b8f268733214"
  },
  {
    "url": "life/2020/2020-10-25-nanxijiang.html",
    "revision": "020f4ebb7666d46af828840baaed71a8"
  },
  {
    "url": "life/2020/2020-11-1-new-month.html",
    "revision": "17392d9253e5e8d19f93e26dfcbd80c7"
  },
  {
    "url": "life/2020/2021-01-24-stay-at-wenzhou.html",
    "revision": "1ad05066a2759f9888db03124cf93751"
  },
  {
    "url": "life/2020/2021-01-30-think.html",
    "revision": "cb5a2df767d2681bd303db6dfc13f584"
  },
  {
    "url": "life/2020/index.html",
    "revision": "6c5984658e329d25a5d32313de4f2fe2"
  },
  {
    "url": "life/2021/2021-04-29-time.html",
    "revision": "c8a64651ae21003050fa4e9b57f02d76"
  },
  {
    "url": "life/2021/index.html",
    "revision": "aa5648ddbae301a98e54d14ea67e5159"
  },
  {
    "url": "life/index.html",
    "revision": "04c37fd3e7ed0d8e0b61e588b3ee04f9"
  },
  {
    "url": "solve/index.html",
    "revision": "431a90b4775b1f399c362a5ca59ef1d2"
  },
  {
    "url": "solve/python_ffmpeg.html",
    "revision": "f2ab2e60accd43c6e5868df49a9fb750"
  },
  {
    "url": "think/index.html",
    "revision": "a3c05cc473293373e495ac62b3883d65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
