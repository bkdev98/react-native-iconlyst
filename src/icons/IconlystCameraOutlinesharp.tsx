import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.799 3.742H15.7l1.732 2.706h4.818v14.81h-20V6.448h4.818zm.82 1.5L7.89 7.948H3.75v11.81h17V7.948h-4.138L14.88 5.242z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.427 10.285h1.51v1.5h-1.51zM8.32 13.714a3.929 3.929 0 1 1 7.858 0 3.929 3.929 0 0 1-7.858 0m3.93-2.429a2.429 2.429 0 1 0-.001 4.857 2.429 2.429 0 0 0 0-4.857"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraOutlinesharp;
