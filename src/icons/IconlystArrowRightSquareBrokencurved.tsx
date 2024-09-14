import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBrokencurved = ({
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
      d="M16.34 12H8.16M12.57 8.248s3.77 2.528 3.77 3.752-3.77 3.748-3.77 3.748"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.849 20.959C20.015 20.151 21.5 17.562 21.5 12c0-6.937-2.311-9.25-9.25-9.25C5.31 2.75 3 5.063 3 12s2.31 9.25 9.25 9.25"
    />
  </Svg>
);
export default IconlystArrowRightSquareBrokencurved;
