import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingCircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.922 10.153-.718 4.088a1.426 1.426 0 0 1-1.407 1.18H9.205a1.425 1.425 0 0 1-1.408-1.182l-.721-4.086a.96.96 0 0 1 .463-1.001.96.96 0 0 1 1.1.085l1.364 1.104 1.275-1.434c.367-.412 1.076-.412 1.443 0l1.275 1.434 1.364-1.104a.96.96 0 0 1 1.102-.084.96.96 0 0 1 .46 1m-4.923.2 1.218 1.37a.964.964 0 0 0 1.327.104l.653-.528-.317 1.81-.084.813-5.52.058L8.8 11.3l.653.529a.967.967 0 0 0 1.33-.108z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKingCircleBulk;
