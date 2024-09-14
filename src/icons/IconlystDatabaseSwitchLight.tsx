import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSwitchLight = ({
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
      strokeWidth={1.5}
      d="M10.319 9.25c4.046 0 7.327-1.323 7.327-2.955s-3.28-2.956-7.328-2.956c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.991 12v5.774s0 2.887 7.293 2.887M17.646 12V6.225"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.991 6.226v5.773s0 2.887 7.293 2.887M19.398 20.553v-5.404M21.009 18.999l-1.613 1.556-1.612-1.556M14.89 15.228v5.403M13.276 16.782l1.613-1.555 1.612 1.555"
    />
  </Svg>
);
export default IconlystDatabaseSwitchLight;
