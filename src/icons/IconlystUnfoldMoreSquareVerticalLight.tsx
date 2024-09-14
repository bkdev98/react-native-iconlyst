import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnfoldMoreSquareVerticalLight = ({
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
      d="M20.25 6.433v11.081c0 2.75-1.941 4.462-4.689 4.462h-7.12c-2.747 0-4.688-1.712-4.688-4.463V6.433c0-2.75 1.941-4.461 4.689-4.461h7.12c2.747 0 4.688 1.719 4.688 4.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 10-3-3-3 3M15 14l-3 3-3-3"
    />
  </Svg>
);
export default IconlystUnfoldMoreSquareVerticalLight;
