import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefreshLight = ({
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
      d="M20.287 10.435V8.821c0-2.654-1.771-4.815-4.4-4.815H7.4C4.77 4.006 3 6.166 3 8.82v5.936c0 2.655 1.772 4.815 4.4 4.807h4.165"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.366 14.327a3.053 3.053 0 1 0 2.952-.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.318 15.902v-1.69H21M16.744 9.063l-3.84 3.124a1.99 1.99 0 0 1-2.472 0L6.559 9.063"
    />
  </Svg>
);
export default IconlystEmailRefreshLight;
