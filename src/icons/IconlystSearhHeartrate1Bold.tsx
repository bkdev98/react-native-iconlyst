import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearhHeartrate1Bold = ({
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
      d="M14.996 11.578h-1.04l-1.02 3.05c-.1.31-.39.51-.71.51s-.61-.2-.71-.51l-1.66-4.98-.48 1.42c-.1.31-.39.51-.71.51h-1.58c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h1.04l1.01-3.04a.75.75 0 0 1 1.43 0l1.66 4.98.48-1.42c.1-.31.39-.52.71-.52h1.58c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m-3.87-9.08c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.794l-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearhHeartrate1Bold;
