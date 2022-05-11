import axiosClient from "./axiosClient";

const postsApi = {
    getAll(params) {
        const url = '/posts';
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/posts';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/posts/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/posts/${id}`;
        return axiosClient.delete(url);
    },
}

export default postsApi;