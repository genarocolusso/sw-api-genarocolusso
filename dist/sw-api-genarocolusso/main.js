(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social\">\n<p class=\"center\">\n  Made with <i class=\"fab fa-rebel\"></i> by \n  <a href=\" https://github.com/genarocolusso/sw-api-genarocolusso\" target=\"_blank\"> Genaro Colusso </a>\n</p>\n<p class=\"center\"> check my <a href=\"https://codepen.io/genarocolusso/\" target=\"_blank\">codepen</a> </p>\n\n</div>\n\n    <movie></movie>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _container_movies_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/movies/movie.component */ "./src/app/container/movies/movie.component.ts");
/* harmony import */ var _container_people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/people/people.component */ "./src/app/container/people/people.component.ts");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/character.service */ "./src/app/services/character.service.ts");
/* harmony import */ var _services_getmovies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/getmovies.service */ "./src/app/services/getmovies.service.ts");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/planets.service */ "./src/app/services/planets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _container_movies_movie_component__WEBPACK_IMPORTED_MODULE_4__["movieComponent"],
                _container_people_people_component__WEBPACK_IMPORTED_MODULE_5__["peopleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_services_getmovies_service__WEBPACK_IMPORTED_MODULE_7__["getmoviesService"], _services_character_service__WEBPACK_IMPORTED_MODULE_6__["characterService"], _services_planets_service__WEBPACK_IMPORTED_MODULE_8__["planetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/container/movies/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/container/movies/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"midstarwars\"  *ngIf=\"movies.length>1\" >\r\n\r\n        <div class=\"card-sw\" [style.background-image]=\"setbbimg(movies[nextmovie]['episode_id'])\"  >\r\n            <div class=\"card-head\">\r\n                <h3> SWFLIX </h3>\r\n                <div class=\"lateralbutton\">\r\n                    <a href=\"https://www.instagram.com/starwars/\" target=\"_blank\" ><i class=\"fab fa-instagram\"></i></a>\r\n                    <a href=\"https://www.starwars.com/\" target=\"_blank\" ><i class=\"fab fa-jedi-order\"></i> </a>\r\n                    <i class=\"fab fas fa-arrow-alt-circle-right an_arrow\" (click)=\"nextMovie()\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-infos\">\r\n                <div class=\"title\">\r\n                    <h1 > {{movies[nextmovie]['title']}}\r\n                    </h1>\r\n                    <div class=\"score\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"fab fa-jedi-order\"></i>\r\n                    </div>\r\n                    <h3 class=\"realscore\">{{setPersonalScore(movies[nextmovie]['episode_id']) }}<span>/10</span></h3>\r\n                </div>\r\n                </div>\r\n    \r\n                <div class=\"movie-description\">\r\n                    {{movies[nextmovie]['opening_crawl']}}\r\n    \r\n                </div>\r\n                <p>\r\n                    <b> Director:  {{movies[nextmovie]['director']}}</b>\r\n                </p>\r\n                <p>\r\n                    <b> Producer: {{movies[nextmovie]['producer']}}</b>\r\n                </p>\r\n                <p>\r\n                    <b> Release Date: {{movies[nextmovie]['release_date'] | date}}</b>\r\n                </p>\r\n                <people *ngIf=\"movies.length>1\"  [moviePeople]=\"movies[nextmovie]['characters'] \" [movieEdition]=\"nextmovie\" (responsePerson)=\"reciverPerson($event)\"></people>\r\n\r\n                <div class=\"button watch-netflix\">Watch on SWFLIX</div>\r\n            </div>\r\n            <div class=\"bottomshadow\"></div>\r\n        </div> \r\n        <div class=\"personcard\" *ngIf=\"selectedperson\">\r\n             <div class=\"name\"> {{selectedperson.name}} </div>   \r\n            <div class=\"personinfos\">\r\n                <div>\r\n                <p>Hair color: {{selectedperson.hair_color}} </p>\r\n                <p>Skin color: {{selectedperson.skin_color}} </p>\r\n            </div><div>\r\n                <p>Height: {{selectedperson.height}} </p>\r\n                <p>Gender: {{selectedperson.gender}} </p>\r\n                <p>Birth year {{selectedperson.birth_year}} </p>\r\n            </div>\r\n            </div>\r\n            </div>\r\n     \r\n    </section>\r\n\r\n \r\n\r\n  "

/***/ }),

