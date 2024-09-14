import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplay2TwoTone = ({
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
      d="M12.136 15.613 9.5 18.25l2.636 2.635M12.865 8.884l2.636-2.636-2.636-2.635"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 6.25h-6a6 6 0 0 0-6 6c0 1.912.897 3.611 2.29 4.71M9.5 18.25h6a6 6 0 0 0 6-6 5.99 5.99 0 0 0-2.29-4.71"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplay2TwoTone;
