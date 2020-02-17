export default {
    loadPeople(state, data){
        state.people.push(...data.results);
        state.nextLink = data.next;
    },
    personDetails(state, details){
        state.details = details;
    }
}