import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPlayBold = ({
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
      d="m15.31 10.901-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06m-3.46-5.72c-4.5 0-8.16 3.66-8.16 8.16s3.66 8.16 8.16 8.16c.521 0 1.03-.051 1.52-.144.186-.035.285-.238.223-.418-.431-1.253-.26-2.839-.123-4.088.13-1.01.67-1.82 1.47-2.29.82-.46 1.82-.51 2.73-.12a9 9 0 0 1 1.668.887c.173.118.415.038.463-.166a8 8 0 0 0 .21-1.82c0-4.5-3.66-8.16-8.16-8.16M9.744 3.75h4.208a.75.75 0 0 0 0-1.5H9.744a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.41 16.93a.2.2 0 0 0-.102.024c-.07.039-.096.138-.106.213-.101.894-.1 1.863.002 2.867.012.088.048.168.095.196.046.027.15.034.306-.027a6.9 6.9 0 0 0 2.02-1.284c.085-.078.185-.2.185-.337-.001-.135-.098-.253-.18-.327a6.6 6.6 0 0 0-2.028-1.28.5.5 0 0 0-.192-.045m-.02 4.82c-.305 0-.595-.076-.854-.23-.451-.265-.751-.746-.822-1.317a15 15 0 0 1-.001-3.217c.076-.587.386-1.07.85-1.335.478-.272 1.066-.294 1.614-.061a8.1 8.1 0 0 1 2.468 1.56c.424.386.662.894.665 1.425.002.534-.235 1.047-.667 1.446l-.002.002a8.4 8.4 0 0 1-2.474 1.57 2.1 2.1 0 0 1-.776.158"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchPlayBold;
