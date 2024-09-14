import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislike2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.355 3.95a4.32 4.32 0 0 1 5.146 2.185c1.14-2.161 3.383-2.736 5.135-2.185.83.268 1.529.694 2.093 1.233M7.586 17.323c-1.55-1.416-3.025-3.29-3.734-5.496-.627-1.96-.414-4.094.625-5.692M21.341 8.12a7.16 7.16 0 0 1-.192 3.707c-1.582 5.03-7.352 8.418-8.648 8.418-.446 0-1.417-.395-2.565-1.121M6.348 18.561 21.155 3.754"
    />
  </Svg>
);
export default IconlystDislike2Broken;
