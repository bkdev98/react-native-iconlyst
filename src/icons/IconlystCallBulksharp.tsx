import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallBulksharp = ({
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
      d="M8.582 10.805A8.2 8.2 0 0 0 10.558 14l-4.17 2.878c-2.85-3.276-4.419-7.32-3.905-10.063l.058-.16c.91-1.563 2.071-2.723 3.653-3.651l.39-.23 3.697 5.08z"
    />
    <Path
      fill={props.color}
      d="m13.94 16.15 2.946-1.695 5.227 3.855-.215.385c-.896 1.602-2.06 2.766-3.663 3.664l-.102.058-.12.005q-.27.013-.54.012c-3.983 0-7.995-2.002-11.086-5.556L10.56 14a9.3 9.3 0 0 0 3.382 2.15"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCallBulksharp;
