import firebase from 'firebase/compat/app';

const userApi = {
    getMe: () => {
        //call api to get user current user
        return new Promise((resolve, reject) => {

            //wait 500ms ->return result
            setTimeout(() => {
                const currentUser = firebase.auth().currentUser;
                if (currentUser) {
                    resolve({
                        id: currentUser.uid,
                        name: currentUser.displayName,
                        email: currentUser.email,
                        photoUrl: currentUser.photoURL,
                    })
                }
            }, 500)
        })
    }
}
export default userApi;