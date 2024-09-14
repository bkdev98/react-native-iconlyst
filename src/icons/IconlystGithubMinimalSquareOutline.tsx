import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubMinimalSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M12.006 16.79c-2.65 0-5.74-1.21-5.74-4.62 0-.82.26-1.62.75-2.27-.17-.74-.11-1.51.19-2.21a.72.72 0 0 1 .48-.42c.22-.06 1.02-.19 2.51.73 1.19-.27 2.42-.27 3.61 0 1.49-.92 2.29-.8 2.51-.73.21.06.39.22.48.42.3.7.37 1.47.2 2.21.48.65.75 1.45.75 2.25 0 3.42-2.96 4.64-5.74 4.64M8.436 8.8c-.05.34-.01.68.11 1.01.1.27.04.57-.16.78-.4.42-.63.99-.62 1.58 0 2.9 3.25 3.12 4.24 3.12 1.27 0 4.24-.31 4.24-3.14 0-.58-.23-1.15-.62-1.56a.75.75 0 0 1-.16-.78c.12-.33.16-.68.11-1.02-.26.09-.66.26-1.21.63-.18.12-.4.16-.61.1a6.67 6.67 0 0 0-3.49 0c-.21.06-.43.02-.61-.1-.55-.36-.95-.54-1.21-.63z"
    />
  </Svg>
);
export default IconlystGithubMinimalSquareOutline;
