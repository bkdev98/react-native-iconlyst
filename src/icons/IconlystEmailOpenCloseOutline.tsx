import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenCloseOutline = ({
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
      d="M15.407 20.67H7.393a4.93 4.93 0 0 1-3.6-1.334 4.65 4.65 0 0 1-1.291-3.386v-5.283c0-.599.153-1.187.446-1.71.26-.47.623-.874 1.063-1.183l5.567-3.875a3.15 3.15 0 0 1 3.63 0l2.387 1.656a.75.75 0 1 1-.856 1.233l-2.393-1.66a1.65 1.65 0 0 0-1.907 0l-5.57 3.878a2.04 2.04 0 0 0-.61.684c-.17.298-.258.635-.257.978v5.283a3.19 3.19 0 0 0 .85 2.323 3.47 3.47 0 0 0 2.521.9h8.033a3.48 3.48 0 0 0 2.523-.9 3.19 3.19 0 0 0 .85-2.323V14.42a.75.75 0 0 1 1.5 0v1.53a4.64 4.64 0 0 1-1.292 3.387 4.93 4.93 0 0 1-3.58 1.334"
    />
    <Path
      fill={props.color}
      d="M16.94 15.465a5.062 5.062 0 1 1 0-10.124 5.062 5.062 0 0 1 0 10.124m0-8.623a3.562 3.562 0 1 0 0 7.124 3.562 3.562 0 0 0 0-7.124"
    />
    <Path
      fill={props.color}
      d="M17.968 12.188a.75.75 0 0 1-.53-.22l-.5-.5-.5.5a.75.75 0 0 1-1.063-1.06l.5-.5-.5-.5a.751.751 0 0 1 1.062-1.061l.5.5.5-.5a.751.751 0 0 1 1.062 1.06l-.5.5.5.5a.75.75 0 0 1-.53 1.28M11.418 15.509a3.8 3.8 0 0 1-2.361-.825L3.134 9.909a.75.75 0 1 1 .942-1.168l5.916 4.77a2.3 2.3 0 0 0 2.856 0l.678-.55a.75.75 0 1 1 .944 1.165l-.684.554a3.8 3.8 0 0 1-2.368.829"
    />
  </Svg>
);
export default IconlystEmailOpenCloseOutline;
