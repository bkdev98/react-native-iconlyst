import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsConnectedBroken = ({
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
      d="M10.789 15.456v3.496a1.395 1.395 0 0 1-2.792 0V13.43H6.99a3.95 3.95 0 0 1-3.128-1.538 1.85 1.85 0 0 1-.362-1.12V8.677c0-.403.12-.802.363-1.122a3.68 3.68 0 0 1 2.746-1.457c2.122-.098 4.18 1.74 4.18 3.862v2.248M6.057 9.171v1.223M14.03 11.49V6.865c0-2.122 2.057-3.96 4.18-3.862a3.68 3.68 0 0 1 2.745 1.456c.243.321.363.72.363 1.122v2.096c0 .402-.119.8-.362 1.12a3.94 3.94 0 0 1-3.128 1.538H16.82M18.76 6.077v1.222M21.5 16.876a3.93 3.93 0 1 0-.9 2.505"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.06 16.824.932.933 1.917-1.92"
    />
  </Svg>
);
export default IconlystAirpodsConnectedBroken;
