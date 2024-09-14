import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSquareBulk = ({
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
      d="M8.282 2.5h8.435C19.877 2.5 22 4.722 22 8.029v7.942c0 3.307-2.123 5.529-5.284 5.529H8.282C5.123 21.5 3 19.278 3 15.971V8.029C3 4.722 5.123 2.5 8.282 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.764 9.616a2.79 2.79 0 0 0-1.753-1.639 2.9 2.9 0 0 0-1.382-.098c-.424.07-.808.325-1.13.56-.312-.225-.705-.484-1.13-.555a3 3 0 0 0-1.381.093c-1.77.573-2.316 2.51-1.821 4.05.77 2.474 4.09 4.047 4.232 4.113a.24.24 0 0 0 .2 0c.139-.065 3.41-1.61 4.227-4.11.262-.814.24-1.672-.062-2.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSquareBulk;
