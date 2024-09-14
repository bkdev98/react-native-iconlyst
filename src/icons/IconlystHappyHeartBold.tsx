import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyHeartBold = ({
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
      d="M18.334 9.22c.22.12.47.19.72.19.415 0 .794-.2 1.139-.431.164-.111.39-.045.452.144.295.905.45 1.876.45 2.877 0 5.24-4.26 9.5-9.5 9.5-5.23 0-9.5-4.26-9.5-9.5s4.27-9.5 9.5-9.5c1.064 0 2.096.174 3.049.507.156.054.231.228.186.387a3.7 3.7 0 0 0 .054 2.146c.66 2.1 3.16 3.53 3.45 3.68m-9.666.027a.75.75 0 0 0-.75.75v.505a.75.75 0 0 0 1.5 0v-.505a.75.75 0 0 0-.75-.75m7.211 1.255a.75.75 0 0 1-1.5 0v-.505a.75.75 0 0 1 1.5 0zm-.806 4.241c-.868 1.128-2.133 1.775-3.474 1.775-1.34 0-2.607-.647-3.475-1.775a.751.751 0 0 1 1.19-.914c.581.756 1.414 1.19 2.285 1.19s1.704-.434 2.285-1.19a.75.75 0 0 1 1.052-.138.75.75 0 0 1 .137 1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.685 2.58c-.18-.05-.36-.08-.55-.08-.38 0-.76.12-1.08.36-.32-.24-.7-.36-1.09-.36-.18 0-.36.03-.54.08-.59.19-.98.64-1.14 1.17-.12.42-.11.89.03 1.33.5 1.6 2.74 2.83 2.74 2.83s.36-.2.83-.54c.69-.51 1.6-1.33 1.91-2.29.32-1.01-.05-2.16-1.11-2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyHeartBold;
