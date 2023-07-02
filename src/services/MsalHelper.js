
import {  useMsal } from '@azure/msal-react';
import { loginRequest } from 'authConfig';
import { useState } from 'react';

export const GetAccessToken = async  () => {
    const { instance, accounts } = useMsal();
    const result = '';


        instance.acquireTokenSilent({ ...loginRequest, account: accounts[0], }) .then((response) => {
                result = response.accessToken;
            });


}
