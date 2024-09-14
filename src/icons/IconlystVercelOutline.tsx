import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVercelOutline = ({
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
      d="M12 3.75a.75.75 0 0 1 .643.364l9 15A.75.75 0 0 1 21 20.25H3a.75.75 0 0 1-.643-1.136l9-15A.75.75 0 0 1 12 3.75m-7.675 15h15.35L12 5.958z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVercelOutline;
