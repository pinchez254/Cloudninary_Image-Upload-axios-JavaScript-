// import CryptoJS from 'crypto-js'; //import this

function uploadImageAsync(uri) {
  let timestamp = ((Date.now() / 1000) | 0).toString();
  let api_key = 'Your cloudninary api_key';
  let api_secret = 'Your cloudninary';
  let cloud = 'Your cloudninary name';
  let hash_string = 'timestamp=' + timestamp + api_secret;
  let signature = CryptoJS.SHA1(hash_string).toString();
  let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';

  let formdata = new FormData();
  formdata.append('file', { uri: uri, type: 'image/png', name: 'upload.png' });
  formdata.append('timestamp', timestamp);
  formdata.append('api_key', api_key);
  formdata.append('signature', signature);

  axios({
    url: upload_url,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    data: formdata,
  })
    .then(function(res) {
      console.log(res.data);
    })
    .catch(function(err) {
      console.log(err);
    });

  
}
