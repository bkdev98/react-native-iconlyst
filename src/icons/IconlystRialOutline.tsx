import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialOutline = ({
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
      d="M15.452 18.555h-2.666a.75.75 0 0 1 0-1.5h2.666a.75.75 0 1 1 0 1.5M6.197 18.213a3.7 3.7 0 0 1-3.7-3.7V13.17a.75.75 0 1 1 1.5 0v1.35a2.2 2.2 0 1 0 4.392 0V6.323a.75.75 0 1 1 1.5 0v8.194a3.7 3.7 0 0 1-3.692 3.695M15.632 15.522h-.98a2.83 2.83 0 0 1-2.827-2.826V6.32a.75.75 0 1 1 1.5 0v6.376a1.33 1.33 0 0 0 1.327 1.326h.977a1.327 1.327 0 0 0 1.325-1.326v-1.6a.75.75 0 1 1 1.5 0v1.6a2.83 2.83 0 0 1-2.822 2.826M18.783 18.545a.75.75 0 0 1-.257-1.455 3.02 3.02 0 0 0 1.977-2.76v-3.514a.75.75 0 1 1 1.5 0v3.528A4.54 4.54 0 0 1 19.04 18.5a.8.8 0 0 1-.257.045"
    />
  </Svg>
);
export default IconlystRialOutline;
