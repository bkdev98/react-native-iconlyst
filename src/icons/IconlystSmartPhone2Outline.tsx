import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartPhone2Outline = ({
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
      d="M5.124 6.618A4.37 4.37 0 0 1 9.492 2.25h5.515a4.37 4.37 0 0 1 4.368 4.367v10.764a4.37 4.37 0 0 1-4.368 4.369H9.493a4.37 4.37 0 0 1-4.368-4.367zm1.5 0 .001 10.764a2.87 2.87 0 0 0 2.868 2.868h5.514a2.87 2.87 0 0 0 2.869-2.868l-.001-10.764a2.87 2.87 0 0 0-2.868-2.868H9.492a2.87 2.87 0 0 0-2.868 2.868"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 17.28a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartPhone2Outline;
