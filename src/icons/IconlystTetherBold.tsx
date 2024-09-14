import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTetherBold = ({
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
      d="M12.828 14.858v1.172a.75.75 0 0 1-1.5 0v-1.165c-1.955-.12-3.742-.769-3.742-2.065 0-.495.266-1.183 1.534-1.653a.75.75 0 1 1 .521 1.406c-.243.09-.394.178-.48.242.265.193 1.01.482 2.167.568V9.75H9.4a.75.75 0 0 1 0-1.5h5.199a.75.75 0 0 1 0 1.5h-1.771v3.599c1.065-.1 1.757-.37 2.01-.554a2 2 0 0 0-.481-.242.75.75 0 0 1 .522-1.406c1.267.469 1.533 1.158 1.533 1.653 0 1.261-1.692 1.913-3.584 2.058M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTetherBold;
