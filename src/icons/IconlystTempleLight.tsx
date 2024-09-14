import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTempleLight = ({
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
      d="M19.612 11.506a7.142 7.142 0 0 0-14.285 0M12.47 4.362 12.473 3M3.99 21h16.962M3.99 11.504h16.962M16.042 11.504V21m3.57-9.496V21m-7.14-9.496V21m-7.144-9.496V21m3.573-9.496V21"
    />
  </Svg>
);
export default IconlystTempleLight;
