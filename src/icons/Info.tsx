import Svg, {Path} from 'react-native-svg';
import React from 'react';
const Info = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#777777">
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </Svg>
  );
};

export default Info;
