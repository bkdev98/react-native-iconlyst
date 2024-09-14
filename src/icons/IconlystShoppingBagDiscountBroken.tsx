import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagDiscountBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.087 21c-2.87 0-5.074-1.038-4.449-5.212l.729-5.656c.381-2.083 1.714-2.88 2.88-2.88h9.53c1.183 0 2.435.856 2.88 2.88l.729 5.656C20.917 19.491 18.775 21 15.904 21h-3.909M16.034 7.045A4.045 4.045 0 0 0 11.99 3a4.045 4.045 0 0 0-4.063 4.028v.017M9.66 16.191l4.678-4.677M14.309 16.127h-.034M9.749 11.576h-.024"
    />
  </Svg>
);
export default IconlystShoppingBagDiscountBroken;
