import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindowsBroken = ({
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
      d="M15.43 20.04 5.195 17.826a1.36 1.36 0 0 1-1.073-1.33V7.504c0-.642.446-1.196 1.073-1.331L19.732 3.03a1.36 1.36 0 0 1 1.649 1.33v15.277c0 .868-.801 1.514-1.649 1.33l-1.064-.23M11.856 19.265V7.656M4.12 12h14.185"
    />
  </Svg>
);
export default IconlystWindowsBroken;
