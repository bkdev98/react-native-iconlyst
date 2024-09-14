import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceBoldsharp = ({
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
      d="M17.248 12.69a5.004 5.004 0 0 1-4.998 4.998 5.004 5.004 0 0 1-4.998-4.998v-.75h1.5v.75a3.5 3.5 0 0 0 3.498 3.498 3.5 3.5 0 0 0 3.498-3.498v-.75h1.5zM12.25 2.389c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75S22 17.515 22 12.139s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceBoldsharp;
