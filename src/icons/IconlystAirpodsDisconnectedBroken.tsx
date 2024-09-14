import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsDisconnectedBroken = ({
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
      d="M10.789 15.456v3.496a1.396 1.396 0 0 1-2.792 0V13.43H6.99a3.95 3.95 0 0 1-3.128-1.538 1.85 1.85 0 0 1-.362-1.12V8.677c0-.403.121-.802.363-1.122a3.68 3.68 0 0 1 2.746-1.457c2.122-.098 4.18 1.74 4.18 3.862v2.248M6.057 9.171v1.223M16.512 17.935l1.058-1.058m0 0 1.058-1.06m-1.058 1.06 1.058 1.058m-1.058-1.058-1.058-1.06M17.57 20.806a3.93 3.93 0 1 1 3.025-1.42M14.03 11.49V6.865c0-2.122 2.057-3.96 4.18-3.862a3.68 3.68 0 0 1 2.745 1.456c.243.321.362.72.362 1.122v2.096c0 .402-.118.8-.36 1.12a3.95 3.95 0 0 1-3.13 1.538H16.82M18.763 6.077v1.222"
    />
  </Svg>
);
export default IconlystAirpodsDisconnectedBroken;
