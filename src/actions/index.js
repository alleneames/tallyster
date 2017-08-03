import axios from "axios";

export function loadData() {
    return (dispatch)=> {
        return axios.get("http://localhost:8080/tallyster").then((response)=> {
            dispatch(setData(response.data.data))
        }).catch((error)=> {
            throw error;
        })
    }
}

export function addData(data) {
    return (dispatch)=> {
        return axios.post("http://localhost:8080/tallyster", data).then((response)=> {
            dispatch(loadData())
        }).catch((error)=> {
            throw error;
        })
    }
}

export function deleteData(id) {
    return (dispatch)=> {
        return axios.delete(`http://localhost:8080/tallyster/${id}`).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function voteUp(id) {
    return(dispatch)=> {
        return axios.put(`http://localhost:8080/tallyster/upvote/${id}`).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function voteDown(id) {
    return(dispatch)=> {
        return axios.put(`http://localhost:8080/tallyster/downvote/${id}`).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function changeData(id, data) {
    return (dispatch)=> {
        return axios.put(`http://localhost:8080/tallyster/${id}`, data).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function comment(id, comment) {
    return (dispatch)=> {
        return axios.put(`http://localhost:8080/tallyster/comment/${id}`, {
            comment
        }).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}



export function setData(politicians) {
    return {
        type: "SET_DATA",
        politicians
    }
}