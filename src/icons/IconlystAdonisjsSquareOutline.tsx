import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdonisjsSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.02c0-3.45 2.22-5.77 5.53-5.77h8.43c3.31 0 5.53 2.32 5.53 5.77v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.27v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.02c0-2.59-1.58-4.27-4.03-4.27z"
    />
    <Path
      fill={props.color}
      d="M14.205 16.922c-.17 0-.34-.01-.51-.04-.27-.04-.54-.12-.81-.21-.33-.1-.62-.21-.87-.18-.31-.02-.59.08-.92.18-.4.12-.83.25-1.35.25-.77 0-1.52-.32-2.03-.87-.53-.58-.78-1.38-.7-2.18.05-.47.23-.86.38-1.21l.5-1.13c.51-1.15 1.01-2.3 1.52-3.44.36-.81 1.09-1.42 1.92-1.59.85-.18 1.7-.02 2.35.45.4.29.74.72.96 1.24.71 1.6 1.42 3.22 2.13 4.85.37.83.3 1.83-.17 2.61-.46.79-1.4 1.28-2.38 1.28zm-2.12-1.93c.44 0 .87.13 1.24.25.2.06.41.13.62.16.47.08 1.09-.07 1.35-.53.23-.37.26-.85.09-1.24-.71-1.62-1.42-3.24-2.13-4.85-.12-.27-.28-.49-.46-.62-.3-.22-.73-.29-1.16-.2-.36.08-.69.36-.86.73-.51 1.14-1.01 2.29-1.51 3.43l-.5 1.14c-.12.27-.23.52-.26.75-.04.37.08.76.32 1.02.23.24.6.38.98.38.27 0 .55-.08.86-.18.4-.12.85-.26 1.36-.25h.08z"
    />
  </Svg>
);
export default IconlystAdonisjsSquareOutline;
