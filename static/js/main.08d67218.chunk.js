(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),s=(n(26),n(1)),c=n(5),l=n(3),u=n(2),p=(n(27),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowDetails=function(){!1===a.state.showDetails?a.setState({showDetails:!0}):a.setState({showDetails:!1})},a.state={showDetails:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return r.a.createElement("div",{className:"event"},r.a.createElement("p",{className:"date"},n.local_date," - ",n.local_time),r.a.createElement("p",{className:"name"},n.name),n.group&&n.group.name&&r.a.createElement("p",{className:"group-name"},"Group: ",n.group.name),r.a.createElement("p",{className:"going"},n.yes_rsvp_count," people are going"),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"Details"),t&&r.a.createElement("div",{className:"extra"},r.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:n.description}})))}}]),n}(a.Component)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){this.props.events;return r.a.createElement("div",{className:"EventListContainer"},0!==this.props.events.length?r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))}))):null)}}]),n}(a.Component),d=n(6),m=n.n(d),f=n(7),v=[{created:1578988881e3,duration:108e5,id:"267900600",name:"M\xfcnchen OutSystems Meetup - Save the date",date_in_series_pattern:!1,status:"upcoming",time:1597248e6,local_date:"2020-08-12",local_time:"18:00",updated:1578988881e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,is_online_event:!1,group:{created:1560928375e3,name:"Offizielle OutSystems M\xfcnchen Meetup Gruppe",id:32208133,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-OutSystems-Community",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-OutSystems-Community/events/267900600/",description:"Das Thema wird in K\xfcrze ver\xf6ffentlicht.",visibility:"public",member_pay_fee:!1},{created:1581639725e3,duration:108e5,id:"268694958",name:"Unternehmertreffen & Start up-Event in M\xfcnchen",rsvp_limit:30,date_in_series_pattern:!1,status:"upcoming",time:16018272e5,local_date:"2020-10-04",local_time:"18:00",updated:1581946161e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26865368,name:"The Flushing Meadows Bar, Frauenhoferstra\xdfe 32, 80469 M\xfcnchen",lat:48.128822326660156,lon:11.574684143066406,repinned:!1,address_1:"Frauenhoferstra\xdfe 32, 80469 M\xfcnchen",city:"M\xfcnchen",country:"DE",localized_country_name:"Germany"},is_online_event:!1,group:{created:1581635431e3,name:"Unternehmertreffen and Start up-Event M\xfcnchen",id:33341612,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Unternehmertreffen-Start-up-Event-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Unternehmertreffen-Start-up-Event-Munchen/events/268694958/",description:"DAS UNTERNEHMERTREFFEN \u201eM\xdcNCHEN\u201c STARTUP EVENT INVESTOREN / BUSINESS-ANGEL**mehr Details in der Beschreibung. Das Unternehmertreffen Munich-Milan ist das Forum f\xfcr Gesch\xe4ftsfreunde in ganz Deutschland. Wir h\xf6ren gemeinsam spannende Vortr\xe4ge, veranstalten Aktionen, haben Zeit f\xfcr informelle Gespr\xe4che und bahnen Gesch\xe4fte an. Wir sind \xfcberparteilich und unabh\xe4ngig. Und vor allem: Wir haben viel Spa\xdf am Netzwerken! Zahlreiche UNTERNEHMER und STARTUP UNTERNEHMEN aus dem Raum M\xfcnchen nehmen teil und freuen sich \xfcber Jeden, der unser Netzwerk weiter verst\xe4rkt. AUCH STUDENTEN MIT GUTEN IDEEN SIND HERZLICH WILLKOMMEN. Informationen und Tickets finden sich unter: https://www.munich-milan.de/cms/de/unternehmertreffen-muenchen-3.",visibility:"public",member_pay_fee:!1},{created:1585297132e3,duration:72e5,id:"269686692",name:"Pitch Club Developer Edition #63",date_in_series_pattern:!1,status:"upcoming",time:16026984e5,local_date:"2020-10-14",local_time:"20:00",updated:1585297132e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,venue:{id:25959917,name:"Bar Ludwig II",lat:48.12186813354492,lon:11.58230972290039,repinned:!1,address_1:"Hochstra\xdfe 77",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1539021073e3,name:"Pitch Club Developer Edition M\xfcnchen",id:30141555,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Pitch-Club-Developer-Edition-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Pitch-Club-Developer-Edition-Munchen/events/269686692/",description:"Pitch Club is looking for Software Developers and IT-Professionals for its upcoming event Pitch Club Developer Edition #63 on October 14th, 2020 starting at 5 p.m. at Bar Ludwig II (Hochstra\xdfe 77, 81541 Munich) in Munich. So this is like a job interview - but reversed! Companies and startups pitch themselves, the HR concepts, jobs and projects they offer to the audience, i.e. the Software Developers and IT-Professionals, who ask tough and hair-raising questions in addition. After the pitches you can get more information in 1-on-1 talks with the companies. All participants are invited to snacks, drinks and maybe you get to know your future employer. After the official part ends at 8 p.m., the event shifts over to the Afterwork Party, accessible for everyone. The participation for the official part as well as catering (including snacks, soft drinks, beverages &amp; long drinks) are for free! If you want to participate at the invite-only event, starting at 5 p.m., please apply via https://pcde.io/en/. Please note: Most pitches will be held in German. Nonetheless, English-speaking developers are welcomed, too! If you are interested in taking part at the Afterwork Party, starting at 8 p.m., please register via https://pcde.io/en/pcde-afterwork/",visibility:"public",member_pay_fee:!1},{created:1594142093e3,duration:72e5,id:"271775637",name:"Beer, Brotzeit and IoT @ Concept Reply",date_in_series_pattern:!1,status:"upcoming",time:1603386e6,local_date:"2020-10-22",local_time:"19:00",updated:1594142093e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:30,venue:{id:26066109,name:"Luise-Ullrich-Stra\xdfe 14",lat:48.14474868774414,lon:11.538175582885742,repinned:!0,address_1:"Luise-Ullrich-Stra\xdfe 14",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1508251656e3,name:"M\xfcnchen IoT Meetup",id:26294946,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Muenchen-IoT-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Muenchen-IoT-Meetup/events/271775637/",description:"We will also broadcast the event live for people who would rather stay at home. We will post the link closer to the event. How to find the new venue: Enter the Nove Building from Luise-Ullrich-Stra\xdfe 14 (you should see a statue and a restaurant outside). On entering you will see the main reception in front of you with a security guard, two lifts to the left and a model of the building to the right. Walk toward the reception, take the first left and walk toward the other two lifts in front of you. The first door on the left with the Reply logo leads to the Meetup on the *ground floor*. Agenda: 18:30: Brotzeit 19:00: Markus Jung (OSRAM) - The OSRAM portfolio of IoT connected products 19:30: Christopher Ziegler (Actyx.io) - The modern way of automating and digitizing factories 20:00: Networking. Food and drink served throughout. All presentations in English.",how_to_find_us:"Public transport: Donnersbergerstra\xdfe | 250m (Tram 16, 17) Donnersbergerbr\xfccke | 450m (Suburban train towards Pasing, Bus 53 & 63) Address: Concept Reply (part of REPLY AG) Nove building Luise-Ullrich-Stra\xdfe 14 80636 M\xfcnchen*Reply B\xfcro beim EG*",visibility:"public",member_pay_fee:!1}],g=n(8),b=n.n(g);function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://0p4rf1s1zd.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://0p4rf1s1zd.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,b.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(m.a.mark((function e(){var t,n,a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=pecpj0iiatck4s5pl90ladg8gp&response_type=code&redirect_uri=https://ianfleming464.github.io/meetup_app/",e.abrupt("return",null);case 7:return e.abrupt("return",y("get",a));case 8:if(r=localStorage.getItem("last_saved_time"),!(t&&Date.now()-r<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return o=localStorage.getItem("refresh_token"),e.abrupt("return",y("renew",o));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,_();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(m.a.mark((function e(t,n,a){var r,o,i,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",v);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,_();case 7:if(!(o=e.sent)){e.next=18;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+o,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),e.next=14,b.a.get(i);case 14:return s=e.sent,(c=s.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(c)),e.abrupt("return",c);case 18:return e.abrupt("return",[]);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic"}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(O),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(O),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="black",a}return n}(O),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),k(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"We cannot find the city you are searching for. Please try again!"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",placeholder:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("div",{className:"alerts"},r.a.createElement(j,{text:this.state.infoText})," "),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventNumber:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({eventNumber:n}),n<=0?(e.setState({errorText:"Number should be at least 1!"}),alert("Look!")):(e.setState({errorText:""}),e.props.updateEvents(null,null,n))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("span",null,"Events: "),r.a.createElement("input",{className:"number-of-events",type:"number",value:this.state.eventNumber,onChange:this.handleInputChanged}),r.a.createElement("div",{className:"alerts"},r.a.createElement(T,{text:this.state.errorText})))}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],lat:null,lon:null,page:null,offlineText:""},e.updateEvents=function(t,n,a){navigator.onLine?e.setState({offlineText:""}):e.setState({offlineText:"Currently offline. Events loaded from last search."}),t&&n?M(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?M(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):M(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,{updateEvents:this.updateEvents}),r.a.createElement(I,{updateEvents:this.updateEvents}),r.a.createElement("div",{className:"alerts"},r.a.createElement(x,{text:this.state.offlineText})),r.a.createElement(h,{events:this.state.events}))}}]),n}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(20);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup_app","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}(),z.config("3bc6025c5f6143b397f066be2e9ee98d").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.08d67218.chunk.js.map