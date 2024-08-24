// import { observable, action, makeObservable } from "mobx";
// import FetchBase from "../api/FetchBase";
// import countries from "./cities.json";
// import { getAllBrowserStorage } from "../utils/utility";
// import { setItem } from "../utils/storage";
// class CommonStore extends FetchBase {
//   constructor() {
//     super();
//     makeObservable(this);
//     this.init();
//   }
//   @observable countries = countries;
//   @observable religionLoading = false;
//   @observable religions = [];
//   @observable castes = {};
//   @observable subCastes = {};
//   @observable motherTongue = [];
//   @observable isLoginPlanPopupVisible = false;
//   @observable welcomeNote = "";
//   @observable registrationFormUrl = "";

//   @action.bound
//   async getUserDetailByToken() {
//     try {
//       const response = await this.get("/user/getAfterPaymentDetails");
//       setItem("user", JSON.stringify(response.user));
//     } catch (error) {
//       console.log("error", error);
//     }
//   }

//   @action.bound
//   async getConfig() {
//     try {
//       const { welcomeNote, registrationFormUrl } = await this.get(
//         "/common/searchConfig"
//       );
//       this.welcomeNote = welcomeNote;
//       this.registrationFormUrl = registrationFormUrl;
//     } catch (error) {
//       console.log("error", error);
//     }
//   }

//   @action.bound
//   setLoginPlanPopupVisible(visible) {
//     this.isLoginPlanPopupVisible = visible;
//   }

//   @action.bound
//   getCountryNameById(country_id) {
//     let name = "";
//     const country = this.countries.find(({ id }) => country_id === id);
//     if (country) {
//       name = country.name;
//     }
//     return name;
//   }

//   @action.bound
//   getStateNameById(country_id, state_id) {
//     let name = "";
//     const country = this.countries.find(({ id }) => country_id === id);
//     if (country) {
//       const state = country.states.find(({ id }) => state_id === id);
//       if (state) {
//         name = state.name;
//       }
//     }
//     return name;
//   }

//   @action.bound
//   getCityNameById(country_id, state_id, city_id) {
//     let name = "";
//     const country = this.countries.find(({ id }) => country_id === id);
//     if (country) {
//       const state = country.states.find(({ id }) => state_id === id);
//       if (state) {
//         const city = state.cities.find(({ id }) => city_id === id);
//         if (city) {
//           name = city.name;
//         }
//       }
//     }
//     return name;
//   }

//   @action.bound
//   init() {
//     const { token } = getAllBrowserStorage();
//     this.getReligions();
//     this.getMotherTongue();
//     this.getConfig();
//     if (token) {
//       this.getUserDetailByToken();
//     }
//   }

//   @action.bound
//   async getReligions() {
//     try {
//       this.religionLoading = true;
//       const response = await this.get("/common/get-religions");
//       if (response.items && response.items.length) {
//         this.getCaste({ religion_id: response.items[0].id });
//       }
//       this.religions = response.items;
//       this.religionLoading = false;
//     } catch (error) {
//       this.religionLoading = false;
//       console.error("error", error);
//     }
//   }

//   @action.bound
//   async getCaste(data) {
//     if (!this.castes[data.religion_id]) {
//       try {
//         this.religionLoading = true;
//         const response = await this.get("/common/get-caste", data);
//         if (response.items && response.items.length) {
//           this.getSubCaste({ caste_id: response.items[0].id });
//         }
//         this.castes[data.religion_id] = response.items;
//         this.religionLoading = false;
//       } catch (error) {
//         this.religionLoading = false;
//         console.error("error", error);
//       }
//     }
//   }

//   @action.bound
//   async getSubCaste(data) {
//     if (!this.subCastes[data.caste_id]) {
//       try {
//         this.religionLoading = true;
//         const response = await this.get("/common/get-subcaste", data);
//         this.subCastes[data.caste_id] = response.items;
//         this.religionLoading = false;
//       } catch (error) {
//         this.religionLoading = false;
//         console.error("error", error);
//       }
//     }
//   }

//   @action.bound
//   async getMotherTongue() {
//     try {
//       this.religionLoading = true;
//       const response = await this.get("/common/get-mother-tongue");
//       this.motherTongue = response.items;
//       this.religionLoading = false;
//     } catch (error) {
//       this.religionLoading = false;
//       console.error("error", error);
//     }
//   }
// }

// export default CommonStore;
