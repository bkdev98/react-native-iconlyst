import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxChangeBroken = ({
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
      d="m21.85 6.158-2.683-.533-.53 2.667M3.85 17.843l2.682.533.53-2.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.515 18.051a8.765 8.765 0 0 1-1.724-9.603M6.599 5.794a8.75 8.75 0 0 1 7.768-2.452M19.185 5.95a8.765 8.765 0 0 1 1.69 9.677M19.1 18.206a8.75 8.75 0 0 1-7.768 2.452M11.208 15.483c-1.138-.003-1.85-.81-1.849-1.952l.008-3.077c.003-1.142.715-1.946 1.857-1.943l3.268.008c1.142.001 1.85.81 1.847 1.95l-.007 3.079c-.003 1.14-.715 1.945-1.857 1.942M12.076 10.839h1.549"
    />
  </Svg>
);
export default IconlystDeliveryBoxChangeBroken;
