import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartPhoneBulk = ({
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
      d="M14.75 2.5h-5.5a4.104 4.104 0 0 0-4.1 4.099V17.4c0 2.261 1.839 4.1 4.1 4.1h5.5c2.261 0 4.1-1.839 4.1-4.1V6.599a4.104 4.104 0 0 0-4.1-4.099"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.4 7.45h-2.8a.75.75 0 0 1 0-1.5h2.8a.75.75 0 0 1 0 1.5M12 18.15a.94.94 0 0 1-.95-.95c0-.544.502-.95.95-.95.449 0 .95.406.95.95s-.501.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartPhoneBulk;
