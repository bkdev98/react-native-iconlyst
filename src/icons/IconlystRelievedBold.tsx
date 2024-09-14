import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRelievedBold = ({
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
      d="M16.356 9.705a2.12 2.12 0 0 1-1.683.852c-.653 0-1.266-.31-1.682-.852a.75.75 0 1 1 1.189-.914c.076.099.242.266.493.266s.417-.167.494-.266a.749.749 0 1 1 1.189.914M12 16.52c-1.341 0-2.607-.646-3.475-1.773a.751.751 0 0 1 1.189-.916c.581.756 1.414 1.189 2.286 1.189a.75.75 0 0 1 0 1.5M7.521 9.704a.75.75 0 1 1 1.191-.912.63.63 0 0 0 .492.265c.252 0 .417-.166.492-.265a.75.75 0 1 1 1.191.912 2.12 2.12 0 0 1-1.683.853 2.12 2.12 0 0 1-1.683-.853M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRelievedBold;
