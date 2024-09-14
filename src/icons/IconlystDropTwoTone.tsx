import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropTwoTone = ({
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
      d="M16.57 3.572c-.371-.224-.842-.14-1.146.168L12 7.222 8.576 3.74c-.304-.309-.775-.392-1.146-.168A9.148 9.148 0 0 0 12 20.555a9.148 9.148 0 0 0 4.57-16.983"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.337 9.623-2.333-2.4-2.4 2.4a3.46 3.46 0 0 0 0 4.866 3.38 3.38 0 0 0 4.8 0 3.525 3.525 0 0 0-.067-4.866"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDropTwoTone;
