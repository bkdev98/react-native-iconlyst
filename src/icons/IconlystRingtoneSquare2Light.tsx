import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquare2Light = ({
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
      d="M7.783 3h8.435C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.166 21 16.217 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.844 3 7.783 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.651a3.903 3.903 0 0 0-3.902 3.903v.783c0 .464-.103.922-.3 1.341l-.277.589A1.357 1.357 0 0 0 8.748 15.2h6.505a1.357 1.357 0 0 0 1.227-1.934l-.277-.589c-.197-.42-.3-.877-.3-1.34v-.784A3.9 3.9 0 0 0 12 6.651M10.158 15.506a1.842 1.842 0 0 0 3.684 0"
    />
  </Svg>
);
export default IconlystRingtoneSquare2Light;
