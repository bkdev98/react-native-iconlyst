import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySendingLight = ({
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
      d="M3.004 4.779h2.578c.936-1.818 2.759-2.783 5.02-2.388l6.964 1.237 1.343.233c2.913.517 4.354 2.883 3.838 5.786l-1.383 7.84c-.507 2.902-2.678 4.636-5.59 4.12l-8.308-1.47c-2.234-.39-3.6-1.876-3.886-3.858M2.85 12.687h3.579M4.584 8.742h3.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.985 3.742-1.334 7.54-2.63-1.41-2.976.424 1.34-7.531"
    />
  </Svg>
);
export default IconlystDeliverySendingLight;
