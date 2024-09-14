import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella1Broken = ({
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
      d="M21.48 12.074a1.463 1.463 0 0 1-1.448 1.695H4.968a1.464 1.464 0 0 1-1.448-1.695c.757-4.522 4.488-7.956 8.98-7.956 4.49 0 8.223 3.434 8.98 7.956"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 4.118s2.513 2.128 3.284 6.834M8.994 13.763c0-2.97.694-5.207 1.464-6.775M16.462 19.15a1.981 1.981 0 0 1-3.962 0v-5.38"
    />
  </Svg>
);
export default IconlystUmbrella1Broken;
