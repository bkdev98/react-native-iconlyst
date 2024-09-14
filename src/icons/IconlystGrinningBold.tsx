import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrinningBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.225 9.8a.976.976 0 0 1-.692-1.662.977.977 0 0 1 1.668.687.976.976 0 0 1-.976.975M12 17.242c-2.268 0-4.114-1.968-4.114-4.387a.5.5 0 0 1 .5-.5h7.23a.5.5 0 0 1 .5.5c0 2.419-1.846 4.387-4.116 4.387M7.75 8.825a.96.96 0 0 1 .283-.687.977.977 0 0 1 1.668.687.976.976 0 0 1-1.951 0M16.217 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h8.433c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrinningBold;
