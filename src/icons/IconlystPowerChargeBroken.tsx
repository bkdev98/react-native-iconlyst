import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerChargeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7.703c-2.105-3.708-6.594-5.512-10.774-4.07a8.99 8.99 0 0 0-5.741 6.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.242 4.406v3.3H16.96M8.605 11.508h6.035c.416 0 .753.337.753.753v1.025c0 1.773-1.296 3.356-3.06 3.524a3.395 3.395 0 0 1-3.627-2.555M12 21.134v-4.2M10.293 9.285v2.222m3.414-2.222v2.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.664 15.068c1.614 4.7 6.735 7.196 11.435 5.572a8.96 8.96 0 0 0 5.733-6.093"
    />
  </Svg>
);
export default IconlystPowerChargeBroken;
