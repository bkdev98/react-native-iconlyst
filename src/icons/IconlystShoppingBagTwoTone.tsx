import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagTwoTone = ({
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
      d="M16.405 20.997H8.588c-2.87 0-5.075-1.037-4.449-5.21l.729-5.657c.382-2.083 1.714-2.88 2.88-2.88h9.53c1.183 0 2.435.856 2.881 2.88l.728 5.656c.531 3.703-1.611 5.211-4.482 5.211"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.555 7.045A4.045 4.045 0 0 0 12.509 3a4.045 4.045 0 0 0-4.063 4.028v.017M10.356 11.86l-.5 4.585M14.643 11.86l.501 4.585"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShoppingBagTwoTone;