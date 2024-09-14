import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalDashBroken = ({
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
      d="M5.877 6.5v11M19.123 6.5v11M10.772 14.12c.55-.078 1.13-.12 1.728-.12.595 0 1.172.041 1.72.12M5.877 17.5c0-.88.614-1.684 1.628-2.299M17.494 15.201c1.014.615 1.628 1.419 1.628 2.3M12.5 21c-3.658 0-6.623-1.566-6.623-3.499M19.122 17.501c0 1.243-1.225 2.334-3.072 2.955M12.5 3c3.658 0 6.623 1.567 6.623 3.5S16.158 10 12.5 10 5.877 8.433 5.877 6.5c0-1.394 1.542-2.598 3.774-3.16"
    />
  </Svg>
);
export default IconlystCylindricalDashBroken;
