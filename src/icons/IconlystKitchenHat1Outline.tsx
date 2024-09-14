import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat1Outline = ({
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
      d="m18.41 15.075-.137 1.998a1 1 0 0 1-.004.084l-.081 1.186a2.854 2.854 0 0 1-2.853 2.67H8.666a2.856 2.856 0 0 1-2.853-2.67l-.08-1.19a1 1 0 0 1-.004-.08l-.137-1.997a5.39 5.39 0 0 1 2.214-10.37c.923-1.334 2.443-2.213 4.19-2.213 1.752 0 3.277.88 4.193 2.213q.087-.003.176-.003a5.389 5.389 0 0 1 2.045 10.372M7.28 17.823l.029.42c.047.72.64 1.27 1.356 1.27h6.67c.715 0 1.308-.55 1.355-1.27l.029-.42zm9.54-1.5.122-1.789c0-.328.214-.622.537-.721a3.87 3.87 0 0 0 2.77-3.72c0-2.15-1.737-3.89-3.885-3.89-.148 0-.295.01-.474.04a.76.76 0 0 1-.75-.38 3.58 3.58 0 0 0-3.145-1.87c-1.348 0-2.517.75-3.146 1.87a.75.75 0 0 1-.753.38 2.5 2.5 0 0 0-.46-.04 3.885 3.885 0 0 0-3.887 3.89c0 1.76 1.169 3.25 2.771 3.72.317.097.53.383.537.704l.122 1.806z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKitchenHat1Outline;
