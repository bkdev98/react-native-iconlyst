import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHelpTwoTone = ({
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
      d="M11.824 13.109c3.599 3.598 4.669-.819 6.96 1.47 2.21 2.21 3.48 2.652.682 5.45-.352.282-2.58 3.673-10.408-4.154-7.83-7.827-4.442-10.058-4.16-10.408 2.805-2.806 3.24-1.529 5.45.679 2.29 2.292-2.123 3.365 1.476 6.963"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.58 9.533v.044M16.579 7.436c-.009-.665.596-.946 1.045-1.202.549-.303.92-.784.92-1.452 0-.989-.8-1.782-1.782-1.782-.99 0-1.783.793-1.783 1.782"
    />
  </Svg>
);
export default IconlystPhoneCallHelpTwoTone;
