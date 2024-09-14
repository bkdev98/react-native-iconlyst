import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.095 19.373a.93.93 0 0 1-.932-.93.932.932 0 0 1 1.864 0c0 .513-.418.93-.932.93m-.252-13.271c0-.651.09-1.281.252-1.881a.313.313 0 0 0-.295-.398H8.393a4.02 4.02 0 0 0-2.865 1.188 4.03 4.03 0 0 0-1.187 2.872l.001 10.57a4.055 4.055 0 0 0 4.052 4.05h5.417a4.057 4.057 0 0 0 4.053-4.05v-4.83a.31.31 0 0 0-.292-.306 7.234 7.234 0 0 1-6.729-7.215"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.967 8.075a.73.73 0 0 1-.544.242h-1.387v-1.47h1.325c.41 0 .758.291.794.663a.73.73 0 0 1-.188.565m-1.931-4.198h1.325c.403 0 .759.297.794.662a.73.73 0 0 1-.188.566.73.73 0 0 1-.544.242h-1.387zm3.047 2.23a2.24 2.24 0 0 0 .565-1.712c-.102-1.06-.992-1.894-2.068-1.997v-.15a.75.75 0 0 0-1.5 0v.13h-.794a.75.75 0 0 0-.75.75v5.94c0 .413.336.75.75.75h.794v.12a.75.75 0 0 0 1.5 0V9.8a2.24 2.24 0 0 0 1.498-.718c.423-.466.63-1.09.57-1.716a2.18 2.18 0 0 0-.565-1.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneBold;
