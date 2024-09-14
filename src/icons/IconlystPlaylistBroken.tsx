import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistBroken = ({
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
      d="M3.25 7.088A3.11 3.11 0 0 1 6.358 3.98h5.953a3.11 3.11 0 0 1 3.108 3.108v9.824a3.11 3.11 0 0 1-3.108 3.108H6.358a3.11 3.11 0 0 1-3.108-3.108v-6.437M21.25 8.922v6.155M18.332 6.543V12M18.332 14.729v2.728"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.004 13.732a1.73 1.73 0 1 0 1.73-1.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.465 13.73V8.538s.45 1.17 1.659 1.416"
    />
  </Svg>
);
export default IconlystPlaylistBroken;
