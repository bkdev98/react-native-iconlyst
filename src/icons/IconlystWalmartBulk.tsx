import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalmartBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14.56 11.345 2.035-1.211a.75.75 0 0 0-.768-1.29l-2.035 1.212a.75.75 0 0 0 .768 1.289M16.21 15.26a.751.751 0 0 0 .387-1.394l-2.035-1.22a.75.75 0 0 0-.772 1.288l2.035 1.22a.75.75 0 0 0 .385.106M12 10.22a.75.75 0 0 0 .75-.75V7.1a.75.75 0 0 0-1.5 0v2.37c0 .414.336.75.75.75M12 17.65a.75.75 0 0 0 .75-.75v-2.37a.75.75 0 0 0-1.5 0v2.37c0 .414.336.75.75.75M9.824 11.46a.75.75 0 0 0 .383-1.394l-2.035-1.21a.75.75 0 1 0-.765 1.289l2.035 1.21c.12.07.252.105.382.105M8.175 15.154l2.035-1.22a.75.75 0 1 0-.771-1.287l-2.035 1.219a.75.75 0 0 0 .771 1.288"
    />
  </Svg>
);
export default IconlystWalmartBulk;
