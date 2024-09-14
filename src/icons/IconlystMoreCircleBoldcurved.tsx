import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleBoldcurved = ({
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
      d="M15.463 15.435a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.009a1 1 0 1 1 0 2m-3-4a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.009a1 1 0 1 1 0 2m-3.008 4a1.004 1.004 0 0 1-1.005-1c0-.553.444-1 .996-1h.009a1 1 0 1 1 0 2m2.795-12.65c-7.199 0-9.75 2.55-9.75 9.75 0 7.198 2.551 9.75 9.75 9.75S22 19.733 22 12.535c0-7.2-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoreCircleBoldcurved;
