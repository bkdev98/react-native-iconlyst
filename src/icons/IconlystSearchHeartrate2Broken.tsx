import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHeartrate2Broken = ({
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
      d="m20.496 20.958-3.41-3.401a8.32 8.32 0 0 1-5.706 2.246c-3.638 0-6.738-2.325-7.896-5.569M3 11.422a8.38 8.38 0 0 1 8.38-8.38 8.37 8.37 0 0 1 7.265 4.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.518 11.996 1.887-3.346 2.755 5.71 1.4-2.027M15.958 10.308l1.978 3.014 1.266-1.998H21"
    />
  </Svg>
);
export default IconlystSearchHeartrate2Broken;
