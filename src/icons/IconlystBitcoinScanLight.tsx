import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinScanLight = ({
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
      d="M12.754 7.943H9.918v4.06h2.924a2.03 2.03 0 0 0 2.02-2.229c-.101-1.056-1.048-1.83-2.108-1.83M12.754 12.004H9.918v4.06h2.924a2.03 2.03 0 0 0 2.02-2.23c-.101-1.055-1.048-1.83-2.108-1.83M12.031 17.26v-1.197m0-8.126V6.74M20.998 15.531v1.577A3.89 3.89 0 0 1 17.105 21h-1.289M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M3 8.469V6.892A3.89 3.89 0 0 1 6.893 3h1.289M21 8.469V6.892A3.89 3.89 0 0 0 17.107 3H15.85"
    />
  </Svg>
);
export default IconlystBitcoinScanLight;
