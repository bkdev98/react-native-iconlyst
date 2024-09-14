import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.137 20.32H8.01c-1.139 0-2.624-.778-2.996-2.81l-.975-5.633c-.412-2.46.915-4.1 2.892-4.1h12.065c1.977 0 3.304 1.64 2.893 4.1l-.976 5.632c-.372 2.033-1.857 2.811-2.995 2.811h-1.817M16.182 11.727H9.748M10.237 3.68 8.102 7.77M17.825 7.771l-2.135-4.09"
    />
  </Svg>
);
export default IconlystShoppingBasketBroken;
