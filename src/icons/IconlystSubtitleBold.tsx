import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleBold = ({
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
      fillRule="evenodd"
      d="M21.956 7.818a.29.29 0 0 0 .291-.324c-.147-1.149-.57-2.123-1.277-2.831-.916-.92-2.266-1.405-3.901-1.405h-8.46c-2.965 0-4.834 1.573-5.184 4.235a.29.29 0 0 0 .29.325zM17.63 16.578h-1.937a.75.75 0 1 1 0-1.5h1.938a.75.75 0 0 1 0 1.5m-5.173-3.45a.75.75 0 0 1 0-1.5h2.34a.75.75 0 0 1 0 1.5zm.364 3.45h-.01a.75.75 0 0 1 0-1.5c.414 0 .755.336.755.75s-.331.75-.745.75m-2.573 0H8.037a.75.75 0 0 1 0-1.5h2.21a.75.75 0 0 1 0 1.5m-2.15-4.95h1.654a.75.75 0 0 1 0 1.5H8.098a.75.75 0 0 1 0-1.5m9.488 0h.01a.75.75 0 0 1 0 1.5.755.755 0 0 1-.755-.75c0-.414.33-.75.745-.75M3.642 9.318a.3.3 0 0 0-.3.3v5.88c0 3.28 1.969 5.24 5.268 5.24h8.45c3.298 0 5.266-1.93 5.266-5.16v-5.96a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSubtitleBold;
