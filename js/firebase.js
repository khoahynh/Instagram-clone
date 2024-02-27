const firebaseConfig = {
  apiKey: "AIzaSyCtbmx2W_OitdS6f1PTvjlmVFrreHHpyeU",
  authDomain: "igproject-bf560.firebaseapp.com",
  projectId: "igproject-bf560",
  storageBucket: "igproject-bf560.appspot.com",
  messagingSenderId: "253390215539",
  appId: "1:253390215539:web:f9ffeade3ecf89a9214d06",
  measurementId: "G-QM2CHPV8X8",
};

firebase.initializeApp(firebaseConfig);

async function loginGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const response = await firebase.auth().signInWithPopup(googleProvider);
  console.log(response.user.displayName);
  console.log(response.user.email);

  window.location.href = "/home.html";
}
