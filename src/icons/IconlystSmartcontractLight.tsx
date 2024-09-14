import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartcontractLight = ({
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
      d="M16.75 3h-9.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5.25 4.5H3M5.25 12H4m1.25 7.5H3M21 19.5h-2.25M20 12h-1.25M21 4.5h-2.25M8.25 8.5h4.5m-4.5 7h7.5M8.25 12h7.5"
    />
  </Svg>
);
export default IconlystSmartcontractLight;
