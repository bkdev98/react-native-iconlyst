import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 15.712A6.1 6.1 0 0 1 12 18.34c-2.571 0-4.795-1.637-5.68-3.92l.794.531a.999.999 0 1 0 1.113-1.66l-2.791-1.87a.997.997 0 0 0-1.386.272l-1.881 2.8a1 1 0 1 0 1.66 1.115l.514-.766C5.437 18.027 8.477 20.34 12 20.34a8.1 8.1 0 0 0 6.66-3.49 1 1 0 1 0-1.646-1.138"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.556 8.61a1 1 0 0 0-1.388.274l-.514.77C18.56 6.47 15.521 4.16 12 4.16a8.1 8.1 0 0 0-6.66 3.491A1.001 1.001 0 0 0 6.984 8.79 6.1 6.1 0 0 1 12 6.16c2.572 0 4.796 1.638 5.68 3.922l-.795-.533a1 1 0 1 0-1.113 1.662l2.791 1.87a1 1 0 0 0 1.388-.275l1.88-2.81a1 1 0 0 0-.274-1.387"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUpdate2Bulk;
