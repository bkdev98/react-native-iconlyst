import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotsLight = ({
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
      d="M7.775 12.291c.446 2.317 6.714 10.09 9.433 8.495 2.849-1.35-.05-10.906-1.715-12.578-.768-.77-2.207-1.812-5.09-.287s-2.831 3.302-2.628 4.37"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.102 9.932c-2.021-.386-4.04-3.298-.85-3.51-1.208-3.236 1.682-4.76 3.678-1.947 2.015-2.511 3.19.769 2.425 2.675M13.515 11.577l3.041-1.61M15.766 16.923l2.46-1.302M12.804 14.884l-2.675 1.414"
    />
  </Svg>
);
export default IconlystCarrotsLight;
