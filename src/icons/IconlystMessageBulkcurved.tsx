import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.918c-7.4 0-10.024 2.516-10.024 9.617 0 7.1 2.623 9.617 10.024 9.617s10.024-2.517 10.024-9.617-2.623-9.617-10.024-9.617"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.261 14.188c2.623 0 5.782-3.702 6.134-4.123a.751.751 0 0 0-1.152-.961c-1.156 1.386-3.53 3.584-4.982 3.584s-3.849-2.2-5.02-3.587a.75.75 0 0 0-1.147.967c.356.422 3.547 4.12 6.167 4.12"
    />
  </Svg>
);
export default IconlystMessageBulkcurved;
