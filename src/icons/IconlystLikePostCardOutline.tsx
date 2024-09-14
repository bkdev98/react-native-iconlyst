import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikePostCardOutline = ({
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
      fillRule="evenodd"
      d="M11.014 7.515c-.425.137-.692.643-.495 1.262.16.497.621 1.005 1.141 1.427.206.167.404.308.565.414.163-.108.364-.25.572-.42.524-.426.982-.932 1.134-1.417l.001-.003c.197-.616-.07-1.124-.496-1.262a.85.85 0 0 0-.763.13.75.75 0 0 1-.896-.002.85.85 0 0 0-.763-.129m1.212 3.984-.36.658-.003-.002-.006-.003-.022-.013-.074-.042a8.783 8.783 0 0 1-1.047-.728c-.576-.468-1.325-1.207-1.623-2.134v-.001c-.37-1.16.025-2.684 1.465-3.147h.002a2.35 2.35 0 0 1 1.669.092 2.36 2.36 0 0 1 1.66-.094l.005.002c1.438.462 1.84 1.984 1.47 3.145-.291.923-1.043 1.662-1.619 2.13a9 9 0 0 1-1.125.776l-.021.012-.007.004-.002.001-.001.001zm0 0 .36.657a.75.75 0 0 1-.72.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.8 21.765H8.654a4.2 4.2 0 0 1-4.293-4.473V6.739a4.2 4.2 0 0 1 4.293-4.474H15.8a4.2 4.2 0 0 1 4.293 4.474v10.553a4.2 4.2 0 0 1-4.292 4.473m-7.145-18a2.68 2.68 0 0 0-2.793 2.974v10.553a2.68 2.68 0 0 0 2.793 2.973H15.8a2.678 2.678 0 0 0 2.794-2.973V6.739a2.68 2.68 0 0 0-2.793-2.974z"
    />
    <Path
      fill={props.color}
      d="M13.989 18.04h-3.524a.75.75 0 0 1 0-1.5h3.524a.75.75 0 0 1 0 1.5M15.146 15.303H9.308a.75.75 0 1 1 0-1.5h5.838a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystLikePostCardOutline;
