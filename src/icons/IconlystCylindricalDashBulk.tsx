import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalDashBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M4.63 12.471v5.176c0 .05 0 .11.01.161.14 2.31 3.32 4.09 7.36 4.09s7.22-1.78 7.36-4.09c.01-.05.01-.11.01-.16v-5.182c-.354 1.56-3.28 3.154-7.37 3.154-4.085 0-7.01-1.59-7.37-3.149"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M19.37 12.466V6.663l.001-.004.001-.006a1 1 0 0 0-.005-.08l-.007-.075c-.063-1.054-.754-2.04-1.975-2.784a.75.75 0 0 0-.782 1.279c.472.289 1.261.886 1.268 1.65v.005c0 1.31-2.41 2.75-5.87 2.75s-5.87-1.44-5.87-2.75l-.002-.004v-.003c.008-.764.795-1.36 1.266-1.648a.75.75 0 0 0 .25-1.03.746.746 0 0 0-1.03-.25c-1.282.783-1.988 1.827-1.988 2.94l.002.007.001.008v5.804C4.99 14.03 7.915 15.62 12 15.62c4.089 0 7.016-1.594 7.37-3.155"
    />
    <Path
      fill={props.color}
      d="M13.61 4.015a11.8 11.8 0 0 0-3.23 0 .76.76 0 0 1-.85-.635.75.75 0 0 1 .634-.849 13.2 13.2 0 0 1 3.663 0 .75.75 0 1 1-.217 1.484"
    />
  </Svg>
);
export default IconlystCylindricalDashBulk;
