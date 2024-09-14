import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSideBold = ({
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
      d="M16.198 15.114a.75.75 0 0 0-.04-1.061L13.946 12l2.212-2.054a.75.75 0 0 0 .04-1.061.75.75 0 0 0-1.06-.039l-2.804 2.604a.75.75 0 0 0 0 1.1l2.804 2.603a.75.75 0 0 0 1.06-.039M9.291 2.8a.3.3 0 0 1 .3-.3h6.625c3.16 0 5.284 2.22 5.284 5.526v7.947c0 3.306-2.123 5.527-5.283 5.527H9.591a.3.3 0 0 1-.3-.3zM7.782 21.2a.29.29 0 0 1-.3.293c-2.993-.136-4.982-2.32-4.982-5.52V8.027c0-3.2 1.99-5.383 4.982-5.52a.29.29 0 0 1 .3.294z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSideBold;
