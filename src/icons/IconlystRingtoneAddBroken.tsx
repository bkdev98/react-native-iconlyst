import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneAddBroken = ({
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
      d="M10.434 19.975A2.69 2.69 0 0 0 12.53 21a2.69 2.69 0 0 0 2.106-1.025M12.5 12.827V8.914m-1.957 1.957h3.913M6.735 8.35c0 3.204-1.57 3.038-1.57 5.647.218 2.614 2.47 3.265 7.335 3.265s7.116-.643 7.335-3.265c0-2.611-1.57-2.444-1.57-5.648C18.265 5.847 15.99 3 12.5 3c-1.89 0-3.425.836-4.434 2"
    />
  </Svg>
);
export default IconlystRingtoneAddBroken;
