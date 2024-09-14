import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSpacingBroken = ({
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
      d="M9.27 5.883V9.94M9.27 18.117V13m-2.654 5.118h5.424M3.25 8.04V5.882h12.156v2.156M21.25 13.64l-1.87 1.87m1.87-1.87-1.87-1.87m1.87 1.87h-8.415m0 0 1.87-1.87m-1.87 1.87 1.87 1.87"
    />
  </Svg>
);
export default IconlystTextSpacingBroken;
