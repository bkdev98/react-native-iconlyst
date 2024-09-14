import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeScanLight = ({
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
      d="M12 16.806c2.182 0 4.179-1.57 5.303-4.185-1.124-2.614-3.12-4.183-5.303-4.183-2.18 0-4.177 1.569-5.3 4.183 1.123 2.617 3.12 4.184 5.302 4.184z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.152v1.577a3.89 3.89 0 0 0 3.893 3.892H8.15M21 16.152v1.577a3.89 3.89 0 0 1-3.892 3.892h-1.29M21 9.091V7.513a3.893 3.893 0 0 0-3.893-3.892H15.85M3 9.091V7.513a3.893 3.893 0 0 1 3.893-3.892h1.29M12 12.645v-.063zm-.26-.013a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystEyeScanLight;
