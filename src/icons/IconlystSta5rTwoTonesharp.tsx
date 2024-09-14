import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rTwoTonesharp = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M15.63 8.15A15.65 15.65 0 0 0 21.5 12a15.65 15.65 0 0 0-5.87 3.85m-6.76 0A15.65 15.65 0 0 0 3 12a15.65 15.65 0 0 0 5.87-3.85"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M15.63 8.15a15.65 15.65 0 0 1-3.38-5.4 15.65 15.65 0 0 1-3.38 5.4m6.76 7.7a15.65 15.65 0 0 0-3.38 5.4 15.65 15.65 0 0 0-3.38-5.4"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSta5rTwoTonesharp;
