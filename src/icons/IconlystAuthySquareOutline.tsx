import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAuthySquareOutline = ({
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
      d="M9.995 16.75c-.19 0-.38-.07-.53-.22l-2.17-2.17a3.52 3.52 0 0 1-1.05-2.53c0-.96.38-1.87 1.05-2.53.67-.68 1.57-1.05 2.53-1.05s1.86.37 2.53 1.05l2.17 2.17c.29.29.29.77 0 1.06s-.77.29-1.06 0l-2.17-2.17c-.39-.4-.92-.61-1.47-.61a2.082 2.082 0 0 0-2.08 2.08c0 .55.22 1.08.61 1.47l2.17 2.17c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <Path
      fill={props.color}
      d="M14.166 15.751c-.95 0-1.85-.37-2.53-1.05l-2.17-2.17a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.17 2.17c.78.78 2.16.78 2.94 0 .39-.39.61-.91.61-1.47s-.22-1.08-.61-1.47l-2.17-2.17a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.17 2.17a3.58 3.58 0 0 1 1.05 2.53c0 .94-.37 1.86-1.05 2.53-.67.67-1.59 1.05-2.53 1.05"
    />
  </Svg>
);
export default IconlystAuthySquareOutline;
