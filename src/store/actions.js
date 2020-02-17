import axios from 'axios'

export default {
    getPeople({commit}, url){
        axios.get(url)
            .then(res => {
                // console.log(res.data);
                commit('loadPeople', res.data); 
            });
    },
    getDetails({commit}, url){
        axios.get(url).then(res => {
            console.log(res.data);
            commit('personDetails', res.data);
        })
    }
}