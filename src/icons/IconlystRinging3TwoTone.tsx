import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging3TwoTone = ({
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
      d="M6.403 10.384a6.097 6.097 0 1 1 12.194 0l.001 1.224c0 .723.16 1.439.468 2.094l.433.92a2.12 2.12 0 0 1-1.918 3.022H7.42A2.12 2.12 0 0 1 5.5 14.622l.433-.92c.309-.655.468-1.37.468-2.094z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3v1.286"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.936 6.481a7.2 7.2 0 0 1 2.116-2.648M20.063 6.481a7.2 7.2 0 0 0-2.116-2.648M9.621 18.122a2.878 2.878 0 0 0 5.755 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRinging3TwoTone;
