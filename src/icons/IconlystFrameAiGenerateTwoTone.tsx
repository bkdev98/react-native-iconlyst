import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameAiGenerateTwoTone = ({
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
      strokeWidth={1.5}
      d="M17.568 3.024c.007-.032.053-.032.06 0a4.3 4.3 0 0 0 3.348 3.348c.032.007.032.053 0 .06a4.3 4.3 0 0 0-3.348 3.348c-.007.032-.053.032-.06 0a4.3 4.3 0 0 0-3.348-3.348c-.032-.007-.032-.053 0-.06a4.3 4.3 0 0 0 3.348-3.348Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3 6.402h7.55M3 18.483h17.115M17.598 21v-7.55M5.517 21V3.885"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFrameAiGenerateTwoTone;
