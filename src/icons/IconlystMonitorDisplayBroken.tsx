import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayBroken = ({
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
      d="M12.5 3.205H7.527A4.03 4.03 0 0 0 3.5 7.235v5.456a4.03 4.03 0 0 0 4.028 4.029h9.943a4.03 4.03 0 0 0 4.029-4.03V7.235a4.03 4.03 0 0 0-4.03-4.029h-.651M7.947 20.795h8.99"
    />
  </Svg>
);
export default IconlystMonitorDisplayBroken;
