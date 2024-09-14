import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreSquareBoldcurved = ({
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
      d="M16.253 13.535a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.009a1 1 0 1 1 0 2m-3.999 0a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.009a1 1 0 1 1 0 2m-4 0a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.009a1 1 0 1 1 0 2m3.996-10.75c-7.199 0-9.75 2.552-9.75 9.75s2.551 9.75 9.75 9.75S22 19.733 22 12.535s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoreSquareBoldcurved;
