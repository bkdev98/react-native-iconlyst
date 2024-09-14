import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu1TwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.926 20h-5.94a3.1 3.1 0 0 1-3.101-3.1V7.099a3.1 3.1 0 0 1 3.1-3.101h5.94a3.1 3.1 0 0 1 3.101 3.1V16.9c0 1.712-1.388 3.1-3.1 3.1"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.98 7.467v9.068m-18-9.068v9.068M7.057 15.244h11.807"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMenu1TwoTone;
