import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagPlusBroken = ({
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
      d="M16.034 7.045A4.045 4.045 0 0 0 11.99 3a4.046 4.046 0 0 0-4.063 4.028v.017M9.426 14.154h5.153M12.003 11.578v5.153M8.087 20.997c-2.87 0-5.074-1.037-4.449-5.21l.729-5.657c.381-2.083 1.714-2.88 2.88-2.88h9.53c1.183 0 2.435.856 2.88 2.88l.729 5.656c.531 3.703-1.611 5.211-4.482 5.211h-3.909"
    />
  </Svg>
);
export default IconlystShoppingBagPlusBroken;
