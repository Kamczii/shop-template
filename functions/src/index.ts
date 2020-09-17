// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.firestore.document('products/{productID}').onWrite((change, response) => {
//     const productData = change.after.data();
//     if (productData) {
//         const productName = productData.name;
//         const updatedName = productName.toLowerCase();
//         if (productName == updatedName) {
//             return null;
//         } else {
//             return change.after.ref.update({ nameLowerCase: updatedName })
//         }
//     } else
//         return null;
// });
