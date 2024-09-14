import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMap3DLight = ({
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
      d="M15.65 21V9.006c3.221-.45 5.506-1.562 5.506-2.89 0-1.315-2.285-2.447-5.505-2.896-.97-.14-2.043-.22-3.15-.22-1.109 0-2.182.08-3.152.22-3.22.45-5.505 1.581-5.505 2.896 0 1.328 2.284 2.44 5.505 2.89V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.349 15.194c.969-.139 2.043-.22 3.151-.22s2.18.081 3.15.22M15.65 21c3.22-.45 5.505-1.58 5.505-2.907V6.117M3.844 6.117v11.976c0 1.327 2.285 2.457 5.505 2.908"
    />
  </Svg>
);
export default IconlystMap3DLight;
