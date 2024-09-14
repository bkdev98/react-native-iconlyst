import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundCircleBulk = ({
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
      d="M12 2.563c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.398 11.191c-.009-.013-.012-.03-.022-.043a1.445 1.445 0 0 1 .21-2.01 1.45 1.45 0 0 1 2.038.187.754.754 0 0 0 1.057.094.75.75 0 0 0 .093-1.057 2.95 2.95 0 0 0-4.154-.372 2.93 2.93 0 0 0-.878 3.243h-.787a.75.75 0 0 0 0 1.5h1.533c.073.361.027.738-.17 1.034-.342.447-.726.897-1.174 1.371a.749.749 0 0 0 .545 1.265h4.396a.75.75 0 0 0 0-1.5h-2.752q.105-.13.205-.264a2.93 2.93 0 0 0 .47-1.906h1.344a.75.75 0 0 0 0-1.5h-1.925q-.014-.021-.029-.042"
    />
  </Svg>
);
export default IconlystPoundCircleBulk;
