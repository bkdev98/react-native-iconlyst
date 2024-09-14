import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowTopTailOutline = ({
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
      d="M12 2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 2.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L12 4.06 9.53 6.53a.75.75 0 0 1-1.06-1.06zM11.47 17.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 19.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowTopTailOutline;