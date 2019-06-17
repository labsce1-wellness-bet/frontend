import React from "react";
import { request } from "http";

interface FitbitConnectProps {
  location: any;
  search: string;
}

interface FitbitAuth {
  fitbitAccess: String;
  fitbitRefresh: String;
  access_token: String;
  refresh_token: String;
}

const FitbitConnect: React.SFC<FitbitConnectProps> = props => {
  const authCode: string = props.location.search.match(/(?<==).+?(?=&)/)[0];
  const userId: number = props.location.search.match(/(?<=userId)(.*)/)[0];
  let redirectUri: string = process.env.REACT_APP_FITBIT_REDIRECT_URI || "";
  const encodedUri: string = encodeURI(redirectUri);
  const content: string = `client_id=22DR4B&grant_type=authorization_code&redirect_uri=${encodedUri}&code=${authCode}`;

  // Function to POST and retrieve Access and Refresh Token after receiving auth code.
  function authFitbit<Request, Response>(
    method: "POST",
    url: string,
    content?: Request,
    callback?: (response: Response) => void,
    errorCallback?: (err: any) => void,
  ) {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response) as Response;
        console.log(data);
        storeFitbit({
          method: "PUT",
          url: `${process.env.REACT_APP_BACKEND_URL}api/user/${userId}/fitbit`,
          content: data,
        });
        callback && callback(data);
      } else {
      }
    };
    request.onerror = function(err) {
      errorCallback && errorCallback(err);
    };
    if (method === "POST") {
      request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8",
      );
      request.setRequestHeader(
        "Authorization",
        "Basic MjJEUjRCOmM3MDYzMDU5YjA3MmZjNmY2OGJiYzliZTRmNjBiYWU5",
      );
    }
    request.send(content);
  }

  // Function to PUT Access and Refresh token on backed end after sending auth code to Fitbit.
  function storeFitbit<Request, Response>({
    method,
    url,
    content,
    callback,
    errorCallback,
  }: {
    method: "PUT";
    url: string;
    content?: Request;
    callback?: (response: Response) => void;
    errorCallback?: (err: any) => void;
  }) {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response) as Response;
        console.log(data);
        callback && callback(data);
      } else {
      }
    };
    request.onerror = function(err) {
      errorCallback && errorCallback(err);
    };
    if (method === "PUT") {
      request.setRequestHeader("Content-Type", "application/json");
    }

    if (content) {
      console.log("PUT Content", content);
      content.fitbitAccess = content.access_token;
      request.send({
        content,
      });
    }
  }

  authFitbit("POST", "https://api.fitbit.com/oauth2/token", content);
  return (
    <div>
      <h1>Fitbit Connecting</h1>
    </div>
  );
};

export default FitbitConnect;
