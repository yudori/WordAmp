import { SERVER_URL } from '../../utils/config';
import { checkHttpStatus } from '../../utils';

export function actionSendQuery(queryText) {
    return fetch(SERVER_URL + '/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                query: queryText
            }
        )
    })
    .then(checkHttpStatus)
    .then((response) => {
        
    });
}