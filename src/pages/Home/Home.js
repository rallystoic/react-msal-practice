import { React, useState } from "react";
//import { PageLayout } from './components/PageLayout';
import { loginRequest } from 'authConfig';
import { callMsGraph } from 'api/graph';
import { ProfileData } from 'components/ProfileData';

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Button from 'react-bootstrap/Button';

import  { GetAccessToken } from 'services/MsalHelper';






const Home = () => {
    const { instance, accounts } = useMsal();

const ProfileContent = () => {
    const [graphData, setGraphData] = useState(null);
        
    
    const  RequestProfileData = async () => {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        // instance.acquireTokenSilent({ ...loginRequest, account: accounts[0], }) .then((response) => {
        //         console.log(response.accessToken);
        //         callMsGraph(response.accessToken).then((response) => setGraphData(response));
        //     });
        //
            const token = await instance.acquireTokenSilent( { ...loginRequest, account: accounts[0],});
            const data  = await callMsGraph(token.accessToken);
            setGraphData(data);
    }
    
    return (
        <>
            <h5 className="card-title">Welcome {accounts[0].name? 'true' : ''}</h5>
            <br/>
            {graphData ? (
                <ProfileData graphData={graphData} />
            ) : (
                <Button variant="secondary" onClick={RequestProfileData}>
                    Request Profile Information
                </Button>
            )}
        </>
    );

};


      return (
              <div>
                <h2>Home</h2>
                      <AuthenticatedTemplate>
          <ProfileContent />
                      </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                          <h5>
                              <center>
                                  Please sign-in to see your profile information.
                              </center>
                          </h5>
                      </UnauthenticatedTemplate>
              </div>
            );

}


export default  Home;
