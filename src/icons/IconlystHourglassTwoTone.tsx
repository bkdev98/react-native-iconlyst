import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHourglassTwoTone = ({
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
      d="M18.028 6.509c.147-1.854-.904-3.387-2.944-3.509h-4.85c-2.042.122-3.092 1.655-2.945 3.509.123 1.286 1.322 2.458 3.397 4.45q1 1.04 0 2.083c-2.075 1.992-3.274 3.163-3.397 4.45-.147 1.853.903 3.386 2.944 3.508h4.85c2.04-.122 3.092-1.655 2.945-3.509-.123-1.286-1.323-2.457-3.397-4.449q-1-1.042 0-2.083c2.074-1.992 3.274-3.164 3.397-4.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.658 9.39c-.246-.89-1.243-1.505-1.917-2.294-.614-.583-.201-1.617.645-1.617h2.543c.847 0 1.26 1.034.646 1.617-.675.789-1.671 1.404-1.917 2.294"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHourglassTwoTone;
