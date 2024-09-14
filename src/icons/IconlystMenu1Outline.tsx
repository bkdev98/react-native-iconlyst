import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu1Outline = ({
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
      d="M6.135 7.099a3.85 3.85 0 0 1 3.85-3.851h5.94a3.85 3.85 0 0 1 3.851 3.85V16.9a3.85 3.85 0 0 1-3.85 3.85h-5.94a3.85 3.85 0 0 1-3.851-3.85zm3.85-2.351a2.35 2.35 0 0 0-2.35 2.35V16.9a2.35 2.35 0 0 0 2.35 2.35h5.94a2.35 2.35 0 0 0 2.351-2.35V7.099a2.35 2.35 0 0 0-2.35-2.351zM3.98 6.717a.75.75 0 0 1 .75.75v9.068a.75.75 0 0 1-1.5 0V7.467a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v9.068a.75.75 0 0 1-1.5 0V7.467a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.307 15.244a.75.75 0 0 1 .75-.75h11.807a.75.75 0 0 1 0 1.5H7.057a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenu1Outline;
