import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration1TwoTone = ({
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
      d="m17.657 16.985-.001-9.971c0-1.852-1.5-3.352-3.352-3.352H9.937a3.35 3.35 0 0 0-3.352 3.352v9.972c0 1.85 1.501 3.352 3.353 3.352h4.367a3.35 3.35 0 0 0 3.352-3.353"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.686 14.546S3.12 13.521 3.12 12s.566-2.546.566-2.546M20.554 14.546s.566-1.025.566-2.546-.566-2.546-.566-2.546M12.121 16.9v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneRingVibration1TwoTone;
