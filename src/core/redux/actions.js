const generate = prefix => type => `${prefix}-${type}`;

export const CALL_API = 'CALL_API';
export const SEND_REQUEST = 'SEND_REQUEST';
export const UNAUTHORIZED = 'UNAUTHORIZED';

export const callApi = generate(CALL_API);
export const failAction = generate('FAIL');
export const startAction = generate('START');
export const successAction = generate('SUCCESS');