import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileTouchIdOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.201 6.902A4.37 4.37 0 0 1 8.57 2.533h.81a.75.75 0 1 1 0 1.5h-.81A2.87 2.87 0 0 0 5.7 6.903l.001 10.763a2.87 2.87 0 0 0 2.868 2.867h5.515a2.87 2.87 0 0 0 2.868-2.868l-.001-4.464a.75.75 0 0 1 1.5 0l.001 4.464a4.37 4.37 0 0 1-4.368 4.368H8.57a4.37 4.37 0 0 1-4.368-4.367z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.771 4.033a3.02 3.02 0 0 0-2.633 1.533.75.75 0 1 1-1.304-.741 4.524 4.524 0 0 1 5.681-1.944.75.75 0 1 1-.578 1.384 3 3 0 0 0-1.166-.232M18.427 4.268a.75.75 0 0 1 1.045.18 4.5 4.5 0 0 1 .826 2.608V9.86a.75.75 0 1 1-1.5 0V7.056c0-.65-.204-1.25-.551-1.743a.75.75 0 0 1 .18-1.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.502 7.197a2.237 2.237 0 1 1 4.474 0V9.82a.75.75 0 0 1-1.5 0V7.197a.737.737 0 1 0-1.474 0v.398a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.996 6.775a.75.75 0 0 1 .75.75v1.466a.75.75 0 0 1-1.5 0V7.525a.75.75 0 0 1 .75-.75m2.256 1.856a.75.75 0 0 1 .75.75v1.338a.75.75 0 0 1-1.5 0V9.381a.75.75 0 0 1 .75-.75M10.316 17.536a1.011 1.011 0 1 1 2.023 0 1.011 1.011 0 0 1-2.023 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMobileTouchIdOutline;
