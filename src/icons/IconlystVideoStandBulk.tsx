import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoStandBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.388 5.43h-5.89c-2.29 0-3.83 1.61-3.83 4v3.75c0 2.4 1.54 4.01 3.83 4.01h5.89c2.27 0 3.82-1.59 3.84-3.96V9.41c-.01-2.38-1.55-3.98-3.84-3.98"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.19 3.75h4.196a.75.75 0 0 0 0-1.5H10.19a.75.75 0 0 0 0 1.5M12.83 10.356c.55 0 1-.44 1-1 0-.55-.45-1-1-1-.56 0-1 .45-1 1 0 .56.44 1 1 1M22 8.915l-.01 4.8c0 .43-.17.84-.48 1.15-.3.29-.7.45-1.12.45-.41.01-.76-.12-1.05-.37l-2.11-1.72v-3.82l2.13-1.74c.33-.28.75-.41 1.18-.37A1.61 1.61 0 0 1 22 8.915M13.75 21.366c.24.33.71.4 1.05.16a.75.75 0 0 0 .16-1.05l-2.39-3.29H9.99l-2.45 3.37a.75.75 0 0 0 .16 1.05c.14.1.29.14.44.14.24 0 .46-.1.61-.3l2.53-3.48z"
    />
  </Svg>
);
export default IconlystVideoStandBulk;
