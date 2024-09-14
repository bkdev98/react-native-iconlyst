import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardTasksBulk = ({
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
      d="M16.217 2.5H7.783C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.283 5.526h8.433c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.017 10.816h-4.31a.75.75 0 0 1 0-1.5h4.31a.75.75 0 0 1 0 1.5m0 5.239h-4.31a.75.75 0 0 1 0-1.5h4.31a.75.75 0 0 1 0 1.5m-6.593-6.947-1.603 1.604a.754.754 0 0 1-1.061-.001l-.824-.824a.751.751 0 0 1 1.062-1.06l.293.293 1.072-1.072a.75.75 0 0 1 1.061 1.06m0 5.242-1.603 1.603a.75.75 0 0 1-1.061 0l-.823-.823a.749.749 0 1 1 1.06-1.06l.293.292 1.073-1.072a.75.75 0 0 1 1.061 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoardTasksBulk;
