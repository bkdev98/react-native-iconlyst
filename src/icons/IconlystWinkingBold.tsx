import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingBold = ({
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
      d="M12 17.301c-2.269 0-4.114-1.968-4.114-4.387a.5.5 0 0 1 .5-.5h7.229a.5.5 0 0 1 .5.5c0 2.419-1.845 4.387-4.115 4.387M7.636 8.498a.75.75 0 0 1 .75-.75h1.592a.75.75 0 0 1 0 1.5H8.386a.75.75 0 0 1-.75-.75m6.696-.659A.977.977 0 0 1 16 8.526a.976.976 0 1 1-1.668-.687M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.306 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinkingBold;
