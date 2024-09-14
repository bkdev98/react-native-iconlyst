import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBilberryOutline = ({
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
      d="M7.139 6.81a4.972 4.972 0 0 1 5.568 5.625.75.75 0 1 1-1.485-.21q.065-.454.003-.934a3.472 3.472 0 1 0-3.486 3.922.75.75 0 0 1-.017 1.5A4.973 4.973 0 0 1 7.14 6.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 13.306a3.472 3.472 0 1 1 0 6.944 3.472 3.472 0 0 1 0-6.944m4.972 3.472a4.972 4.972 0 1 0-9.944 0 4.972 4.972 0 0 0 9.944 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.723 8.305a3.47 3.47 0 0 0-3.94 2.93.75.75 0 1 1-1.485-.22 4.972 4.972 0 1 1 4.898 5.697.75.75 0 1 1 .008-1.5 3.473 3.473 0 0 0 .52-6.907"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.255 8.932v.13a.75.75 0 1 0 1.501 0l-.001-.13v-.028c.002-1.215.218-2.514.956-3.489.663-.874 1.846-1.612 4.047-1.662-.092 1.067-.453 2.272-1.445 3.18a.75.75 0 0 0 1.012 1.107c1.691-1.547 1.979-3.652 1.959-5.04a.75.75 0 0 0-.718-.738c-3.03-.129-4.94.783-6.05 2.247a5.4 5.4 0 0 0-.511.819 5.4 5.4 0 0 0-.51-.819c-1.11-1.464-3.02-2.376-6.05-2.247a.75.75 0 0 0-.719.739c-.02 1.387.268 3.492 1.96 5.039a.75.75 0 1 0 1.011-1.107c-.992-.908-1.353-2.113-1.445-3.18 2.2.05 3.384.788 4.047 1.662.739.975.954 2.274.956 3.489zM7.775 11.72a.75.75 0 0 0-.75-.75h-.013a.75.75 0 0 0 0 1.5h.013a.75.75 0 0 0 .75-.75M17.933 10.805a.75.75 0 0 0-.75-.75h-.012a.75.75 0 0 0 0 1.5h.012a.75.75 0 0 0 .75-.75M12.01 15.921a.75.75 0 0 0-.75-.75h-.013a.75.75 0 0 0 0 1.5h.012a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBilberryOutline;
