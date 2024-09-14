import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTailwindTwoTone = ({
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
      d="M14.492 6.007c2.328 1.386 4.191 3.258 7.008 1.166-.448 3.403-4.83 5.308-8.145 3.161-2.436-1.474-3.529-2.836-6.978-1.192.498-3.747 4.95-5.186 8.115-3.135"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.615 13.694c2.328 1.386 4.191 3.259 7.008 1.167-.448 3.403-4.83 5.308-8.145 3.16-2.436-1.474-3.529-2.836-6.978-1.191.498-3.747 4.95-5.187 8.115-3.136"
    />
  </Svg>
);
export default IconlystTailwindTwoTone;
