import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleCloudBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 1 4.256-1.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.139 15.448c-.258 0-.598-.053-.94-.191a2.34 2.34 0 0 1-1.377-2.133c0-1.468 1.036-2.329 2.319-2.34 0-.923.724-2.768 2.767-2.768s2.767 1.845 2.767 2.768c1.282.011 2.319.872 2.319 2.34 0 .948-.563 1.768-1.375 2.135a2.6 2.6 0 0 1-.946.19h-2.767"
    />
  </Svg>
);
export default IconlystCircleCloudBroken;
