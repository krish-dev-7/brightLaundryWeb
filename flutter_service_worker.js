'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c3dcaedffb4bcf50a58e310de9369074",
"assets/AssetManifest.bin.json": "21c6a1680708c95e13c74139e0adef0d",
"assets/AssetManifest.json": "79f9021af601328bf94db537552cd273",
"assets/FontManifest.json": "853695e211eaf39cb4acf5a1db43d255",
"assets/fonts/Gilroy-Black.ttf": "c9a9baef8eeb74fb49d1fb697502ed9e",
"assets/fonts/Gilroy-Bold.otf": "f4db025e41888450ff00ccc3cb899a72",
"assets/fonts/Gilroy-ExtraBold.otf": "6a4b4cc92c2bca1cb586071fa1752565",
"assets/fonts/Gilroy-Heavy.ttf": "7081f75bf3e7fadc9a4bba209a1c061c",
"assets/fonts/Gilroy-Light.ttf": "6caebee1ddae08f16cf56bd2ac58d6cc",
"assets/fonts/Gilroy-Medium.ttf": "8b70347d584923c037790b37b64846a2",
"assets/fonts/MaterialIcons-Regular.otf": "033a5b0a7a4b2b125f67d1c4ecd82c30",
"assets/image/abouts.png": "5199f0f754b5b6227384a7c51a05f493",
"assets/image/aboutus.png": "e99f4dee2615c0e7c319c18f47258b39",
"assets/image/apple.png": "a1da3e5e776cff14f26a00421f86f8fb",
"assets/image/arrowdown.png": "31c7049ce663c3514fcd5891804ac0fc",
"assets/image/banner1.png": "1ba5a5fe5e2593a92b9cc7f620681ea7",
"assets/image/banner2.png": "1ba5a5fe5e2593a92b9cc7f620681ea7",
"assets/image/banner3.png": "1ba5a5fe5e2593a92b9cc7f620681ea7",
"assets/image/car.png": "7758c00b2a2a998cd698bb1f86f4abfb",
"assets/image/chat.png": "99a5cc26d2443b245c2fed085871e7bc",
"assets/image/cheack.png": "54cfca3f9d71dc1fcced277529738454",
"assets/image/cleans1.png": "c46c396f484b1072665adead236b206c",
"assets/image/cleans2.png": "7d3addfb9052b5c6ee213a59e7d15155",
"assets/image/cleans3.png": "20dcc8ab7c6d2329a13e3980ef8a8833",
"assets/image/cleans4.png": "66e83ed5cb32f29f85346e2e864faba6",
"assets/image/cleans5.png": "bc1b602c5282429cebdc75fe374e9b1f",
"assets/image/clip.png": "3233493065506009dd44436c6213662a",
"assets/image/coat.png": "1e83d49ab9e8fc2684eeb606f2ed5aa0",
"assets/image/darkmode.png": "9b1b4a6b39b76c75432cf9a078b1d8a9",
"assets/image/dele.png": "485c2c97f3dbbf2930c5db79703fcc5d",
"assets/image/deliverys.png": "80959fdaa5985f7a8ee4cb46f65b581c",
"assets/image/details.png": "b525de3827a9c8452c4576ec1ab49e19",
"assets/image/document.png": "0176aed450654442ed7967f74ab90fda",
"assets/image/dry1.png": "f9a4459ce56f210dc745c845eeabc4bb",
"assets/image/dry2.png": "9ed452aba991eda1861ccfc6a8a0d56c",
"assets/image/edit.png": "8f06fac3f635c358479a089dc7125395",
"assets/image/event.png": "11f9308142ef3fbfd22698ea33693206",
"assets/image/filter.png": "12c460d8b98dd01c9e2abc7cc98b30de",
"assets/image/forget.png": "3a930ed1b27620affa6ffb51a5b78dde",
"assets/image/g1.png": "599ee71f9eb462e7104a36b7e7e1ff4c",
"assets/image/gallary.png": "f227e62ea54388b821faec37fd84511f",
"assets/image/getevent.png": "01c028f75b73e97b60b1114ce27f7be0",
"assets/image/google.png": "b777c4ef39268d33fa5c3409780d65e9",
"assets/image/greencheak.png": "da6aa389426e9d7513c8a6efdedbdc43",
"assets/image/greycheak.png": "65fc4193d936a7fc0bfdf472489b8974",
"assets/image/helps.png": "b3b8d3ba0d7ab2b36895ce57e7a6381d",
"assets/image/history.png": "adc978aecc5033f86251fa64da6f111e",
"assets/image/hoody.png": "9d0938cd890b2a3562096278f8a7f330",
"assets/image/icons/bed.png": "b2c41419838cadc4f8c8fe17790cd766",
"assets/image/icons/bed2.png": "ec209a8d44b3f24c85b2c7977415be0e",
"assets/image/icons/bed3.png": "4588bef9f223f4da28f8059b02f3bf84",
"assets/image/icons/carpet.png": "d66c73220d06d485c40f78f4a25ffe74",
"assets/image/icons/categories1.png": "5d1313cceb865623c4c57e1ee17f04da",
"assets/image/icons/categories2.png": "3ede19351097c906aa5b127d60f68cbd",
"assets/image/icons/categories3.png": "e165c430c1691c8b39745d9058470e0c",
"assets/image/icons/coat.png": "8725a1390a784be1cdebb7b7ea3fa5e4",
"assets/image/icons/dhoti.png": "4ade0737d818751ce99f9db68316b72a",
"assets/image/icons/lehanga.png": "7b389ecd7558cccf0e70674a8d1564f4",
"assets/image/icons/pant.png": "facd192071dab6fbbd5ad7d8ead988af",
"assets/image/icons/saree.png": "a47ae7e6e6c5ceb47eb9428d209f4fee",
"assets/image/icons/shirt.png": "f0f616b381007595938b0ab532ff5dd2",
"assets/image/icons/silk%2520dhoti.jpg": "7384516e7950770d085c24fc3d1c0c30",
"assets/image/icons/silk%2520saree.png": "8ae161217f35717e2405af21b1801a65",
"assets/image/icons/silk%2520shirt.png": "e3e64907a696f13c52ec1b85992db10a",
"assets/image/icons/single%2520bed.png": "8c36d7bb720b64504a3993fd5403ad72",
"assets/image/ihome.png": "13572993da8b9baf2b11a5df0e7e7c4e",
"assets/image/invite.png": "e07b85c869fbc16670f4178060ab2358",
"assets/image/jeans.png": "bf61773550611ae3c515b0570ab059dc",
"assets/image/loc.png": "36d875d855d2b42d0532a5094a49ec32",
"assets/image/location.png": "efc87ae3e72c1028d5bed2b7ac188450",
"assets/image/lockdown.png": "6990edc096936e855d2ae60fc980bb7a",
"assets/image/login.png": "1ba5a5fe5e2593a92b9cc7f620681ea7",
"assets/image/logos.png": "f282a712f6e30e368deded74368f745e",
"assets/image/logout.png": "5b2e9e7e90d81af95fed059d89be7cca",
"assets/image/mans.png": "28eed46008cf46b6c9c8290e52c6ba2d",
"assets/image/music.png": "ffd1ddf338067f29d471a6b03f571dd2",
"assets/image/music1.png": "2d737fc50c5ea86cfc8f4418581005de",
"assets/image/notification.png": "85518a7da995e666e4675ae4b5f04037",
"assets/image/offer.png": "248c5db7a6f2ec585615149a3f0582a6",
"assets/image/onbondingg1.png": "91e1b4bbd0ce11d9ca8e1e7458b2cdfc",
"assets/image/onbondingg2.png": "9d860f7592e6e9f04552d49697c3b2ba",
"assets/image/onbondingg3.png": "3dc5428942fef4fe9b5a3724023e9d0f",
"assets/image/order1.png": "22f3b8846e19518d351cd99ce669c173",
"assets/image/order2.png": "ae44b201706280507482ada7001a616e",
"assets/image/order3.png": "6266e79f27c3e249a937f8934870fe5a",
"assets/image/order4.png": "2f1d6ed01379d29a458878bc03383515",
"assets/image/other1.png": "26d91db77a0616f7bee0281e212643f0",
"assets/image/otps.png": "f83c49cd5766bf2ce13d68e512a9e1ee",
"assets/image/p1.png": "cbec421cd67456123dedc322561faed4",
"assets/image/p2.png": "aed53dedf07339dbb03dc2f08363363d",
"assets/image/p3.png": "6a94e4dec0bcaf882fa6821c08ab4cc5",
"assets/image/p4.png": "2ddbb42418ccd221a5748c3dc2532cb3",
"assets/image/paint.png": "0e4fec35a2bed519d6e91ebd53922e5a",
"assets/image/paint1.png": "7c42ebc9bae4f57b23d04c436c4fcdc3",
"assets/image/party1.png": "61040b74571e432aa1a8049b51166306",
"assets/image/pay.png": "960fa23a72b35c5da85355ff9e710026",
"assets/image/payment.png": "f1d0e0ab25d0f44d589d7a764fdc435f",
"assets/image/paypal.png": "67786c8546144b6ccb8ba77a58ca747f",
"assets/image/protection.png": "af28f8776405732812f84da599356f41",
"assets/image/scanner.png": "6be7adab39d4ab3d5b381e3a56a3f7a6",
"assets/image/search.png": "e72eaf848257a91bf4c7bc1567d2d394",
"assets/image/setting.png": "7e47bb3894f351e0ac711cd7bf9a5c06",
"assets/image/short.png": "5c5de7035f2ab8fe14b2a091b4bb1c01",
"assets/image/smile.png": "194a9f2e9000344bf53b016f69036d73",
"assets/image/splesh.png": "6897332f9e5655a38cb501e9cafbf5cc",
"assets/image/sport1.png": "1b9bf72871d8fd7e6866b8da6c627ac4",
"assets/image/sports.png": "87871c1a89dc5696e2b1782cfbd54f61",
"assets/image/store/karupas.png": "6a2ee5b55dc5f71c518bb2859530ecc6",
"assets/image/store/kavery.png": "7a371995bcdae30a30291c7cbe45a743",
"assets/image/store/medicalClg.png": "b5b8adfee5edb610139f6795f89eb4fd",
"assets/image/store/plant.png": "ad862bdfaba8dbf64f8149c8f20d0dfe",
"assets/image/store/yagappa.png": "66713dee7e5eaacbc424ef7b62d47615",
"assets/image/success.png": "fccdca1835829bf560336534dfab2c67",
"assets/image/sweter.png": "326134cf9554444592ee09f7fead42dc",
"assets/image/time.png": "8682a6dc1e86decabbade00877cad7de",
"assets/image/tracking.png": "a52f0b98662c9a51161c526927cd9cff",
"assets/image/tshirt.png": "51e9bb64d62d528659092614651193de",
"assets/image/wash1.png": "dc84e31d8714444b3d43b79891a53f70",
"assets/image/wash2.png": "494d5ca3c1d4e00bd77d4422874dab3b",
"assets/image/wash3.png": "3a24c300b9b137d5031dd1d72055a9c4",
"assets/image/wash4.png": "53e1308ca1f3e2b3c02faf7e57470ccf",
"assets/image/wash5.png": "3ced10746432cbdaae69681c18bf7c24",
"assets/image/wash6.png": "ef8e7cb4b66f51d0d45e99b2bbe87054",
"assets/NOTICES": "5669737fdf18122771a32eaea1ef6f4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d87f1eff401dadb761a05caca46f09ae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c34ab99b62f03fb618bf9f743a13f83",
"/": "8c34ab99b62f03fb618bf9f743a13f83",
"main.dart.js": "4e673923464d721658192f617bb74a8e",
"manifest.json": "7669f6f570c2c568c8edbd6cc41d208f",
"version.json": "435d4c9963712b57d78e8eeec9c2a22b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
