import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchEditLight = ({
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
      d="M19.795 12.71a8.225 8.225 0 0 1-16.377-1.072 8.224 8.224 0 0 1 7.2-8.16M17.236 17.662 20.582 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.272 10.303-.89.149a.996.996 0 0 1-1.155-1.09l.099-.918c.048-.444.233-.86.53-1.193l3.505-3.859a1.22 1.22 0 0 1 1.726-.067l.818.758c.495.458.525 1.23.067 1.726L16.51 9.62c-.324.36-.76.602-1.238.682"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchEditLight;
