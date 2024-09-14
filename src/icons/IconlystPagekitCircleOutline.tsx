import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPagekitCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.433 7.688a.75.75 0 0 1 .75-.75h5.635a.75.75 0 0 1 .75.75v7.172a.75.75 0 0 1-.75.75h-2.6a.75.75 0 0 1 0-1.5h1.85V8.438H9.933v7.123h1.85a.75.75 0 0 1 0 1.5h-2.6a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPagekitCircleOutline;
