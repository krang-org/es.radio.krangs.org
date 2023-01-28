window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Perea S L ",
      "url": "./commercials/es-ES/health-wellness-and-fitness/perea-s-l/16736034915330/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Ballesteros Mascare As Y Lira Asociados",
      "url": "./commercials/es-ES/professional-training-coaching/ballesteros-mascare-as-y-lira-asociados/16736026655430/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Rinc N Hermanos",
      "url": "./commercials/es-ES/newspapers/rinc-n-hermanos/16736021812470/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Raya Rosario E Hijos",
      "url": "./commercials/es-ES/transportationg-trucking-railroad/raya-rosario-e-hijos/16736025287670/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Fl Rez Y Rocha",
      "url": "./commercials/es-ES/legal-services/fl-rez-y-rocha/16736022324890/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Sosa S L ",
      "url": "./commercials/es-ES/machinery/sosa-s-l/16736027491690/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Cortez Pichardo Y Mendoza Asociados",
      "url": "./commercials/es-ES/tobacco/cortez-pichardo-y-mendoza-asociados/16736034169260/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Viera Irizarry Y Rojas Asociados",
      "url": "./commercials/es-ES/mining-metals/viera-irizarry-y-rojas-asociados/16736033328770/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Hurtado S L ",
      "url": "./commercials/es-ES/management-consulting/hurtado-s-l/16736027680820/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Guardado Y Santana",
      "url": "./commercials/es-ES/railroad-manufacture/guardado-y-santana/16736028792790/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Villegas Y Aponte",
      "url": "./commercials/es-ES/transportationg-trucking-railroad/villegas-y-aponte/16736029383980/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Rodr Guez E Hijos",
      "url": "./commercials/es-ES/retail/rodr-guez-e-hijos/16736022621810/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Saldivar Y Godoy",
      "url": "./commercials/es-ES/chemicals/saldivar-y-godoy/16736026105580/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Barreto Narv Ez S L ",
      "url": "./commercials/es-ES/railroad-manufacture/barreto-narv-ez-s-l/16736033228790/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "De Roma A Dom Nquez Y Marrero Asociados",
      "url": "./commercials/es-ES/newspapers/de-roma-a-dom-nquez-y-marrero-asociados/16736021768560/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Crespo Y Uribe",
      "url": "./commercials/es-ES/mental-health-care/crespo-y-uribe/16736022048580/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Soto Y P Rez",
      "url": "./commercials/es-ES/arts-and-crafts/soto-y-p-rez/16736029674610/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Rinc N E Hijos",
      "url": "./commercials/es-ES/pharmaceuticals/rinc-n-e-hijos/16736024206830/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Anguiano S L ",
      "url": "./commercials/es-ES/gambling-casinos/anguiano-s-l/16736023736170/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Leal Aranda S L ",
      "url": "./commercials/es-ES/security-and-investigations/leal-aranda-s-l/16736032759120/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Alba Y Roque",
      "url": "./commercials/es-ES/food-beverages/alba-y-roque/16736022117020/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Corona Serna Y Agosto Asociados",
      "url": "./commercials/es-ES/public-policy/corona-serna-y-agosto-asociados/16736024943210/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Dom Nquez Hermanos",
      "url": "./commercials/es-ES/international-trade-and-development/dom-nquez-hermanos/16736029198140/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Aguilera Olivas Y Soria Asociados",
      "url": "./commercials/es-ES/commercial-real-estate/aguilera-olivas-y-soria-asociados/16736025510820/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Rubio Ju Rez Y Santill N Asociados",
      "url": "./commercials/es-ES/furniture/rubio-ju-rez-y-santill-n-asociados/16736033587030/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Abrego Delarosa Y Soto Asociados",
      "url": "./commercials/es-ES/wholesale/abrego-delarosa-y-soto-asociados/16736023966910/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Partida Bustamante Y Guerra Asociados",
      "url": "./commercials/es-ES/think-tanks/partida-bustamante-y-guerra-asociados/16736026320220/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Casta Eda S A ",
      "url": "./commercials/es-ES/package-freight-delivery/casta-eda-s-a/16736027166740/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Galarza Arellano S L ",
      "url": "./commercials/es-ES/apparel-fashion/galarza-arellano-s-l/16736023116960/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Vergara S A ",
      "url": "./commercials/es-ES/broadcast-media/vergara-s-a/16736032368100/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Ortiz Pi A Y Pacheco Asociados",
      "url": "./commercials/es-ES/utilities/ortiz-pi-a-y-pacheco-asociados/16736026954700/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Tafoya Y Agosto",
      "url": "./commercials/es-ES/accounting/tafoya-y-agosto/16736027547340/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Olivas Valdivia Y Osorio Asociados",
      "url": "./commercials/es-ES/shipbuilding/olivas-valdivia-y-osorio-asociados/16736028476990/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Lerma Monroy E Hijos",
      "url": "./commercials/es-ES/market-research/lerma-monroy-e-hijos/16736031841750/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Navarro Tafoya Y Guardado Asociados",
      "url": "./commercials/es-ES/printing/navarro-tafoya-y-guardado-asociados/16736023385140/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Lovato Armenta Y Montes Asociados",
      "url": "./commercials/es-ES/airlines-aviation/lovato-armenta-y-montes-asociados/16736025223810/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Madrigal S A ",
      "url": "./commercials/es-ES/transportationg-trucking-railroad/madrigal-s-a/16736029325090/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Acevedo Cortez Hermanos",
      "url": "./commercials/es-ES/consumer-electronics/acevedo-cortez-hermanos/16736030599020/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Santacruz Y Miranda",
      "url": "./commercials/es-ES/motion-pictures-and-film/santacruz-y-miranda/16736023271640/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Abreu E Hijos",
      "url": "./commercials/es-ES/consumer-services/abreu-e-hijos/16736030702620/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Olmos Nava Y D Az Asociados",
      "url": "./commercials/es-ES/individual-family-services/olmos-nava-y-d-az-asociados/16736024872380/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Alonso Vaca E Hijos",
      "url": "./commercials/es-ES/wholesale/alonso-vaca-e-hijos/16736023849220/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Casanova Y Borrego",
      "url": "./commercials/es-ES/consumer-electronics/casanova-y-borrego/16736032306730/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Cedillo Ulibarri S L ",
      "url": "./commercials/es-ES/computer-networking/cedillo-ulibarri-s-l/16736031141390/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Calvillo Y Perea",
      "url": "./commercials/es-ES/retail/calvillo-y-perea/16736029015830/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Vald S S L ",
      "url": "./commercials/es-ES/museums-and-institutions/vald-s-s-l/16736029492680/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Jurado S A ",
      "url": "./commercials/es-ES/architecture-planning/jurado-s-a/16736031087360/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Trevi O Y Leiva",
      "url": "./commercials/es-ES/hospitality/trevi-o-y-leiva/16736027826090/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Carrion Carbajal E Hijos",
      "url": "./commercials/es-ES/research/carrion-carbajal-e-hijos/16736030766630/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Casares Hermanos",
      "url": "./commercials/es-ES/government-relations/casares-hermanos/16736026868370/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Lugo E Hijos",
      "url": "./commercials/es-ES/public-safety/lugo-e-hijos/16736028849410/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Molina Leyva Y Caballero Asociados",
      "url": "./commercials/es-ES/law-practice/molina-leyva-y-caballero-asociados/16736025396320/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Quesada Hermanos",
      "url": "./commercials/es-ES/military/quesada-hermanos/16736030490120/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "C Rdova Segura S A ",
      "url": "./commercials/es-ES/legislative-office/c-rdova-segura-s-a/16736032480510/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Arreola Velasco Y Delatorre Asociados",
      "url": "./commercials/es-ES/consumer-electronics/arreola-velasco-y-delatorre-asociados/16736023911870/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Olvera E Hijos",
      "url": "./commercials/es-ES/hospitality/olvera-e-hijos/16736022448480/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Vargas Y Res Ndez",
      "url": "./commercials/es-ES/venture-capital-private-equity/vargas-y-res-ndez/16736029260510/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Santacruz E Hijos",
      "url": "./commercials/es-ES/biotechnology/santacruz-e-hijos/16736021987900/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Cort S Y Pizarro",
      "url": "./commercials/es-ES/sports/cort-s-y-pizarro/16736029782520/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "N Jera Y Palomo",
      "url": "./commercials/es-ES/tobacco/n-jera-y-palomo/16736026372530/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Mena Hernandes Hermanos",
      "url": "./commercials/es-ES/transportationg-trucking-railroad/mena-hernandes-hermanos/16736034727170/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Pulido Y Fierro",
      "url": "./commercials/es-ES/logistics-and-supply-chain/pulido-y-fierro/16736022843000/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Carre N Y Mascare As",
      "url": "./commercials/es-ES/industrial-automation/carre-n-y-mascare-as/16736030885070/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Mej A S A ",
      "url": "./commercials/es-ES/defense-space/mej-a-s-a/16736024029250/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Sosa Gollum Y Rocha Asociados",
      "url": "./commercials/es-ES/fishery/sosa-gollum-y-rocha-asociados/16736029830720/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Armend Riz Gamboa Y Galv N Asociados",
      "url": "./commercials/es-ES/alternative-medicine/armend-riz-gamboa-y-galv-n-asociados/16736023174700/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Castro Villareal E Hijos",
      "url": "./commercials/es-ES/international-trade-and-development/castro-villareal-e-hijos/16736027774730/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "V Squez S A ",
      "url": "./commercials/es-ES/textiles/v-squez-s-a/16736024694160/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Pe A Delatorre Y Nieto Asociados",
      "url": "./commercials/es-ES/railroad-manufacture/pe-a-delatorre-y-nieto-asociados/16736025670890/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Cervantes E Hijos",
      "url": "./commercials/es-ES/plastics/cervantes-e-hijos/16736030977810/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Serrano Y Angulo",
      "url": "./commercials/es-ES/civil-engineering/serrano-y-angulo/16736025326610/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Carranza E Hijos",
      "url": "./commercials/es-ES/luxury-goods-jewelry/carranza-e-hijos/16736033376720/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Verduzco Fern Ndez Y Armas Asociados",
      "url": "./commercials/es-ES/textiles/verduzco-fern-ndez-y-armas-asociados/16736034440360/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Mireles S L ",
      "url": "./commercials/es-ES/mechanical-or-industrial-engineering/mireles-s-l/16736032420640/commercial.mp3",
      "artist": "Mechanical Or Industrial Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Marroqu N Mat As E Hijos",
      "url": "./commercials/es-ES/primary-secondary-education/marroqu-n-mat-as-e-hijos/16736031490310/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Tello Hermanos",
      "url": "./commercials/es-ES/political-organization/tello-hermanos/16736030069860/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Curiel Arroyo Y Trevi O Asociados",
      "url": "./commercials/es-ES/outsourcing-offshoring/curiel-arroyo-y-trevi-o-asociados/16736025741440/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Heredia Cardona E Hijos",
      "url": "./commercials/es-ES/capital-markets/heredia-cardona-e-hijos/16736024588020/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Barrera Tamayo E Hijos",
      "url": "./commercials/es-ES/food-beverages/barrera-tamayo-e-hijos/16736034991530/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Aranda Arriaga Hermanos",
      "url": "./commercials/es-ES/fishery/aranda-arriaga-hermanos/16736026423340/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Alonso Salazar E Hijos",
      "url": "./commercials/es-ES/airlines-aviation/alonso-salazar-e-hijos/16736034854810/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Rosales Y Esquivel",
      "url": "./commercials/es-ES/architecture-planning/rosales-y-esquivel/16736029601420/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Montoya Y Muro",
      "url": "./commercials/es-ES/textiles/montoya-y-muro/16736030443620/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Le N S L ",
      "url": "./commercials/es-ES/professional-training-coaching/le-n-s-l/16736021937720/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Romo S L ",
      "url": "./commercials/es-ES/renewables-environment/romo-s-l/16736023442800/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Valdez Leal E Hijos",
      "url": "./commercials/es-ES/broadcast-media/valdez-leal-e-hijos/16736032199110/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Maya Duarte E Hijos",
      "url": "./commercials/es-ES/consumer-electronics/maya-duarte-e-hijos/16736027434370/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Carrion Corrales Y Arevalo Asociados",
      "url": "./commercials/es-ES/food-beverages/carrion-corrales-y-arevalo-asociados/16736034801670/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Palomino Delgado E Hijos",
      "url": "./commercials/es-ES/executive-office/palomino-delgado-e-hijos/16736028011010/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Ram Rez Y Rol N",
      "url": "./commercials/es-ES/military/ram-rez-y-rol-n/16736031929650/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Espinoza Hermanos",
      "url": "./commercials/es-ES/supermarkets/espinoza-hermanos/16736029890150/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Oquendo Soto Y Tafoya Asociados",
      "url": "./commercials/es-ES/electrical-electronic-manufacturing/oquendo-soto-y-tafoya-asociados/16736031548340/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "J Quez Vargas Hermanos",
      "url": "./commercials/es-ES/writing-and-editing/j-quez-vargas-hermanos/16736028683070/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Cruz Guti Rrez Y Rivero Asociados",
      "url": "./commercials/es-ES/luxury-goods-jewelry/cruz-guti-rrez-y-rivero-asociados/16736027000090/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Rold N Y Morales",
      "url": "./commercials/es-ES/biotechnology/rold-n-y-morales/16736030300920/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Figueroa Murillo E Hijos",
      "url": "./commercials/es-ES/legal-services/figueroa-murillo-e-hijos/16736034065990/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Noriega Hermanos",
      "url": "./commercials/es-ES/logistics-and-supply-chain/noriega-hermanos/16736030165840/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Granado Y Terrazas",
      "url": "./commercials/es-ES/machinery/granado-y-terrazas/16736022168790/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Cornejo E Hijos",
      "url": "./commercials/es-ES/textiles/cornejo-e-hijos/16736032259790/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": " Guilar Y Arreola",
      "url": "./commercials/es-ES/environmental-services/guilar-y-arreola/16736030647400/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Toro Hermanos",
      "url": "./commercials/es-ES/marketing-and-advertising/toro-hermanos/16736027609150/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Trejo Y Galarza",
      "url": "./commercials/es-ES/outsourcing-offshoring/trejo-y-galarza/16736033176360/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Zamora Naranjo Hermanos",
      "url": "./commercials/es-ES/paper-forest-products/zamora-naranjo-hermanos/16736025903050/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Quiroz S A ",
      "url": "./commercials/es-ES/biotechnology/quiroz-s-a/16736022959920/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Espino Granado S L ",
      "url": "./commercials/es-ES/banking/espino-granado-s-l/16736023328450/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Tello Y De Roma A",
      "url": "./commercials/es-ES/mechanical-or-industrial-engineering/tello-y-de-roma-a/16736022264910/commercial.mp3",
      "artist": "Mechanical Or Industrial Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Burgos Mu Oz Hermanos",
      "url": "./commercials/es-ES/judiciary/burgos-mu-oz-hermanos/16736025989530/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Ortega Hermanos",
      "url": "./commercials/es-ES/food-production/ortega-hermanos/16736031027250/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Aranda Curiel Hermanos",
      "url": "./commercials/es-ES/museums-and-institutions/aranda-curiel-hermanos/16736033049900/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Ni O Y Alanis",
      "url": "./commercials/es-ES/sports/ni-o-y-alanis/16736033525360/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Ni O Y Mungu A",
      "url": "./commercials/es-ES/health-wellness-and-fitness/ni-o-y-mungu-a/16736033446250/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Pulido Hermanos",
      "url": "./commercials/es-ES/events-services/pulido-hermanos/16736027343140/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Carbajal Nieves S A ",
      "url": "./commercials/es-ES/banking/carbajal-nieves-s-a/16736026498180/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Fajardo Valladares Y Vald S Asociados",
      "url": "./commercials/es-ES/recreational-facilities-and-services/fajardo-valladares-y-vald-s-asociados/16736021627500/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Pelayo Becerra Y Gamboa Asociados",
      "url": "./commercials/es-ES/food-production/pelayo-becerra-y-gamboa-asociados/16736033910240/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Ornelas Gast Lum Hermanos",
      "url": "./commercials/es-ES/biotechnology/ornelas-gast-lum-hermanos/16736027936300/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Guzm N Porras Y Barreto Asociados",
      "url": "./commercials/es-ES/professional-training-coaching/guzm-n-porras-y-barreto-asociados/16736032130790/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Feliciano S L ",
      "url": "./commercials/es-ES/media-production/feliciano-s-l/16736032015520/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Arevalo Y Aguilera",
      "url": "./commercials/es-ES/dairy/arevalo-y-aguilera/16736028580750/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Almanza Peres S L ",
      "url": "./commercials/es-ES/shipbuilding/almanza-peres-s-l/16736028156700/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Delarosa Y Nev Rez",
      "url": "./commercials/es-ES/food-beverages/delarosa-y-nev-rez/16736030247260/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "G Mez Valdivia S A ",
      "url": "./commercials/es-ES/transportationg-trucking-railroad/g-mez-valdivia-s-a/16736032535360/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Barrientos Y Molina",
      "url": "./commercials/es-ES/professional-training-coaching/barrientos-y-molina/16736029945830/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Serrato Pizarro Y Barajas Asociados",
      "url": "./commercials/es-ES/apparel-fashion/serrato-pizarro-y-barajas-asociados/16736033634580/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Villalobos Y De Roma A",
      "url": "./commercials/es-ES/government-administration/villalobos-y-de-roma-a/16736026560100/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Carvajal Miranda S A ",
      "url": "./commercials/es-ES/food-beverages/carvajal-miranda-s-a/16736024341390/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Matos Y Quezada",
      "url": "./commercials/es-ES/facilities-services/matos-y-quezada/16736028238240/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Cardona Cas Rez Y Roybal Asociados",
      "url": "./commercials/es-ES/animation/cardona-cas-rez-y-roybal-asociados/16736034234100/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Hurtado Ruiz Y Uribe Asociados",
      "url": "./commercials/es-ES/architecture-planning/hurtado-ruiz-y-uribe-asociados/16736025040290/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Blanco Madera Y Solano Asociados",
      "url": "./commercials/es-ES/semiconductors/blanco-madera-y-solano-asociados/16736032811930/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Blanco Valdez Y Madera Asociados",
      "url": "./commercials/es-ES/warehousing/blanco-valdez-y-madera-asociados/16736031698190/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Mondrag N S L ",
      "url": "./commercials/es-ES/civic-social-organization/mondrag-n-s-l/16736032665580/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Blanco S L ",
      "url": "./commercials/es-ES/online-media/blanco-s-l/16736035192690/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Duran Y Sanabria",
      "url": "./commercials/es-ES/glass-ceramics-concrete/duran-y-sanabria/16736024751150/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Valadez S L ",
      "url": "./commercials/es-ES/libraries/valadez-s-l/16736033851680/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Hinojosa Y Peres",
      "url": "./commercials/es-ES/electrical-electronic-manufacturing/hinojosa-y-peres/16736028333590/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Muro Soliz S A ",
      "url": "./commercials/es-ES/arts-and-crafts/muro-soliz-s-a/16736025828490/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Salcedo Maldonado Y Montes Asociados",
      "url": "./commercials/es-ES/gambling-casinos/salcedo-maldonado-y-montes-asociados/16736023511070/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Cano Romero Y Armend Riz Asociados",
      "url": "./commercials/es-ES/outsourcing-offshoring/cano-romero-y-armend-riz-asociados/16736027284150/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Saiz Almonte S L ",
      "url": "./commercials/es-ES/accounting/saiz-almonte-s-l/16736024258230/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Chapa Y Meza",
      "url": "./commercials/es-ES/automotive/chapa-y-meza/16736028732900/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Corral Olivares E Hijos",
      "url": "./commercials/es-ES/fine-art/corral-olivares-e-hijos/16736026753160/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Alcala Y Sisneros",
      "url": "./commercials/es-ES/gambling-casinos/alcala-y-sisneros/16736027054220/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Soto Arriaga Y Verdugo Asociados",
      "url": "./commercials/es-ES/farming/soto-arriaga-y-verdugo-asociados/16736031750650/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Dom Nquez Cuellar E Hijos",
      "url": "./commercials/es-ES/alternative-medicine/dom-nquez-cuellar-e-hijos/16736024995310/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Tamez Castro Y Res Ndez Asociados",
      "url": "./commercials/es-ES/environmental-services/tamez-castro-y-res-ndez-asociados/16736024407640/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Palomo S L ",
      "url": "./commercials/es-ES/luxury-goods-jewelry/palomo-s-l/16736026261190/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Tovar B Tancourt E Hijos",
      "url": "./commercials/es-ES/warehousing/tovar-b-tancourt-e-hijos/16736032594740/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Corrales Y Mayorga",
      "url": "./commercials/es-ES/performing-arts/corrales-y-mayorga/16736028532630/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Heredia Garica Y Gil Asociados",
      "url": "./commercials/es-ES/online-media/heredia-garica-y-gil-asociados/16736030397150/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Casta Eda S A ",
      "url": "./commercials/es-ES/performing-arts/casta-eda-s-a/16736033788720/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Torres S L ",
      "url": "./commercials/es-ES/machinery/torres-s-l/16736026030610/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Arag N M Ndez Y Polanco Asociados",
      "url": "./commercials/es-ES/consumer-electronics/arag-n-m-ndez-y-polanco-asociados/16736035071650/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Henr Quez Huerta S L ",
      "url": "./commercials/es-ES/supermarkets/henr-quez-huerta-s-l/16736021876180/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Rodr Quez Tapia Y Sedillo Asociados",
      "url": "./commercials/es-ES/computer-software/rodr-quez-tapia-y-sedillo-asociados/16736022905500/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Padilla Barreto Hermanos",
      "url": "./commercials/es-ES/glass-ceramics-concrete/padilla-barreto-hermanos/16736032066520/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Cort S S L ",
      "url": "./commercials/es-ES/glass-ceramics-concrete/cort-s-s-l/16736024810940/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Cas Rez Loya Hermanos",
      "url": "./commercials/es-ES/tobacco/cas-rez-loya-hermanos/16736024521440/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Grijalva Haro Y Laboy Asociados",
      "url": "./commercials/es-ES/investment-management/grijalva-haro-y-laboy-asociados/16736032938940/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Rivero Hermanos",
      "url": "./commercials/es-ES/events-services/rivero-hermanos/16736027229740/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Roybal Y Mel Ndez",
      "url": "./commercials/es-ES/entertainment/roybal-y-mel-ndez/16736029550750/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Carvajal Y Guilar",
      "url": "./commercials/es-ES/computer-networking/carvajal-y-guilar/16736034331870/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Santill N Monta Ez E Hijos",
      "url": "./commercials/es-ES/animation/santill-n-monta-ez-e-hijos/16736023671730/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Romero E Hijos",
      "url": "./commercials/es-ES/civil-engineering/romero-e-hijos/16736023611090/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Valadez Delapaz Y Cadena Asociados",
      "url": "./commercials/es-ES/nanotechnology/valadez-delapaz-y-cadena-asociados/16736024125490/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Peralta Fierro Y Salinas Asociados",
      "url": "./commercials/es-ES/executive-office/peralta-fierro-y-salinas-asociados/16736025098140/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Padilla Leal S A ",
      "url": "./commercials/es-ES/animation/padilla-leal-s-a/16736034123250/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Berr Os Armas S L ",
      "url": "./commercials/es-ES/government-relations/berr-os-armas-s-l/16736031363780/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Delvalle Serna Y Valladares Asociados",
      "url": "./commercials/es-ES/e-learning/delvalle-serna-y-valladares-asociados/16736025160370/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Lugo Y Fern Ndez",
      "url": "./commercials/es-ES/nonprofit-organization-management/lugo-y-fern-ndez/16736034538770/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Gonzales Herrera Hermanos",
      "url": "./commercials/es-ES/animation/gonzales-herrera-hermanos/16736026210440/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Mart Nez Y Valverde",
      "url": "./commercials/es-ES/fishery/mart-nez-y-valverde/16736022504980/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Trevi O Moreno Y Collado Asociados",
      "url": "./commercials/es-ES/publishing/trevi-o-moreno-y-collado-asociados/16736033971200/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Carrasquillo Jaramillo Y Lovato Asociados",
      "url": "./commercials/es-ES/environmental-services/carrasquillo-jaramillo-y-lovato-asociados/16736029138660/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Zamora Rocha Y Ibarra Asociados",
      "url": "./commercials/es-ES/wireless/zamora-rocha-y-ibarra-asociados/16736030006000/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Barraza E Hijos",
      "url": "./commercials/es-ES/mental-health-care/barraza-e-hijos/16736030551070/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Ramos S A ",
      "url": "./commercials/es-ES/primary-secondary-education/ramos-s-a/16736022745700/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Malave Hermanos",
      "url": "./commercials/es-ES/business-supplies-and-equipment/malave-hermanos/16736027888020/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Vald S Sarabia S A ",
      "url": "./commercials/es-ES/capital-markets/vald-s-sarabia-s-a/16736029070710/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

