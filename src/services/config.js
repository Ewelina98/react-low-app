export const ID = '@id';
export const Members = 'hydra:member';
export const LastPage = 'hydra:last';
export const View = 'hydra:view';

export const baseUrl = 'https://arkadb.cluster-soft.com';

export const buildEndpointURL = (baseUrl, endpoint) => {
    return `${baseUrl}/${endpoint}`;
}