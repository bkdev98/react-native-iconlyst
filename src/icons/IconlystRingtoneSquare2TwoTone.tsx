import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquare2TwoTone = ({
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
      d="M8.283 3h8.435C19.666 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.283C5.335 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.344 3 8.283 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 6.651a3.903 3.903 0 0 0-3.902 3.903v.783c0 .464-.103.922-.3 1.341l-.277.589A1.357 1.357 0 0 0 9.248 15.2h6.505a1.357 1.357 0 0 0 1.227-1.934l-.277-.589c-.197-.42-.3-.877-.3-1.34v-.784A3.9 3.9 0 0 0 12.5 6.651M10.658 15.506a1.842 1.842 0 0 0 3.684 0"
    />
  </Svg>
);
export default IconlystRingtoneSquare2TwoTone;
