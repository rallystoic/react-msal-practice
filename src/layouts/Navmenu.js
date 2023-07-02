
import { Outlet, Link } from "react-router-dom";
import { React, useEffect, useState }  from "react";
 
import { useIsAuthenticated } from "@azure/msal-react";
import    SignInButton    from "components/SignInButton";
import   SignOutButton   from "components/SignOutButton";
import { AuthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from "authConfig";
import { callMsGraph } from 'api/graph';


const Navmenu = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState( { givenName: null, surname: null, userPrincipalName: null, id: null});

      const isAuthenticated = useIsAuthenticated();

     useEffect( () => {
    const  RequestProfileData = async () => {
            const token = await instance.acquireTokenSilent( { ...loginRequest, account: accounts[0],});
            const data  = await callMsGraph(token.accessToken);
            setGraphData(data);
    }
         if (isAuthenticated) {
         RequestProfileData().catch((error) => {console.error(error)});
         }
     });

      return (
              <div>
                {/* A "layout route" is a good place to put markup you want to
                          share across all the pages on your site, like navigation. */}
                <nav>
                  <ul>
          <AuthenticatedTemplate>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
          </AuthenticatedTemplate>
                  </ul>
          <AuthenticatedTemplate>
          <p>
                  <strong> {graphData.givenName} - {graphData.surname} </strong>
          </p>
          </AuthenticatedTemplate>

                </nav>
                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                <hr />

                {/* An <Outlet> renders whatever child route is currently active,
                          so you can think about this <Outlet> as a placeholder for
                                    the child routes we defined above. */}
                <Outlet />
              </div>
            );

}

export default Navmenu;
