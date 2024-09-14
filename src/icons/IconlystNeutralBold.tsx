import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeutralBold = ({
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
      d="M15.225 10.2a.976.976 0 0 1-.692-1.662.977.977 0 0 1 1.668.687.976.976 0 0 1-.976.975m-.345 5.411H9.121a.75.75 0 1 1 0-1.5h5.759a.75.75 0 0 1 0 1.5M7.75 9.225a.97.97 0 0 1 .283-.687.977.977 0 0 1 1.668.687.976.976 0 0 1-1.951 0M16.217 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.306 2.123 5.526 5.283 5.526h8.433c3.16 0 5.284-2.22 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeutralBold;