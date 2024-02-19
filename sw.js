importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"984f83fae752b5e1ffae142d361a5419","url":"feedback.html"},{"revision":"1b36747a8d1d445944371c0186b9131e","url":"fig1.png"},{"revision":"45c24a1426409a310c602c63ba9c1806","url":"fig2.jpg"},{"revision":"aa70af6bdec7fcb5cc96d563b9aa953c","url":"fig3.png"},{"revision":"9023dd997ffb864fa4bd66247d98dc00","url":"fig4.jpg"},{"revision":"77a4102a3b3d997ab57e63e831fd3768","url":"fig5.png"},{"revision":"5b56ae092c6c8d1e2e6230548acc600d","url":"fig6.jpg"},{"revision":"ff7cdb093237faaf7053cf93aa9ea191","url":"fig7.jpg"},{"revision":"45c24a1426409a310c602c63ba9c1806","url":"images/fig2.jpg"},{"revision":"aa70af6bdec7fcb5cc96d563b9aa953c","url":"images/fig3.png"},{"revision":"9023dd997ffb864fa4bd66247d98dc00","url":"images/fig4.jpg"},{"revision":"77a4102a3b3d997ab57e63e831fd3768","url":"images/fig5.png"},{"revision":"5b56ae092c6c8d1e2e6230548acc600d","url":"images/fig6.jpg"},{"revision":"ff7cdb093237faaf7053cf93aa9ea191","url":"images/fig7.jpg"},{"revision":"42a722b8c529185f0765fb53dfff0f28","url":"images/table(1).png"},{"revision":"1c052d241e5d634be82be6984c4f10a7","url":"index.html"},{"revision":"5d35aedf774eb63435949e1df884e113","url":"performance-report.html"},{"revision":"22f6b6c4ed6bda420847a72217c44a3e","url":"pic2.png"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"c164ee4ba0e62e21888e818b626c2b49","url":"posttest.html"},{"revision":"608a42eaf13d97b454554d4eef9330ef","url":"posttest.json"},{"revision":"ae219cf7931a7898ef89e84478d3da46","url":"pretest.html"},{"revision":"075f59fd0fbf1d13a7959a8ba5c77269","url":"pretest.json"},{"revision":"e7e15f423b3437e0bdb75653846faac9","url":"procedure.html"},{"revision":"5fd724586fd9d8d84f43382bdc8ee2e6","url":"references.html"},{"revision":"b0aeef532afb2960510651fde0c7c164","url":"simulation.html"},{"revision":"cea4e406e6f6080ac2276ef0d3686c22","url":"simulation/css/css/style.css"},{"revision":"cfb02960a09a10d1625bf9c1e3c41d0f","url":"simulation/css/images/100ml flaskwithoxalicsol.png"},{"revision":"2370acd34aedef0e27e6c37cd7f7cacd","url":"simulation/css/images/100ml flaskwithoxaorsulphu.png"},{"revision":"d0c2a40fbc6086875d3d0413136244ed","url":"simulation/css/images/200ml kmno4 sol.org.png"},{"revision":"8c6a47c2fecd80363cff08d79f8e2b53","url":"simulation/css/images/250ml kmno4 sol..png"},{"revision":"b09615dcb13a2ab3d1f5be22c0df62ee","url":"simulation/css/images/Analytical Balance Off_AI org1.png"},{"revision":"d0fafeea0bd15a7a0284053f0eff68b1","url":"simulation/css/images/Beaker_H2SO4nw.png"},{"revision":"2aa42b1e0a6902a82251426d840f8621","url":"simulation/css/images/Bowl_AIorg.png"},{"revision":"1e912052933b69071d553da6d2ae6533","url":"simulation/css/images/Burner_AIorg.png"},{"revision":"475fb60cecc6c3564cdbc6b84665ce57","url":"simulation/css/images/chemistry lap22.png"},{"revision":"82791e2cb69e98f6b7112dc3a2d600ec","url":"simulation/css/images/dil.h2so4 drops.png"},{"revision":"42354ae0eb2b32bce909a899382791b8","url":"simulation/css/images/distilled water.png"},{"revision":"94be5546cefc110f6a333372f75f5a07","url":"simulation/css/images/empty flask org.png"},{"revision":"3afae4f82867a8ffd456061c94e3c24e","url":"simulation/css/images/empty pipette filled with acid.png"},{"revision":"28e38aba282bfa5d10cdd5de4dd50475","url":"simulation/css/images/empty100ml flask.png"},{"revision":"86ba3e1911741cb35bcb06337aee6739","url":"simulation/css/images/emptyburetteorg11.png"},{"revision":"e3981294ef57d8366d4617fb20ca147c","url":"simulation/css/images/emptyThermometerorg.png"},{"revision":"119290fd73f621dd09b76f7f1a4d1106","url":"simulation/css/images/filled with water volumetricorg3-flask.png"},{"revision":"5c8f90f23a837153fda942b9782b0974","url":"simulation/css/images/filled with water volumetricorg3-flask1.png"},{"revision":"f4db60c5bd794afcf3bb1cc8008a4f7c","url":"simulation/css/images/filledburetteorg.png"},{"revision":"ad9f3e28a06aebf8875510a52eeab302","url":"simulation/css/images/Funnel.png"},{"revision":"c8346eb51643eaac3535f2ca13bd2a48","url":"simulation/css/images/Home.png"},{"revision":"5a91e29afe67d3c63c52b814e2bbd8d4","url":"simulation/css/images/kmno4drops-removebg-preview.png"},{"revision":"506687c9e8d4f156bd8ce2fb62c71ce9","url":"simulation/css/images/LAB 1ORGLKK zoom.png"},{"revision":"fd549380743ac2ea11e13e6a38e667ec","url":"simulation/css/images/LAB 1ORGLKK.png"},{"revision":"b52e2bb97c2f457d0bc03819453f1335","url":"simulation/css/images/LAB promaxnew1.png"},{"revision":"22a32159837509bb3e463b7c702a5c45","url":"simulation/css/images/oxalic acid crystals...png"},{"revision":"efbedd4a8216adc77183b9519932d94b","url":"simulation/css/images/oxalic acid withh1 volumetric-flask org.png"},{"revision":"f80154867bdb9c212b4bc38901a3caa1","url":"simulation/css/images/oxalic acid0 org.png"},{"revision":"a22d4674471f585e5084027904447039","url":"simulation/css/images/oxalicaciddrops.png"},{"revision":"8e8f5e77478deb5338771d26c8d9cdde","url":"simulation/css/images/Petri Dishorg.png"},{"revision":"53d66edcedfe13cd311f156d8ded4090","url":"simulation/css/images/pipette filled with acidorg4.png"},{"revision":"3d20d05488c0576f95da72b72a6e6f25","url":"simulation/css/images/Spatula.png"},{"revision":"aba4d2279a036867ac4e2b5875fe596a","url":"simulation/css/images/Thermometer.png"},{"revision":"4ea869f3c08551fb9682a6e52862ae9f","url":"simulation/css/images/Tripod.png"},{"revision":"14db8ba366aad343051c0842540212b5","url":"simulation/css/images/water drops.png"},{"revision":"af4c7ccebf340058e83a077ab15180db","url":"simulation/css/images/waterdroporg.png"},{"revision":"851e0229c0a621c5c175e1b49d43c9f1","url":"simulation/css/images/Wire_Gauge.png"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"610218a02650c5b67e79685a06ded966","url":"simulation/css/script/project.js"},{"revision":"177f44fbcc9f39fe70d2a60713fe9c72","url":"simulation/css/script/starting.js"},{"revision":"0e954ef6ee3ff406929c4ee67c3b45a5","url":"simulation/css/simulation.html"},{"revision":"cea4e406e6f6080ac2276ef0d3686c22","url":"simulation/css/style.css"},{"revision":"cfb02960a09a10d1625bf9c1e3c41d0f","url":"simulation/images/100ml flaskwithoxalicsol.png"},{"revision":"2370acd34aedef0e27e6c37cd7f7cacd","url":"simulation/images/100ml flaskwithoxaorsulphu.png"},{"revision":"d0c2a40fbc6086875d3d0413136244ed","url":"simulation/images/200ml kmno4 sol.org.png"},{"revision":"8c6a47c2fecd80363cff08d79f8e2b53","url":"simulation/images/250ml kmno4 sol..png"},{"revision":"b09615dcb13a2ab3d1f5be22c0df62ee","url":"simulation/images/Analytical Balance Off_AI org1.png"},{"revision":"d0fafeea0bd15a7a0284053f0eff68b1","url":"simulation/images/Beaker_H2SO4nw.png"},{"revision":"2aa42b1e0a6902a82251426d840f8621","url":"simulation/images/Bowl_AIorg.png"},{"revision":"1e912052933b69071d553da6d2ae6533","url":"simulation/images/Burner_AIorg.png"},{"revision":"475fb60cecc6c3564cdbc6b84665ce57","url":"simulation/images/chemistry lap22.png"},{"revision":"82791e2cb69e98f6b7112dc3a2d600ec","url":"simulation/images/dil.h2so4 drops.png"},{"revision":"42354ae0eb2b32bce909a899382791b8","url":"simulation/images/distilled water.png"},{"revision":"94be5546cefc110f6a333372f75f5a07","url":"simulation/images/empty flask org.png"},{"revision":"3afae4f82867a8ffd456061c94e3c24e","url":"simulation/images/empty pipette filled with acid.png"},{"revision":"28e38aba282bfa5d10cdd5de4dd50475","url":"simulation/images/empty100ml flask.png"},{"revision":"86ba3e1911741cb35bcb06337aee6739","url":"simulation/images/emptyburetteorg11.png"},{"revision":"e3981294ef57d8366d4617fb20ca147c","url":"simulation/images/emptyThermometerorg.png"},{"revision":"119290fd73f621dd09b76f7f1a4d1106","url":"simulation/images/filled with water volumetricorg3-flask.png"},{"revision":"5c8f90f23a837153fda942b9782b0974","url":"simulation/images/filled with water volumetricorg3-flask1.png"},{"revision":"f4db60c5bd794afcf3bb1cc8008a4f7c","url":"simulation/images/filledburetteorg.png"},{"revision":"ad9f3e28a06aebf8875510a52eeab302","url":"simulation/images/Funnel.png"},{"revision":"c8346eb51643eaac3535f2ca13bd2a48","url":"simulation/images/Home.png"},{"revision":"5a91e29afe67d3c63c52b814e2bbd8d4","url":"simulation/images/kmno4drops-removebg-preview.png"},{"revision":"506687c9e8d4f156bd8ce2fb62c71ce9","url":"simulation/images/LAB 1ORGLKK zoom.png"},{"revision":"fd549380743ac2ea11e13e6a38e667ec","url":"simulation/images/LAB 1ORGLKK.png"},{"revision":"b52e2bb97c2f457d0bc03819453f1335","url":"simulation/images/LAB promaxnew1.png"},{"revision":"22a32159837509bb3e463b7c702a5c45","url":"simulation/images/oxalic acid crystals...png"},{"revision":"efbedd4a8216adc77183b9519932d94b","url":"simulation/images/oxalic acid withh1 volumetric-flask org.png"},{"revision":"f80154867bdb9c212b4bc38901a3caa1","url":"simulation/images/oxalic acid0 org.png"},{"revision":"a22d4674471f585e5084027904447039","url":"simulation/images/oxalicaciddrops.png"},{"revision":"8e8f5e77478deb5338771d26c8d9cdde","url":"simulation/images/Petri Dishorg.png"},{"revision":"53d66edcedfe13cd311f156d8ded4090","url":"simulation/images/pipette filled with acidorg4.png"},{"revision":"3d20d05488c0576f95da72b72a6e6f25","url":"simulation/images/Spatula.png"},{"revision":"aba4d2279a036867ac4e2b5875fe596a","url":"simulation/images/Thermometer.png"},{"revision":"4ea869f3c08551fb9682a6e52862ae9f","url":"simulation/images/Tripod.png"},{"revision":"14db8ba366aad343051c0842540212b5","url":"simulation/images/water drops.png"},{"revision":"af4c7ccebf340058e83a077ab15180db","url":"simulation/images/waterdroporg.png"},{"revision":"851e0229c0a621c5c175e1b49d43c9f1","url":"simulation/images/Wire_Gauge.png"},{"revision":"60f50b6d456226ad037b081c9ae8ef69","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"1451686890a1f535f15932705df8217d","url":"simulation/script/project.js"},{"revision":"177f44fbcc9f39fe70d2a60713fe9c72","url":"simulation/script/starting.js"},{"revision":"b386f002b42c6a309d988503388ce966","url":"simulation/simulation.html"},{"revision":"42a722b8c529185f0765fb53dfff0f28","url":"table(1).png"},{"revision":"39a8dc7c948e92bed7a6d0ea156d892a","url":"theory.html"},{"revision":"16a2aaeb4fc5d6234b6eb1609d603852","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );