import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiScanLight = ({
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
      d="M2.999 15.531v1.577A3.893 3.893 0 0 0 6.892 21h1.257M21.001 15.531v1.577A3.893 3.893 0 0 1 17.108 21H15.82M2.999 8.469V6.892A3.893 3.893 0 0 1 6.892 3h1.289M21 8.469V6.892A3.893 3.893 0 0 0 17.109 3H15.85M10.287 13.421l-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.221 2.225zM15.132 15.778a1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.176-1.179A1.77 1.77 0 0 0 16.31 14.6a1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystAiScanLight;
