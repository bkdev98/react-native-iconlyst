import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendBrokencurved = ({
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
      d="M18.537 15.842c-.656 1.867-1.323 3.48-1.88 4.445-2.402 4.162-4.88-7.814-4.88-7.814S-.199 9.995 3.963 7.593C7.475 5.564 19.58 2.08 21.27 2.98c.493.927-.33 4.98-1.509 9.032M11.777 12.473l6.03-6.03"
    />
  </Svg>
);
export default IconlystSendBrokencurved;
