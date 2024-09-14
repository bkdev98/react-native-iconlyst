import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenSignLight = ({
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
      d="M16.903 8.951 13.273 5.1m-1.958-.001L7.676 8.95m9.242.001H7.08c-2.071 0-3.37 1.467-3.37 3.543v4.963C3.71 19.534 5.004 21 7.08 21h9.836c2.078 0 3.372-1.466 3.372-3.543v-4.963c0-2.075-1.294-3.543-3.371-3.543M11.013 4.28a1.28 1.28 0 1 0 2.559 0 1.28 1.28 0 0 0-2.559 0M9.43 13.043v.01M14.57 13.043v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.662 16.654a2.2 2.2 0 0 1-1.704.805c-.687 0-1.3-.313-1.705-.805"
    />
  </Svg>
);
export default IconlystOpenSignLight;