/***/ "./src/app/container/movies/movie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/container/movies/movie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nsection.midstarwars {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n/* card */\n.card-sw {\n  width: 80%;\n  min-width: 830px;\n  max-width: 1100px;\n  height: 625px;\n  position: relative;\n  color: white;\n  background-color: white;\n  box-shadow: 0px 7px 25px 6px rgba(0, 0, 0, 0.2);\n  background-size: cover;\n  border-left: 5px solid #FFC107;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow: hidden; }\n.card-head {\n  display: flex;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  justify-content: space-between;\n  padding: 0px 20px;\n  align-items: center; }\n.lateralbutton a {\n  color: white;\n  margin-right: 10px; }\n.card-infos {\n  width: 90%;\n  position: absolute;\n  padding: 20px 50px;\n  z-index: 2;\n  bottom: 10px; }\n.card-infos h1 {\n  margin-bottom: 15px;\n  margin-top: 5px;\n  font-size: 2.2em; }\n.card-infos p {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  line-height: 1.5; }\n.movie-description {\n  font-size: 14px; }\nimg.movie-img {\n  max-height: 440px;\n  left: -200px;\n  position: absolute;\n  transition: all .5s ease-in-out; }\nimg.movie-img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n.button.watch-netflix {\n  background: red;\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: 800;\n  margin-top: 20px;\n  color: white;\n  cursor: pointer;\n  transition: 0.3s ease-in-out margin-left; }\n.button.watch-netflix:hover {\n    margin-left: 10px; }\n.bottomshadow {\n  background: linear-gradient(0deg, #000, transparent);\n  height: 80%;\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n/* title and score */\n.title {\n  display: flex;\n  align-items: center; }\n.score {\n  display: flex;\n  align-items: center;\n  width: 114px;\n  justify-content: space-evenly; }\n.score .icon {\n  margin-left: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.score .icon i.fab.fa-jedi-order {\n  font-size: 24px;\n  color: #8BC34A;\n  margin-right: 1px; }\n.realscore span {\n  font-size: 12px;\n  position: absolute;\n  top: 4px;\n  color: white;\n  right: -18px; }\nh3.realscore {\n  position: relative;\n  font-size: 32px;\n  margin: 0;\n  color: #8BC34A; }\n* {\n  box-sizing: border-box; }\n.an_arrow {\n  -webkit-animation: animatearrow linear 2s infinite;\n          animation: animatearrow linear 2s infinite; }\n@-webkit-keyframes animatearrow {\n  0% {\n    color: white;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    color: #8BC34A;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes animatearrow {\n  0% {\n    color: white;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    color: #8BC34A;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n/* person card */\n.personcard {\n  background-color: rgba(255, 255, 255, 0.56);\n  padding: 10px;\n  width: 596px;\n  margin-top: 25px;\n  border-radius: 4px;\n  box-shadow: 0px 7px 25px 6px rgba(0, 0, 0, 0.2);\n  color: #444444;\n  /* border-top-left-radius: 0px; */\n  /* border-top-right-radius: 0px; */\n  font-weight: 600;\n  border-left: 6px solid #F44336;\n  transition: all 0.3s ease-in-out; }\n.personcard .name {\n  font-size: 36px;\n  text-align: center; }\n.personinfos {\n  display: flex;\n  justify-content: space-evenly; }\n"

/***/ }),

/***/ "./src/app/container/movies/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/container/movies/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: person, movieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieComponent", function() { return movieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_getmovies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/getmovies.service */ "./src/app/services/getmovies.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());

var movieComponent = /** @class */ (function () {
    function movieComponent(movieS, _sanitizer) {
        this.movieS = movieS;
        this._sanitizer = _sanitizer;
        this.nextmovie = 0;
        this.movies = [];
        this.personalScores = [
            { 'episode_id': 1, 'score': 6, 'bgimg': 'sw1.jpg' },
            { 'episode_id': 2, 'score': 6, 'bgimg': 'sw2.jpg' },
            { 'episode_id': 3, 'score': 8, 'bgimg': 'sw3.jpg' },
            { 'episode_id': 4, 'score': 8, 'bgimg': 'sw4.jpg' },
            { 'episode_id': 5, 'score': 8, 'bgimg': 'sw5.jpg' },
            { 'episode_id': 6, 'score': 10, 'bgimg': 'sw6.jpg' },
            { 'episode_id': 7, 'score': 8, 'bgimg': 'sw7.jpg' }
        ];
    }
    movieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieS.getMovie().subscribe(function (data) {
            _this.movies = data;
        });
    };
    movieComponent.prototype.nextMovie = function () {
        if (this.nextmovie < this.movies.length - 1) {
            this.nextmovie += 1;
        }
        else {
            this.nextmovie = 0;
        }
    };
    movieComponent.prototype.setPersonalScore = function (episode_id) {
        var thisscore = this.personalScores.filter(function (score) { return score.episode_id === episode_id; });
        return thisscore[0]['score'];
    };
    movieComponent.prototype.setbbimg = function (episode_id) {
        var response = this.personalScores.filter(function (score) { return score.episode_id === episode_id; });
        var image = response[0]['bgimg'];
        return this._sanitizer.bypassSecurityTrustStyle("url(assets/" + image + ")");
        //sanitizer to get img url
    };
    movieComponent.prototype.reciverPerson = function (response) {
        console.log(' evento recebido >> ', response);
        this.selectedperson = response;
    };
    movieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/container/movies/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/container/movies/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_getmovies_service__WEBPACK_IMPORTED_MODULE_1__["getmoviesService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], movieComponent);
    return movieComponent;
}());



/***/ }),

