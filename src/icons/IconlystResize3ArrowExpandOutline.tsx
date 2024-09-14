import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3ArrowExpandOutline = ({
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
      d="M11.251 6.277v5.49a.75.75 0 1 0 1.5 0V6.28l2.066 2.075a.75.75 0 0 0 1.063-1.058l-3.307-3.322a.75.75 0 0 0-1.105-.042L8.12 7.297a.75.75 0 1 0 1.063 1.058zM18.566 13.014a.75.75 0 0 1 .92.529l1.238 4.581a.75.75 0 0 1-.074.573.75.75 0 0 1-.515.363l-4.53 1.203a.75.75 0 1 1-.384-1.45l2.829-.751-4.752-2.744a.75.75 0 1 1 .75-1.299l4.755 2.746-.765-2.831a.75.75 0 0 1 .528-.92M5.434 13.014c.4.108.637.52.529.92l-.766 2.83 4.755-2.745a.75.75 0 1 1 .75 1.299l-4.751 2.744 2.829.752a.75.75 0 0 1-.385 1.45l-4.53-1.204a.75.75 0 0 1-.589-.936l1.238-4.581a.75.75 0 0 1 .92-.529"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize3ArrowExpandOutline;
