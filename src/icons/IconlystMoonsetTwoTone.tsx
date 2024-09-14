import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonsetTwoTone = ({
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
      d="M20.392 16.583H3.838M16.604 20.522H7.625"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.49 16.528a5.33 5.33 0 0 1-2.25-2.516c-1.807-4.2 1.026-8.236 4.909-8.554-1.764 4.765 1.766 8.257 6.427 6.42a5.96 5.96 0 0 1-2.856 4.615"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.575 3a3.7 3.7 0 0 0 2.458 2.458 3.7 3.7 0 0 0-2.458 2.458 3.7 3.7 0 0 0-2.458-2.458A3.7 3.7 0 0 0 17.575 3"
    />
  </Svg>
);
export default IconlystMoonsetTwoTone;