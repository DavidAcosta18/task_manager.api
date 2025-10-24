/* eslint-disable no-console */
const querystring = require('querystring');
const axios = require('axios');

/**
 *
 * @param {object} request
 * @param {string} request.url
 * @param {object} request.data
 * @param {object} request.params
 */
module.exports = (method) => ({ url, data, params, headers, auth }) => {
  let formData;
  if (data) {
    if (headers && headers['Content-type'] && headers['Content-type'] === 'application/json') {
      formData = data;
    } else {
      formData = querystring.stringify(data);
    }
  }

  return axios
    .request({
      method,
      url,
      data: formData,
      params,
      headers,
      auth,
    })
    .then((res) => {
      return {
        isSuccess: true,
        statusCode: res.status,
        statusText: res.statusText,
        data: res.data,
        headers: res.headers,
      };
    })
    .catch((err) => {
      const result = { isSuccess: false };

      if (err.response) {
        result.status = err.response.status;
        result.statusText = err.response.statusText;
        result.headers = err.response.headers;
        result.data = err.response.data;
        // } else if (err.request) {
      } else {
        console.error('=> ERROR ON httpClientService');
        console.error(err);
        result.error = err.message;
      }

      return result;
    });
};
