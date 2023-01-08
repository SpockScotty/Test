import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.merits.com/v2/request_upload_url',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer $orgAccessToken'
  },
  data: {attachmentType: 'string', contentType: 'string', fileSize: 0}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });