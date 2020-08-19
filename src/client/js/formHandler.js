import { validateURL } from './validateURL';

function handleSubmit(event) {
    event.preventDefault();

    // get input from form field
	if(document.getElementById('name').value != '') {
		let formText = document.getElementById('name').value;

		//send input to server for handling and retrieve result
		postData('http://localhost:8081/addSentimentAnalysis', {
			input: formText
		})
		.then (function (res) {
			console.log(res);
			document.getElementById('score').innerHTML = 'Polarity:' + res.score_tag;
			document.getElementById('agreement').innerHTMl = 'Sentiments:' + res.agreement;
			document.getElementById('subjectivity').innerHTML = 'Subjectivity:' + res.subjectivity;
			document.getElementById('confidence').innerHTML = 'Confidence:' + res.confidence + '%';
			document.getElementById('irony').innerHTML = 'Irony:' + res.irony;

			document.getElementById('results').style.display = 'inherit';
			document.getElementById('results_error').style.display = 'none';
		}) .catch((error) => {
			console.log('This is an error', error);
		});
		} else { 
		document.getElementById('name').placeholder = 'Please enter text and submit again.';
	}
}

const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('This is an error', error);
    }
};

export { handleSubmit, postData };