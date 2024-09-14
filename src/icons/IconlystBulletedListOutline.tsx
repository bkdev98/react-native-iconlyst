import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulletedListOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.75 18.762a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75M7.75 12.762a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75M7.75 6.762a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75M3.499 6.76a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.021 0M3.499 12.89a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.021 0M3.499 18.76a1.01 1.01 0 1 1 2.021 0 1.01 1.01 0 0 1-2.021 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBulletedListOutline;
