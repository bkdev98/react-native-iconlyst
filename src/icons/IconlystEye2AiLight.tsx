import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye2AiLight = ({
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
      d="M3 12.008c0 3.622 4.289 7.102 9 7.102s9-3.48 9-7.102c0-2.948-2.866-5.802-6.453-6.762"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.926 12.007a3.077 3.077 0 1 0 5.549-1.832M5.596 8.105l-.101-.273a3.76 3.76 0 0 0-2.222-2.225L3 5.506l.273-.101A3.76 3.76 0 0 0 5.495 3.18l.1-.274.102.274a3.76 3.76 0 0 0 2.221 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.221 2.225zM10.906 9.347A1.77 1.77 0 0 0 9.73 8.17a1.77 1.77 0 0 0 1.176-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystEye2AiLight;
