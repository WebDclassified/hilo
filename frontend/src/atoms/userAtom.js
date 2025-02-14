// import { atom } from "recoil"

// const userAtom = atom({
//     key: 'userAtom', 
//     default: JSON.parse(localStorage.getItem('user-hilos'))
// })

// export default userAtom


import { atom } from "recoil";

const userAtom = atom({
  key: 'userAtom',
  default: JSON.parse(localStorage.getItem('user-hilos')) || null, // Fallback to null if no data is found
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newUser => {
        if (newUser) {
          localStorage.setItem('user-hilos', JSON.stringify(newUser));
        } else {
          localStorage.removeItem('user-hilos'); // Clear localStorage on logout or when user is null
        }
      });
    },
  ],
});

export default userAtom;
