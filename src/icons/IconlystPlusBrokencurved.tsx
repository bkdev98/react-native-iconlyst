import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlusBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 8.96v7.148M15.828 12.534H8.672M12.25 2.798c7.302 0 9.737 2.435 9.737 9.737s-2.435 9.737-9.737 9.737-9.737-2.435-9.737-9.737c0-5.97 1.628-8.687 6.212-9.48"
    />
  </Svg>
);
export default IconlystPlusBrokencurved;
