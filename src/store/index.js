import Vue from 'vue';
import Vuex from 'vuex';
import FirstStore from './modules/FirstStore'

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        FirstStore
    }    
});
 
export default store;