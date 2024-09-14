import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutSquareVerticalLight = ({
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
      d="M20.248 6.459v11.082c0 2.75-1.941 4.462-4.689 4.462H8.44c-2.747 0-4.688-1.712-4.688-4.463V6.459c0-2.75 1.941-4.46 4.689-4.46l7.12-.001c2.747 0 4.688 1.72 4.688 4.461"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 7-3 3-3-3M15 17l-3-3-3 3"
    />
  </Svg>
);
export default IconlystFullOutSquareVerticalLight;