/***/ "./src/app/container/people/people.component.html":
/*!********************************************************!*\
  !*** ./src/app/container/people/people.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"people\" *ngIf=\"newpeople.length == (looplength)\">\r\n\r\n\r\n    <div *ngFor=\"let person of newpeople\" (mouseenter)=\"selectPerson(person)\">\r\n        {{person.name}}\r\n\r\n    </div>\r\n    <br>\r\n\r\n</section>\r\n\r\n "

/***/ }),

/***/ "./src/app/container/people/people.component.scss":
/*!********************************************************!*\
  !*** ./src/app/container/people/people.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.people {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap; }\n\n.people > div {\n  background: #F44336;\n  border-radius: 3px;\n  color: white;\n  height: 20px;\n  font-size: 12px;\n  padding: 1px 10px;\n  display: flex;\n  align-items: center;\n  margin-right: 4px;\n  margin-bottom: 8px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/container/people/people.component.ts":
/*!******************************************************!*\
  !*** ./src/app/container/people/people.component.ts ***!
  \******************************************************/
/*! exports provided: person, peopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peopleComponent", function() { return peopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/character.service */ "./src/app/services/character.service.ts");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planets.service */ "./src/app/services/planets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());

var peopleComponent = /** @class */ (function () {
    function peopleComponent(peopleS, planetS) {
        this.peopleS = peopleS;
        this.planetS = planetS;
        this.responsePerson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.people = [];
    }
    peopleComponent.prototype.ngOnChanges = function () {
        this.newpeople = [];
        this.looplength = (this.moviePeople.length > 20 ? this.moviePeople.length / 2 : this.moviePeople.length);
        // I felt like  all characters are way too much to some movies... 
        for (var i = 0; i < this.looplength; i++) {
            this.getPersonName(this.moviePeople[i]);
        }
        // if i wanted them all.
        // let MovieP = this.moviePeople;
        // MovieP.forEach(element => {
        //     this.getPersonName(element)
        // }); 
        this.people = this.newpeople;
    };
    peopleComponent.prototype.getPersonName = function (personUrl) {
        var _this = this;
        this.peopleS.getCharacter(personUrl)
            .subscribe(function (data) {
            _this.newperson =
                {
                    name: data['name'],
                    hair_color: data['hair_color'],
                    skin_color: data['skin_color'],
                    height: data['height'],
                    gender: data['gender'],
                    birth_year: data['birth_year'],
                    homeworld: data['homeworld']
                };
            _this.newpeople.push(_this.newperson);
        });
    };
    peopleComponent.prototype.selectPerson = function (person) {
        this.selectedperson = person;
        this.responsePerson.emit(this.selectedperson);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], peopleComponent.prototype, "moviePeople", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], peopleComponent.prototype, "movieEdition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], peopleComponent.prototype, "responsePerson", void 0);
    peopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/container/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/container/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_character_service__WEBPACK_IMPORTED_MODULE_1__["characterService"], _services_planets_service__WEBPACK_IMPORTED_MODULE_2__["planetService"]])
    ], peopleComponent);
    return peopleComponent;
}());



/***/ }),

/***/ "./src/app/services/character.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/character.service.ts ***!
  \***********************************************/
/*! exports provided: characterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterService", function() { return characterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// operators all come from `rxjs/operators`

var characterService = /** @class */ (function () {
    function characterService(http) {
        this.http = http;
    }
    characterService.prototype.getCharacter = function (apicharacter) {
        return this.http
            .get(apicharacter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = (response.json());
            return data;
        }));
    };
    characterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], characterService);
    return characterService;
}());



/***/ }),

/***/ "./src/app/services/getmovies.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/getmovies.service.ts ***!
  \***********************************************/
/*! exports provided: getmoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmoviesService", function() { return getmoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// operators all come from `rxjs/operators`


var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var getmoviesService = /** @class */ (function () {
    function getmoviesService(http) {
        this.http = http;
    }
    getmoviesService.prototype.getMovie = function () {
        return this.http
            .get(apiUrl + '/films/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            // let data = (response.json().results.filter(data => data.director === "George Lucas"))
            var data = (response.json().results);
            return data;
        }));
    };
    getmoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], getmoviesService);
    return getmoviesService;
}());



/***/ }),

/***/ "./src/app/services/planets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/planets.service.ts ***!
  \*********************************************/
/*! exports provided: planetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planetService", function() { return planetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Idk if I will use it.
var planetService = /** @class */ (function () {
    function planetService(http) {
        this.http = http;
    }
    planetService.prototype.getPlanetName = function (api) {
        return this.http
            .get(api)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = (response.json().name);
            return data;
        }));
    };
    planetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], planetService);
    return planetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://swapi.co/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projeto\illegra\sw-api-genarocolusso\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map