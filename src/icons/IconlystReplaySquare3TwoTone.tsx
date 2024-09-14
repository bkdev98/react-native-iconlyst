import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare3TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.624 8.957c0-2.333-1.453-3.98-3.788-3.98h-6.68c-2.328 0-3.788 1.647-3.788 3.98v3.248M5.37 15.541c0 2.333 1.452 3.98 3.786 3.98h6.68c2.336 0 3.789-1.647 3.789-3.98v-3.248"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.501 14.178-1.885-1.885-1.876 1.876M3.5 10.32l1.885 1.886 1.876-1.875"
    />
  </Svg>
);
export default IconlystReplaySquare3TwoTone;
