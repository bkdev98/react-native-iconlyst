import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateFileOutline = ({
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
      d="M16.005 21.75h-7.96a4.52 4.52 0 0 1-4.42-4.6V6.66c.06-2.44 2.07-4.41 4.49-4.41h5.67c.76 0 1.5.31 2.02.86l3.79 3.95c.5.52.78 1.21.78 1.94v8.16a4.54 4.54 0 0 1-4.38 4.59zm-7.88-18c-1.62 0-2.96 1.31-3 2.92v10.49a3.016 3.016 0 0 0 2.94 3.09h7.91a3.05 3.05 0 0 0 2.91-3.08V9c0-.34-.13-.66-.36-.9l-3.79-3.95c-.24-.25-.58-.4-.94-.4z"
    />
    <Path
      fill={props.color}
      d="M19.565 9.27h-2.74c-1.82 0-3.3-1.49-3.3-3.31V3.07c0-.41.34-.75.75-.75s.75.34.75.75v2.89c0 1 .81 1.81 1.8 1.81h2.74c.41 0 .75.34.75.75s-.34.75-.75.75M10.185 15.18c-.31 0-.59-.2-.7-.49l-.09-.26c-.28-.76-.88-1.36-1.64-1.64l-.26-.09a.76.76 0 0 1-.49-.7c0-.31.2-.59.49-.7l.26-.09c.76-.28 1.36-.88 1.64-1.64l.1-.26c.11-.29.39-.49.7-.49s.59.2.7.49l.09.26c.28.76.88 1.36 1.64 1.64l.26.09c.29.11.49.39.49.7s-.19.59-.49.7l-.25.09c-.76.28-1.36.88-1.64 1.64l-.09.25c-.11.29-.39.49-.7.49zM9.375 12c.3.23.58.5.81.81.23-.3.5-.58.81-.81-.3-.23-.58-.5-.81-.81-.23.3-.5.58-.81.81M15.155 16.97c-.33 0-.62-.22-.72-.53a.88.88 0 0 0-.6-.6.75.75 0 0 1-.53-.72c0-.33.22-.62.53-.72.29-.09.51-.31.6-.6.1-.32.39-.53.72-.53s.62.22.72.53c.09.29.31.52.6.6.32.1.53.39.53.72s-.22.62-.53.72c-.29.09-.51.31-.6.6a.75.75 0 0 1-.72.53"
    />
  </Svg>
);
export default IconlystGenerateFileOutline;
