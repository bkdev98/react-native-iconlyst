import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationPlusBroken = ({
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
      d="M19.908 6.53c.493-1.47-.916-2.866-2.382-2.361L5.512 8.304c-1.636.563-1.696 2.854-.094 3.502l4.13 1.672c.465.188.834.555 1.026 1.018l1.772 4.284c.662 1.599 2.953 1.52 3.502-.121M17.746 9.86v5.005M20.25 12.36h-5.006"
    />
  </Svg>
);
export default IconlystNavigationPlusBroken;
