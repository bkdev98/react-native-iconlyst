import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMap3DBroken = ({
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
      d="M12.75 3c-1.108 0-2.181.08-3.151.22-3.22.45-5.505 1.581-5.505 2.896 0 1.328 2.284 2.44 5.505 2.89V21M15.9 20.999V9.005c3.22-.45 5.505-1.563 5.505-2.89 0-1.315-2.284-2.447-5.505-2.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.599 15.196c.97-.139 2.043-.22 3.151-.22s2.18.081 3.15.22M15.9 21c3.221-.45 5.506-1.581 5.506-2.908v-2.994M21.405 12.105V6.117M9.599 21c-3.22-.45-5.505-1.581-5.505-2.908v-2.994M4.094 6.117v5.988"
    />
  </Svg>
);
export default IconlystMap3DBroken;
