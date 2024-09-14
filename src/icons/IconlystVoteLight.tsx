import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoteLight = ({
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
      d="m20.26 10.348.095.094c.86.86.86 2.255 0 3.116l-6.797 6.797c-.86.86-2.255.86-3.116 0l-6.797-6.797a2.203 2.203 0 0 1 0-3.116l6.797-6.797c.86-.86 2.255-.86 3.116 0l2.106 2.106"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.695 11.449 3.03 3.029 7.658-7.66"
    />
  </Svg>
);
export default IconlystVoteLight;
