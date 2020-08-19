import { checkForName } from './js/nameChecker';
import { handleSubmit, postData } from './js/formHandler';
import { validateURL } from './js/validateURL';
import { getMockAPI } from './js/getMockAPI';

import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    postData,
    validateURL,
    getMockAPI
};