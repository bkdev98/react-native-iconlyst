import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSearchLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.044V8.463C21 5.7 19.155 3.45 16.418 3.45H7.582C4.845 3.45 3 5.7 3 8.463v6.181c0 2.765 1.845 5.014 4.582 5.006h3.436"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.31 8.716-3.998 3.252a2.07 2.07 0 0 1-2.574 0L6.705 8.715M19.552 19.105 21 20.549m-3.406-6.429a2.877 2.877 0 1 1 0 5.755 2.877 2.877 0 0 1 0-5.755"
    />
  </Svg>
);
export default IconlystEmailSearchLight;
