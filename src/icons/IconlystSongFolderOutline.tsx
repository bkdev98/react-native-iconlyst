import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongFolderOutline = ({
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
      d="M15.893 21.736h-7.3c-3.76 0-6.1-2.33-6.1-6.082V8.34c0-4.033 1.8-6.078 5.338-6.078h1.875a2.9 2.9 0 0 1 2.311 1.158l.855 1.138a1.41 1.41 0 0 0 1.114.555h2.666c3.653 0 5.355 1.87 5.355 5.885l-.026 4.66c-.005 3.748-2.336 6.078-6.088 6.078M7.84 3.762c-2.69 0-3.838 1.369-3.838 4.578v7.314c0 2.955 1.632 4.582 4.6 4.582h7.3c2.956 0 4.583-1.627 4.583-4.582l.026-4.66c0-3.193-1.045-4.381-3.855-4.381h-2.653a2.92 2.92 0 0 1-2.31-1.153l-.858-1.14a1.4 1.4 0 0 0-1.112-.558z"
    />
    <Path
      fill={props.color}
      d="M11.241 17.45a2.594 2.594 0 1 1 2.574-2.285 2.6 2.6 0 0 1-2.574 2.285m0-3.689a1.094 1.094 0 0 0-.127 2.181 1.1 1.1 0 0 0 1.216-.955 1.094 1.094 0 0 0-.954-1.217 1 1 0 0 0-.139-.012z"
    />
    <Path
      fill={props.color}
      d="M13.069 15.82a.75.75 0 0 1-.746-.84l.662-5.495a.75.75 0 0 1 .7-.658.73.73 0 0 1 .774.564 1.83 1.83 0 0 0 1.084 1.18.75.75 0 1 1-.472 1.424 3 3 0 0 1-.824-.423l-.433 3.588a.75.75 0 0 1-.745.66"
    />
  </Svg>
);
export default IconlystSongFolderOutline;
