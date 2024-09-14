import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave2Broken = ({
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
      d="M3 8.026C3 5.08 4.843 3 7.782 3h6.323c.66 0 1.29.269 1.746.743l4.475 4.662c.433.45.674 1.05.674 1.675v5.893C21 18.92 19.166 21 16.217 21H7.782C4.834 21 3 18.919 3 15.974V12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.057 21v-3.324c0-1.013.82-1.834 1.833-1.834h1.442M14.112 15.842c1.012 0 1.833.821 1.833 1.834V21M8.057 3v4.65"
    />
  </Svg>
);
export default IconlystFloppyDiskSave2Broken;
