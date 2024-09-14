import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalDashBold = ({
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
      fillRule="evenodd"
      d="M10.38 4.736a11.8 11.8 0 0 1 3.23 0 .75.75 0 0 0 .217-1.484 13.2 13.2 0 0 0-3.663 0 .75.75 0 0 0-.635.849c.06.41.451.692.85.635"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.372 7.373c0-.047-.009-.094-.01-.14l-.002-.015c-.063-1.054-.754-2.039-1.975-2.784a.75.75 0 0 0-.782 1.279c.472.29 1.261.886 1.268 1.651v.004c0 1.31-2.41 2.75-5.87 2.75s-5.87-1.44-5.87-2.75l-.003-.007c.01-.764.796-1.36 1.267-1.648a.75.75 0 0 0 .25-1.03.746.746 0 0 0-1.03-.249c-1.282.782-1.988 1.826-1.988 2.94l.003.014v10.98c0 .05 0 .11.01.161.14 2.31 3.32 4.09 7.36 4.09s7.22-1.78 7.36-4.09c.01-.05.01-.11.01-.16V7.382z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalDashBold;
