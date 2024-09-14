import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.653 9.273a2.092 2.092 0 0 1 2.958 2.959l-2.572 2.572a2.884 2.884 0 0 1-4.079 0l-2.572-2.572a2.092 2.092 0 0 1 2.959-2.96L12 10.926zm1.898 1.06a.59.59 0 0 0-.838 0l-2.183 2.183a.75.75 0 0 1-1.06 0l-2.184-2.182a.592.592 0 1 0-.837.837l2.572 2.572c.54.54 1.417.54 1.957 0l2.573-2.572a.59.59 0 0 0 0-.837"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketCircleOutline;
