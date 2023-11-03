// import React,{Component} from "react";
// export class Chat extends Component{
//     componentDidMount(){

//     (function(d, m){
//         var kommunicateSettings = 
//             {"appId":"1e24d79ede6cbd1cfbbb91967082b4ef","popupWidget":true,"automaticChatOpenOnNavigation":true};
//         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//         window.kommunicate = m; m._globals = kommunicateSettings;
//     })(document, window.kommunicate || {});
//     }
//         render(){
//             return(
//                 <></>
//             )
//         }

    
// }
// export default Chat
import React, { useEffect } from 'react';

export function Chat() {
  useEffect(() => {
    // Check if the Kommunicate script has already been loaded
    if (typeof window.kommunicate === 'undefined') {
      (function (d, m) {
        var kommunicateSettings = {
          "appId": "1e24d79ede6cbd1cfbbb91967082b4ef"
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        (window.kommunicate = m).queue = [];
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || []);
    }
  }, []); 

  return (
    <div>
    
    </div>
  );
}

