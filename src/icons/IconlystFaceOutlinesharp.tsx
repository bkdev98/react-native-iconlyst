import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceOutlinesharp = ({
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
      d="M12.25 4.139a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-10 8.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.618 8.409-1.933 6.552h3.61v1.5H9.526l-.569-.948 2.221-7.529zM15.886 11.063h1.51v1.5h-1.51zM6.433 11.063h1.51v1.5h-1.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceOutlinesharp;
