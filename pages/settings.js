import React, { useState, useEffect } from "react";
import setting_style from "../styles/Setting.module.scss";
import facebookAdsService from "../services/facebbokAds";
import { useRouter } from "next/router";

const Settings = () => {
  const [authCode, setAuthCode] = useState("");
  const { query } = useRouter();
  console.log("gcgyuwe : ", authCode);
  const facbookHandler = async () => {
    let facebookRes = await facebookAdsService.facbookAuth();
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
    let popup = window.open(facebookRes.data.data, "", params);
    // if (window.focus) {popup.focus()}
  };

  function refreshParent() {
    window.opener.location.reload();
}

  const getFacbookReports = () => {
    const { code } = query;

    if (code) {
      window.parent.postMessage(code);
      window.close();
      // refreshParent();
    }
  };

  const getFbReports = () => {
    window.onmessage = (res) =>{
      console.log("rescs : ", res.data);
    }
    console.log("code bhehjj vehjbb : ", authCode);
  };

  // window.postMessage
  useEffect(() => {
    getFacbookReports();
  }, [query]);

  useEffect(() => {
    getFbReports();
  }, [authCode]);

  return (
    <div className={setting_style.setting_wrapper}>
      <div className={setting_style.basic_info}>
        <h3>Basic Information</h3>
        <form action="/action_page.php" className={setting_style.formstyle}>
          <div className={setting_style.input}>
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className={setting_style.input}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={setting_style.input}>
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" id="tel" name="tel" />
          </div>
        </form>

        <div className={setting_style.conected_applications}>
          <div className="row">
            <div className="col-4">
              <h3>Connected Applications</h3>
              <div>
                <ul>
                  <li className={setting_style.items}>
                    <img src="meta.png" />
                    <p
                      className={setting_style.listitem}
                      onClick={facbookHandler}
                    >
                      {" "}
                      Meta Buisness Manager{" "}
                    </p>
                  </li>
                  <li className={setting_style.items}>
                    <img src="googleAnalytics.png" />
                    <p
                      className={setting_style.listitem}
                      onClick={facbookHandler}
                    >
                      {" "}
                      Google Analytics{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-5">
              <h3>Notification settings</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
