import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBasicAttentionTokenBold = ({
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
      d="M9.807 13.57h4.387L12 9.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.162 14.691a.75.75 0 0 1-.652.379H8.491a.751.751 0 0 1-.645-1.132l3.509-5.92c.27-.456 1.021-.456 1.29 0l3.51 5.92c.138.231.14.519.007.753M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBasicAttentionTokenBold;
