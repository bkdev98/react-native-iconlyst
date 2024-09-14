import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle4Outline = ({
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
      d="M11.339 20.66a.75.75 0 0 1-.335 1.006l-.01.005a.75.75 0 1 1-.671-1.342l.01-.005a.75.75 0 0 1 1.006.336M15.689 19.964a.75.75 0 0 1 .257 1.03l-.006.01a.75.75 0 1 1-1.286-.773l.006-.01a.75.75 0 0 1 1.029-.257M6.423 18.02a.75.75 0 0 1 .257 1.028l-.006.01a.75.75 0 0 1-1.286-.772l.006-.01a.75.75 0 0 1 1.03-.257M19.548 17.333a.75.75 0 0 1 .257 1.029l-.006.01a.75.75 0 1 1-1.286-.772l.006-.01a.75.75 0 0 1 1.03-.257M9.588 2.74a.75.75 0 0 1 .257 1.03l-.005.01a.75.75 0 1 1-1.287-.772l.006-.01a.75.75 0 0 1 1.03-.257M5.73 5.372A.75.75 0 0 1 5.987 6.4l-.006.01a.75.75 0 0 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M18.854 4.685a.75.75 0 0 1 .257 1.03l-.006.009a.75.75 0 1 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M14.513 2.665a.75.75 0 0 1-.336 1.006l-.01.005a.75.75 0 1 1-.67-1.342l.01-.005a.75.75 0 0 1 1.006.336M21.372 8.52a.75.75 0 0 1 .257 1.03l-.006.009a.75.75 0 1 1-1.287-.772l.006-.01a.75.75 0 0 1 1.03-.257M3.661 9.563a.75.75 0 0 1 .258 1.029l-.006.01a.75.75 0 0 1-1.286-.772l.005-.01a.75.75 0 0 1 1.03-.257M3.908 14.185a.75.75 0 0 1 .257 1.03l-.006.009a.75.75 0 0 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M21.617 13.14a.75.75 0 0 1 .257 1.03l-.006.009a.75.75 0 1 1-1.286-.772l.005-.01a.75.75 0 0 1 1.03-.257"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle4Outline;
