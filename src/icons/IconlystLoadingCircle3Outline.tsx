import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle3Outline = ({
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
      d="M6.446 17.945a.75.75 0 0 1 .257 1.029l-.006.01a.75.75 0 1 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M3.958 14.153a.75.75 0 0 1 .257 1.029l-.005.01a.75.75 0 1 1-1.287-.772l.006-.01a.75.75 0 0 1 1.03-.257M3.716 9.583a.75.75 0 0 1 .257 1.029l-.006.01a.75.75 0 1 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M5.761 5.437a.75.75 0 0 1 .257 1.029l-.006.01a.75.75 0 0 1-1.286-.772l.006-.01a.75.75 0 0 1 1.029-.257M9.577 2.836a.75.75 0 0 1 .258 1.028l-.006.01a.75.75 0 0 1-1.286-.771l.005-.01a.75.75 0 0 1 1.03-.257M11.441 2.999a.75.75 0 0 1 .751-.749c5.386.007 9.744 4.379 9.737 9.764-.008 5.385-4.379 9.743-9.764 9.736a9.7 9.7 0 0 1-3.49-.649.75.75 0 1 1 .54-1.4 8.25 8.25 0 0 0 11.213-7.69A8.25 8.25 0 0 0 12.19 3.75a.75.75 0 0 1-.749-.751"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle3Outline;
