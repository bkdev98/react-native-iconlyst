import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinMapLight = ({
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
      d="m19.85 12.834.928 4.643a2.946 2.946 0 0 1-2.889 3.524H6.111c-1.86 0-3.254-1.7-2.889-3.524l.929-4.643a2.95 2.95 0 0 1 2.89-2.37h9.919c1.405 0 2.613.992 2.89 2.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.41 10.96 7.148 4.467 7.46 4.661M12.559 15.426l-8.514 4.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.78 5.484a2.484 2.484 0 1 1-4.968 0 2.484 2.484 0 0 1 4.967 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.295 7.969v4.667"
    />
  </Svg>
);
export default IconlystPinMapLight;
