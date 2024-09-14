import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStethoscopeTwoTone = ({
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
      d="M12.679 3.884c.172.327.345.645.509 1.044.336.8.744 1.562.954 2.389.78 3.187-1.771 6.365-4.94 6.483-.038.009-.074.009-.11.009-3.205-.054-5.83-3.27-5.04-6.492.2-.827.618-1.59.936-2.39.172-.417.363-.744.535-1.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.91 12.434a2.27 2.27 0 1 1-4.539.001 2.27 2.27 0 0 1 4.54 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.64 14.705v.226a5.22 5.22 0 1 1-10.443 0v-1.134"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStethoscopeTwoTone;
