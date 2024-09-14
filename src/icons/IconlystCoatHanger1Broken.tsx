import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger1Broken = ({
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
      d="M9.83 7.53c0-1.407 1.323-2.589 2.793-2.2.718.191 1.254.757 1.458 1.472.37 1.295-.317 2.205-1.257 2.77-.44.265-8.426 4.686-8.426 4.686A2.29 2.29 0 0 0 3 16.367v.086a2.29 2.29 0 0 0 2.29 2.292h3.355M14.055 12.048l5.53 2.29a2.29 2.29 0 0 1-.875 4.407H12"
    />
  </Svg>
);
export default IconlystCoatHanger1Broken;
