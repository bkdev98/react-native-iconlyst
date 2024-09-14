import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartcontractTwoTone = ({
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
      d="M17.25 3h-9.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 4.5H3.5M5.75 12H4.5m1.25 7.5H3.5M21.5 19.5h-2.25M20.5 12h-1.25m2.25-7.5h-2.25M8.75 8.5h4.5m-4.5 7h7.5M8.75 12h7.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSmartcontractTwoTone;
