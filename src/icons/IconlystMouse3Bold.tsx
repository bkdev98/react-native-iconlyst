import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse3Bold = ({
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
      d="M12.749 9.695a.75.75 0 0 1-1.5 0V7.672a.75.75 0 0 1 1.5 0zm6.446-1.829A5.37 5.37 0 0 0 13.829 2.5h-3.658a5.373 5.373 0 0 0-5.367 5.367l.001 8.267a5.37 5.37 0 0 0 5.366 5.366h3.659a5.373 5.373 0 0 0 5.366-5.367z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouse3Bold;
