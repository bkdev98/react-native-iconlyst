import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletBulk = ({
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
      d="M3.934 4.068c.932-1 2.265-1.568 3.859-1.568h8.435c1.597 0 2.93.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.793c-1.598 0-2.931-.567-3.863-1.568-.927-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.495-2.962 1.424-3.958"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.51 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6.251-1.966a.75.75 0 0 0-1.5 0v.515a.75.75 0 1 0 1.5 0zm-1.715 2.598a.75.75 0 0 0-1.5 0v.515a.75.75 0 0 0 1.5 0zm3.43 0a.75.75 0 0 0-1.5 0v.515a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutletBulk;
