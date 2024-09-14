import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.404 13.896c-2.134-4.49-5.93-7.173-10.151-7.175h-.005c-4.223.002-8.018 2.684-10.152 7.175l-.429.903 1.807.86.43-.905c1.793-3.777 4.913-6.032 8.347-6.033 3.432.001 6.551 2.256 8.346 6.033l.43.904 1.805-.859z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.249 10.664a3.666 3.666 0 0 0-3.661 3.662 3.665 3.665 0 0 0 3.66 3.661 3.666 3.666 0 0 0 3.663-3.66 3.666 3.666 0 0 0-3.662-3.663"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowBulksharp;
