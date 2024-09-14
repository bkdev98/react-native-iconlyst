import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone3Light = ({
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
      d="M6.066 11.135a5.933 5.933 0 1 1 11.867 0l.001 1.191c0 .705.155 1.4.455 2.038l.422.895a2.063 2.063 0 0 1-1.866 2.94h-9.89a2.062 2.062 0 0 1-1.866-2.94l.421-.895c.3-.637.455-1.333.455-2.038z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.2 18.2a2.8 2.8 0 0 0 5.6 0M13.604 5.414v-.81a1.605 1.605 0 0 0-3.21 0v.81"
    />
  </Svg>
);
export default IconlystRingtone3Light;
