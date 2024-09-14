import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoteBroken = ({
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
      d="m16.164 5.751-2.106-2.106a2.203 2.203 0 0 0-3.116 0l-6.797 6.797c-.86.86-.86 2.255 0 3.116l6.797 6.797c.86.86 2.255.86 3.116 0M20.76 10.348l.095.094c.86.86.86 2.255 0 3.115l-4.105 4.105"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.195 11.449 3.03 3.029 7.658-7.66"
    />
  </Svg>
);
export default IconlystVoteBroken;
