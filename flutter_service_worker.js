'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_24.part.js": "b63f7eb9495ef2e20e2105ed8b27b499",
"main.dart.js_46.part.js": "cfe23f01c0ff55bde03d27504fee8440",
"main.dart.js_56.part.js": "89d769cf12286a7fef9ab89c65f5e2f6",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "5e850e8b1f95d092b87cf9efa5b4b37a",
"main.dart.js_12.part.js": "174564368e306ef800e812d55693272a",
"main.dart.js_6.part.js": "261498408185210a7d66eea1799ba874",
"index.html": "67af352c18cee071da1f37a6addd05d3",
"/": "67af352c18cee071da1f37a6addd05d3",
"main.dart.js_13.part.js": "b61b6cb298e13c353ea801b8e5c5f2dc",
"main.dart.js_35.part.js": "7bc0e21c6abec41efd9e07323f243a26",
"main.dart.js_25.part.js": "5ab00438f7940082f9fb43d204e76e85",
"main.dart.js_57.part.js": "3a419932d09ed04b3e995c93ecffe55a",
"main.dart.js_47.part.js": "a6e991e728de8a62315d5c9da7ca5030",
"main.dart.js_11.part.js": "1c5a320d74d4a2813a1c29e909ec3417",
"main.dart.js_4.part.js": "e1f676d769bf86a8d5a48cf271dd4441",
"main.dart.js": "6fb2e6167d17d0bb24005c10e97b62a5",
"main.dart.js_18.part.js": "f4fe4568fd2c9e108fef50f29d25c13e",
"main.dart.js_45.part.js": "0929a0d5bdd5207b5cac8826e395c32f",
"main.dart.js_55.part.js": "0ee8e732059d0f8c459f2a1f9d723802",
"main.dart.js_27.part.js": "ade917a41b29834c60ff23a3692b3cb6",
"main.dart.js_37.part.js": "f5895140d5df4badb7cf52d27d7e340f",
"main.dart.js_19.part.js": "59eee880d8fcc3a22c1aca55e19da711",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_54.part.js": "04b5e7c9d97330f697480a7372a3ee08",
"main.dart.js_44.part.js": "e1b512f07cc6c0597c10585f8fe7d621",
"main.dart.js_36.part.js": "e159fb31149e8733701841cc8dd889c5",
"main.dart.js_26.part.js": "0096afdffce340f6cdb88583b017fc72",
"main.dart.js_10.part.js": "f8783702a0f4df3ff5363e12ca5c2933",
"main.dart.js_5.part.js": "2ead828998d8f463e94b5adecc8f2318",
"main.dart.js_48.part.js": "a09a7c21228c2362137cc1a22554331c",
"main.dart.js_15.part.js": "bbae97d58d5d6182e3a3cd1635e1a9c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "f93dd29d3d48230fb31664c2a9432af4",
"main.dart.js_51.part.js": "c05ade2687534d0a32cbe60a0e0108b8",
"main.dart.js_23.part.js": "f61dc71f1ff5cb00f59b14cc31e95467",
"main.dart.js_33.part.js": "8ce98f838636ed375bc44bb7ee6ad73e",
"main.dart.js_9.part.js": "bab189c86fdc3c9ee41af12b611d99c4",
"main.dart.js_40.part.js": "afb0fe2d3796e66de02b51ba1f168db8",
"main.dart.js_32.part.js": "a8ab4cf07f88adfcd3b9348a37a055b0",
"main.dart.js_22.part.js": "750e19c6543910b435957b01fad30798",
"main.dart.js_8.part.js": "9db626f319c0dd829402a10cc820bbf8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_49.part.js": "c5deedb8a550e9aedbbc5946e59f8660",
"main.dart.js_14.part.js": "c8ac86ed2d856f6de14af4a52b1dbe34",
"main.dart.js_1.part.js": "a854aafa69862bccf68b43c93a195233",
"main.dart.js_20.part.js": "8013e172b4177e9dd25094a030b6371f",
"main.dart.js_30.part.js": "9bca98e5860bd3e9fe6a60a1baefba81",
"main.dart.js_42.part.js": "ce79ac4fd64d4d0f0392de09917c91b9",
"main.dart.js_39.part.js": "e87a1494287c8e285c2b0a5f0b0690ff",
"main.dart.js_29.part.js": "2242f1e87f4582b26520b35747134597",
"main.dart.js_3.part.js": "a7ba4a2cd2f1af02e6623849338b6938",
"main.dart.js_16.part.js": "0a4b9904e06243428d45feb80e70a1a8",
"assets/AssetManifest.json": "66196d167c5f888b6d1196d26f610255",
"assets/NOTICES": "a7828728433346d538355026144d1f5f",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "4331258ac9541b487bc79e4751e6a382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2188c80b878e160123b99ab4853c244c",
"assets/fonts/MaterialIcons-Regular.otf": "c1c70375264b9ee5c57f1ffa5b2505bf",
"main.dart.js_28.part.js": "f9ef0eb299d0596402250531464afb44",
"main.dart.js_38.part.js": "e7ef4a531100681abf7c0d71580cc3cd",
"main.dart.js_2.part.js": "c8000139101134b7880b6bdd7de5ac6a",
"main.dart.js_17.part.js": "b081c89d663d1952ac1264df733dbd42",
"main.dart.js_31.part.js": "17f7fb2e63bb49e04c8bad6f43f8ad0f",
"main.dart.js_21.part.js": "7f7aa340f82a45fa5c6fbcb5cdfa46a1",
"main.dart.js_53.part.js": "caee4500123db945e9ae16a4cbcc949b",
"main.dart.js_43.part.js": "b2cd77cc43bbec6a3310677df5ef3799",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
