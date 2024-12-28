The Planned UI for the Project 
<br/>
![ss1](https://github.com/user-attachments/assets/a4e7b1d9-5c8f-41fb-91aa-8cc142e0cd86)

The Planned State Management 
![ss2](https://github.com/user-attachments/assets/e6dd633f-c6ef-40f2-af58-7439cf3de6a5)

-> Strategies to use State Variables across different Components: \
How to work with state variables across different components and store them in a single recoil atom: \
Solution 1: Combine the different components a single component ( Boring Solution ) \
Solution 2: Push the setStateVariable() Function Down the DOM Tree ( Prop Drilling ) \
Solution 3: Use Recoil Atoms for Each Component, gather them in the App file, and store them in a single combined atom ( Too many Atoms )(But the solution I used)

-> The final Atom was constructed in the Button.tsx component when clicked on the "Save & Next" or "Submit" Buttons.

The Renders:
-> The User can Select the type of Question which he wants to display:
![ss6](https://github.com/user-attachments/assets/3cf94516-428c-4e5b-828c-ff9ed57b98c1)

1) With the type being Radio
![ss3](https://github.com/user-attachments/assets/e78a1e5f-644a-4025-937f-bfa6c6544ac4)

3) With the type being Text
![ss4](https://github.com/user-attachments/assets/b3b73c12-6511-4e37-9085-08d3c4744fc1)

5) With the type being Checkbox
![ss5](https://github.com/user-attachments/assets/0b09d260-8107-4503-8a97-46b7ddf9a7f8)



The project came to an end after running into this error consistently: 

TypeError: react__WEBPACK_IMPORTED_MODULE_0___default().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED is undefined \
    currentRendererSupportsUseSyncExternalStore index.js:511 \
    useRecoilValueLoadable index.js:5353 \
    useRecoilValue index.js:5372 

The Reason for this error can be found here : https://github.com/facebookexperimental/Recoil/issues/2318 


I will migrate to a new State Management Framework and attempt this project again!


















