import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoicemailOutline = ({
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
      d="M3.5 12a3.929 3.929 0 1 1 7.857.001 3.929 3.929 0 0 1-7.857 0m3.928-2.428a2.429 2.429 0 1 0 0 4.857 2.429 2.429 0 0 0 0-4.857M13.145 12a3.929 3.929 0 1 1 7.857.001 3.929 3.929 0 0 1-7.857 0m3.928-2.428a2.429 2.429 0 1 0 0 4.857 2.429 2.429 0 0 0 0-4.857M4.477 19.275a.75.75 0 0 1 .75-.75h14.046a.75.75 0 0 1 0 1.5H5.227a.75.75 0 0 1-.75-.75M4.477 4.725a.75.75 0 0 1 .75-.75h14.046a.75.75 0 0 1 0 1.5H5.227a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.678 15.178a.75.75 0 0 1 .75-.75h9.644a.75.75 0 0 1 0 1.5H7.428a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoicemailOutline;
