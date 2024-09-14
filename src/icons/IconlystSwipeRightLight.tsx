import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRightLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.982 11.672c.957 2.583.015 6.002-1.662 7.679-2.14 2.14-8.12 2.302-10.077-.132-1.243-1.545-2.208-3.42-2.817-5.1-.326-.901.153-1.873 1.047-2.216a1.84 1.84 0 0 1 2.17.672l1.203 1.745V4.68a1.68 1.68 0 0 1 3.36-.025l.068 4.347c2.351.225 5.757.103 6.708 2.67M18.195 3.531l1.483 1.483-1.483 1.482M19.677 5.012h-4.765"
    />
  </Svg>
);
export default IconlystSwipeRightLight;
