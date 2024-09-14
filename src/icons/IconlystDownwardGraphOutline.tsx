import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownwardGraphOutline = ({
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
      d="M2.974 6.584a.75.75 0 0 1 1.06.008l6.602 6.707 3.556-3.622a.75.75 0 0 1 1.07 0l6.774 6.916a.75.75 0 1 1-1.072 1.05l-6.238-6.37-3.554 3.62a.75.75 0 0 1-1.07.001l-7.136-7.25a.75.75 0 0 1 .008-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownwardGraphOutline;
