import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.877 13.962c-.847-1.863-.825-2.564-.786-3.838.01-.3.02-.628.02-1.003 0-2.977-2.129-7.17-6.86-7.17-4.733 0-6.862 4.193-6.862 7.17 0 .374.01.702.02 1.003.04 1.274.06 1.975-.796 3.863-.366.944-.322 1.76.133 2.423 1.092 1.598 4.252 1.818 7.504 1.818s6.412-.22 7.504-1.818c.456-.664.5-1.479.123-2.448M14.948 19.24c-1.631.182-3.4.18-5.41-.001a.75.75 0 0 0-.627 1.247c.9 1.007 2.085 1.563 3.335 1.563h.002c1.253 0 2.44-.555 3.342-1.563a.75.75 0 0 0 .108-.844.76.76 0 0 0-.75-.401"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotificationBoldcurved;
