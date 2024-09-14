import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcLight = ({
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
      d="M16.902 8.95 13.272 5.1m-1.958 0L7.675 8.95m9.242.001H7.08c-2.071 0-3.37 1.467-3.37 3.543v4.963C3.71 19.534 5.004 21 7.08 21h9.836c2.078 0 3.372-1.466 3.372-3.543v-4.963c0-2.075-1.294-3.543-3.371-3.543M11.01 4.28a1.28 1.28 0 1 0 2.56-.001 1.28 1.28 0 0 0-2.56 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.103 13.58a1.969 1.969 0 1 0-2.786 2.786c.77.77 2.017.77 2.786 0M6.676 13.214l1.246 3.733 1.416-3.733 1.416 3.733L12 13.214"
    />
  </Svg>
);
export default IconlystWcLight;
