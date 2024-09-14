import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpOutline = ({
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
      d="M15.841 7.21a.75.75 0 0 1 .75-.75H21.5a.75.75 0 0 1 .75.75v4.908a.75.75 0 1 1-1.5 0V7.96H16.59a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.03 6.678a.75.75 0 0 1 0 1.06l-7.773 7.774a.75.75 0 0 1-1.06 0l-3.56-3.561-5.607 5.606a.75.75 0 0 1-1.06-1.06l6.136-6.137a.75.75 0 0 1 1.06 0l3.56 3.56 7.244-7.242a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendUpOutline;
