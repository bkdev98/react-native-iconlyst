import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSquareOutline = ({
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
      d="M16.824 21.755h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28h-8.44z"
    />
    <Path
      fill={props.color}
      d="M12.514 17.755c-2.6 0-4.91-1.74-5.62-4.24-.08-.28.02-.62.25-.81.23-.2.6-.24.87-.09 1.47.79 3.33.51 4.52-.68s1.47-3.05.68-4.52c-.14-.27-.1-.63.09-.87.19-.23.53-.34.82-.25 2.49.71 4.23 3.02 4.23 5.62 0 3.22-2.62 5.85-5.85 5.85zm-3.48-3.26a4.37 4.37 0 0 0 3.48 1.76c2.4 0 4.35-1.95 4.35-4.35 0-1.4-.68-2.68-1.76-3.49.24 1.64-.29 3.36-1.51 4.57a5.38 5.38 0 0 1-4.57 1.5zM10.494 8.585c-.2 0-.4-.08-.54-.23-.29-.3-.28-.78.02-1.07.3-.28.77-.28 1.06.02.29.31.27.78-.03 1.07a.75.75 0 0 1-.52.21z"
    />
    <Path
      fill={props.color}
      d="M9.574 11.475a.75.75 0 0 1-.52-.21c-.3-.29-.32-.77-.03-1.06.29-.3.76-.32 1.06-.03h.01c.3.3.31.77.03 1.07-.15.15-.35.23-.54.23z"
    />
  </Svg>
);
export default IconlystMoonSquareOutline;
