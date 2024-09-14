import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSwitchTwoTone = ({
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
      strokeWidth={1.5}
      d="M10.819 9.25c4.046 0 7.327-1.323 7.327-2.955s-3.28-2.956-7.328-2.956c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.491 6.281v11.493s0 2.887 7.293 2.887M18.146 12V6.225"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.491 11.999s0 2.887 7.293 2.887M19.898 20.553v-5.404m1.61 3.85-1.611 1.556-1.613-1.556M15.39 15.228v5.403m-1.614-3.849 1.613-1.555L17 16.782"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseSwitchTwoTone;
