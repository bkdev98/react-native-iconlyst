import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSendngOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M11.257 20.85a.75.75 0 1 1 0-1.5h5.42a3.58 3.58 0 0 0 2.59-1.044A4.48 4.48 0 0 0 20.5 15.09V8.91c0-2.47-1.612-4.264-3.833-4.264H7.832C5.611 4.646 4 6.44 4 8.91v1.68a.75.75 0 1 1-1.5 0V8.91a5.44 5.44 0 0 1 5.332-5.764h8.835A5.44 5.44 0 0 1 22 8.91v6.18a5.96 5.96 0 0 1-1.675 4.275 5.05 5.05 0 0 1-3.646 1.482h-5.422z"
    />
    <Path
      fill={props.color}
      d="M12.222 13.615a2.82 2.82 0 0 1-1.752-.613L6.464 9.744a.75.75 0 0 1 .947-1.164l4 3.252a1.31 1.31 0 0 0 1.634-.006l4.03-3.248a.75.75 0 0 1 .941 1.168l-4.034 3.252c-.5.4-1.12.617-1.76.617M3.541 20.854a.75.75 0 1 1 0-1.5H6.71a.75.75 0 0 1 0 1.5zm6.449-2.985H5.65a.75.75 0 1 1 0-1.5h4.345a.75.75 0 1 1 0 1.5zm-3.267-2.984H3.25a.75.75 0 1 1 0-1.5h3.473a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystEmailSendngOutline;
