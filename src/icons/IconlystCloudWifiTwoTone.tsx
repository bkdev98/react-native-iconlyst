import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWifiTwoTone = ({
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
      d="M19.064 17.102a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.141 0-1.633-1.28-4.898-4.897-4.898S7.603 7.554 7.603 9.187c-2.27.02-4.103 1.545-4.103 4.141 0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.49 19.71v-.046M10.64 17.547a2.88 2.88 0 0 1 3.709-.006M8.85 15.295a5.835 5.835 0 0 1 7.282 0"
    />
  </Svg>
);
export default IconlystCloudWifiTwoTone;
