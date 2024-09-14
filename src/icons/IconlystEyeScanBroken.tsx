import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeScanBroken = ({
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
      d="M12.25 16.184h.002c-2.183 0-4.18-1.568-5.303-4.184 1.124-2.615 3.12-4.184 5.3-4.184 2.183 0 4.18 1.57 5.304 4.184-.604 1.404-1.458 2.507-2.458 3.226M3.25 15.531v1.577A3.89 3.89 0 0 0 7.143 21H8.4M21.25 15.531v1.577A3.89 3.89 0 0 1 17.358 21h-1.29M21.25 8.47V6.892A3.893 3.893 0 0 0 17.357 3H16.1M3.25 8.47V6.892A3.893 3.893 0 0 1 7.143 3h1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 12.024v-.063m-.26.05a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystEyeScanBroken;
