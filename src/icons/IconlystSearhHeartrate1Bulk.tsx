import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearhHeartrate1Bulk = ({
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
      d="M11.126 2.498c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.795-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.956 11.578h1.04c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.58a.75.75 0 0 0-.71.52l-.48 1.42-1.66-4.98a.75.75 0 0 0-1.43 0l-1.01 3.04h-1.04c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h1.58c.32 0 .61-.2.71-.51l.48-1.42 1.66 4.98c.1.31.39.51.71.51s.61-.2.71-.51z"
    />
  </Svg>
);
export default IconlystSearhHeartrate1Bulk;
