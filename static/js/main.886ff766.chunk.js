(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),s=(n(24),n(2)),c=n(3),u=n(5),l=n(4),p=(n(25),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleShowDetails=function(){!1===a.state.showDetails?a.setState({showDetails:!0}):a.setState({showDetails:!1})},a.state={showDetails:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return r.a.createElement("div",{className:"event"},r.a.createElement("p",{className:"date"},n.local_date," - ",n.local_time),r.a.createElement("p",{className:"name"},n.name),n.group&&n.group.name&&r.a.createElement("p",{className:"group-name"},"Group: ",n.group.name),r.a.createElement("p",{className:"going"},n.yes_rsvp_count," people are going"),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"Details"),t&&r.a.createElement("div",{className:"event_details"},r.a.createElement("p",{className:"description"},n.description)))}}]),n}(a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))})))}}]),n}(a.Component),d=n(6),m=n.n(d),f=n(7),v=[{created:1578988881e3,duration:108e5,id:"267900600",name:"M\xfcnchen OutSystems Meetup - Save the date",date_in_series_pattern:!1,status:"upcoming",time:1597248e6,local_date:"2020-08-12",local_time:"18:00",updated:1578988881e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:1,is_online_event:!1,group:{created:1560928375e3,name:"Offizielle OutSystems M\xfcnchen Meetup Gruppe",id:32208133,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-OutSystems-Community",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munchen-OutSystems-Community/events/267900600/",description:"Das Thema wird in K\xfcrze ver\xf6ffentlicht.",visibility:"public",member_pay_fee:!1},{created:1581639725e3,duration:108e5,id:"268694958",name:"Unternehmertreffen & Start up-Event in M\xfcnchen",rsvp_limit:30,date_in_series_pattern:!1,status:"upcoming",time:16018272e5,local_date:"2020-10-04",local_time:"18:00",updated:1581946161e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:26865368,name:"The Flushing Meadows Bar, Frauenhoferstra\xdfe 32, 80469 M\xfcnchen",lat:48.128822326660156,lon:11.574684143066406,repinned:!1,address_1:"Frauenhoferstra\xdfe 32, 80469 M\xfcnchen",city:"M\xfcnchen",country:"DE",localized_country_name:"Germany"},is_online_event:!1,group:{created:1581635431e3,name:"Unternehmertreffen and Start up-Event M\xfcnchen",id:33341612,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Unternehmertreffen-Start-up-Event-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Unternehmertreffen-Start-up-Event-Munchen/events/268694958/",description:"DAS UNTERNEHMERTREFFEN \u201eM\xdcNCHEN\u201c STARTUP EVENT INVESTOREN / BUSINESS-ANGEL**mehr Details in der Beschreibung. Das Unternehmertreffen Munich-Milan ist das Forum f\xfcr Gesch\xe4ftsfreunde in ganz Deutschland. Wir h\xf6ren gemeinsam spannende Vortr\xe4ge, veranstalten Aktionen, haben Zeit f\xfcr informelle Gespr\xe4che und bahnen Gesch\xe4fte an. Wir sind \xfcberparteilich und unabh\xe4ngig. Und vor allem: Wir haben viel Spa\xdf am Netzwerken! Zahlreiche UNTERNEHMER und STARTUP UNTERNEHMEN aus dem Raum M\xfcnchen nehmen teil und freuen sich \xfcber Jeden, der unser Netzwerk weiter verst\xe4rkt. AUCH STUDENTEN MIT GUTEN IDEEN SIND HERZLICH WILLKOMMEN. Informationen und Tickets finden sich unter: https://www.munich-milan.de/cms/de/unternehmertreffen-muenchen-3.",visibility:"public",member_pay_fee:!1},{created:1585297132e3,duration:72e5,id:"269686692",name:"Pitch Club Developer Edition #63",date_in_series_pattern:!1,status:"upcoming",time:16026984e5,local_date:"2020-10-14",local_time:"20:00",updated:1585297132e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:2,venue:{id:25959917,name:"Bar Ludwig II",lat:48.12186813354492,lon:11.58230972290039,repinned:!1,address_1:"Hochstra\xdfe 77",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1539021073e3,name:"Pitch Club Developer Edition M\xfcnchen",id:30141555,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Pitch-Club-Developer-Edition-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Pitch-Club-Developer-Edition-Munchen/events/269686692/",description:"Pitch Club is looking for Software Developers and IT-Professionals for its upcoming event Pitch Club Developer Edition #63 on October 14th, 2020 starting at 5 p.m. at Bar Ludwig II (Hochstra\xdfe 77, 81541 Munich) in Munich. So this is like a job interview - but reversed! Companies and startups pitch themselves, the HR concepts, jobs and projects they offer to the audience, i.e. the Software Developers and IT-Professionals, who ask tough and hair-raising questions in addition. After the pitches you can get more information in 1-on-1 talks with the companies. All participants are invited to snacks, drinks and maybe you get to know your future employer. After the official part ends at 8 p.m., the event shifts over to the Afterwork Party, accessible for everyone. The participation for the official part as well as catering (including snacks, soft drinks, beverages &amp; long drinks) are for free! If you want to participate at the invite-only event, starting at 5 p.m., please apply via https://pcde.io/en/. Please note: Most pitches will be held in German. Nonetheless, English-speaking developers are welcomed, too! If you are interested in taking part at the Afterwork Party, starting at 8 p.m., please register via https://pcde.io/en/pcde-afterwork/",visibility:"public",member_pay_fee:!1},{created:1594142093e3,duration:72e5,id:"271775637",name:"Beer, Brotzeit and IoT @ Concept Reply",date_in_series_pattern:!1,status:"upcoming",time:1603386e6,local_date:"2020-10-22",local_time:"19:00",updated:1594142093e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:30,venue:{id:26066109,name:"Luise-Ullrich-Stra\xdfe 14",lat:48.14474868774414,lon:11.538175582885742,repinned:!0,address_1:"Luise-Ullrich-Stra\xdfe 14",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1508251656e3,name:"M\xfcnchen IoT Meetup",id:26294946,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Muenchen-IoT-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Muenchen-IoT-Meetup/events/271775637/",description:"We will also broadcast the event live for people who would rather stay at home. We will post the link closer to the event. How to find the new venue: Enter the Nove Building from Luise-Ullrich-Stra\xdfe 14 (you should see a statue and a restaurant outside). On entering you will see the main reception in front of you with a security guard, two lifts to the left and a model of the building to the right. Walk toward the reception, take the first left and walk toward the other two lifts in front of you. The first door on the left with the Reply logo leads to the Meetup on the *ground floor*. Agenda: 18:30: Brotzeit 19:00: Markus Jung (OSRAM) - The OSRAM portfolio of IoT connected products 19:30: Christopher Ziegler (Actyx.io) - The modern way of automating and digitizing factories 20:00: Networking. Food and drink served throughout. All presentations in English.",how_to_find_us:"Public transport: Donnersbergerstra\xdfe | 250m (Tram 16, 17) Donnersbergerbr\xfccke | 450m (Suburban train towards Pasing, Bus 53 & 63) Address: Concept Reply (part of REPLY AG) Nove building Luise-Ullrich-Stra\xdfe 14 80636 M\xfcnchen*Reply B\xfcro beim EG*",visibility:"public",member_pay_fee:!1}],g=n(8),_=n.n(g);function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://0p4rf1s1zd.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://0p4rf1s1zd.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,_.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?y("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=pecpj0iiatck4s5pl90ladg8gp&response_type=code&redirect_uri=https://ianfleming464.github.io/meetup_app/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:y("renew",localStorage.getItem("refresh_token"))}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,b();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,_.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(m.a.mark((function e(t,n,a){var r,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",v);case 2:return e.next=4,b();case 4:if(!(r=e.sent)){e.next=13;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),e.next=11,_.a.get(i);case 11:return o=e.sent,e.abrupt("return",o.data.events);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),E(n).then((function(t){return e.setState({suggestions:t})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",placeholder:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={eventNumber:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({eventNumber:n}),e.props.updateEvents(null,null,n)},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("span",null,"Display "),r.a.createElement("input",{className:"number-of-events",type:"number",value:this.state.eventNumber,onChange:this.handleInputChanged}),r.a.createElement("span",null," events"))}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],lat:null,lon:null,page:null},e.updateEvents=function(t,n,a){t&&n?M(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?M(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):M(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,{updateEvents:this.updateEvents}),r.a.createElement(h,{events:this.state.events}),r.a.createElement(O,{updateEvents:this.updateEvents}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.886ff766.chunk.js.map