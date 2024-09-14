import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeSearchBroken = ({
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
      d="m15.468 16.258-1.431-1.431m0 .001a2.64 2.64 0 1 1-3.734-3.734 2.64 2.64 0 0 1 3.734 3.734M4.996 8.775v8.675a3.064 3.064 0 0 0 3.064 3.064h3.992M20.004 8.775v8.675a3.064 3.064 0 0 1-3.064 3.064h-1.216"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.956 13.974 4a2.38 2.38 0 0 0-2.948 0L3.5 9.956"
    />
  </Svg>
);
export default IconlystHomeSearchBroken;
