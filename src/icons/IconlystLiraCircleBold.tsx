import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.132 16.393h-1.403c-1.979 0-3.587-1.559-3.698-3.51H8.768a.75.75 0 0 1 0-1.5h1.242v-.88H8.768a.75.75 0 0 1 0-1.5h1.242v-.85a.75.75 0 0 1 1.5 0v.85h1.904a.75.75 0 0 1 0 1.5H11.51v.88h1.904a.75.75 0 0 1 0 1.5h-1.883a2.215 2.215 0 0 0 2.198 2.01h1.403a.75.75 0 0 1 0 1.5M12 2.562c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraCircleBold;
