import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSearchBroken = ({
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
      d="M16.222 3v2.962M8.951 3v2.962M10.996 20.999H8.777c-2.643 0-4.294-1.506-4.294-4.255V8.599c0-1.743.685-2.975 1.878-3.63M13.37 4.418H8.973M20.684 11.622V8.597c.008-2.707-1.635-4.179-4.286-4.179h-.152M16.83 9.9H8.334"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.62 14.653a2.84 2.84 0 1 1 0 5.681 2.84 2.84 0 0 1 0-5.68"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.554 19.573 19.984 21"
    />
  </Svg>
);
export default IconlystCalendarSearchBroken;
