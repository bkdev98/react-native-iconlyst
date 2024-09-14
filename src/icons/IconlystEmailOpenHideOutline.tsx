import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenHideOutline = ({
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
      fill={props.color}
      d="M15.407 20.67H7.37a4.93 4.93 0 0 1-3.577-1.334 4.65 4.65 0 0 1-1.29-3.386v-5.283c-.001-.599.153-1.187.445-1.71.26-.47.624-.874 1.063-1.183l5.567-3.875a3.15 3.15 0 0 1 3.63 0l2.387 1.656a.75.75 0 1 1-.856 1.233l-2.393-1.66a1.65 1.65 0 0 0-1.907 0l-5.57 3.878a2.04 2.04 0 0 0-.61.684c-.17.298-.258.635-.257.978v5.283a3.19 3.19 0 0 0 .85 2.323 3.47 3.47 0 0 0 2.521.9h8.013a3.52 3.52 0 0 0 2.543-.9 3.2 3.2 0 0 0 .85-2.323V14.42a.75.75 0 0 1 1.5 0v1.53a4.65 4.65 0 0 1-1.29 3.387 4.93 4.93 0 0 1-3.58 1.334"
    />
    <Path
      fill={props.color}
      d="M16.939 15.466a5.061 5.061 0 1 1 0-10.123 5.061 5.061 0 0 1 0 10.123m0-8.623a3.562 3.562 0 1 0 0 7.124 3.562 3.562 0 0 0 0-7.124"
    />
    <Path
      fill={props.color}
      d="M18.396 11.154h-2.91a.75.75 0 1 1 0-1.5h2.91a.75.75 0 1 1 0 1.5M11.419 15.51a3.8 3.8 0 0 1-2.361-.826L3.135 9.91a.75.75 0 0 1 .942-1.168l5.916 4.77a2.3 2.3 0 0 0 2.856 0l.678-.55a.75.75 0 0 1 .944 1.165l-.684.553a3.8 3.8 0 0 1-2.368.83"
    />
  </Svg>
);
export default IconlystEmailOpenHideOutline;
