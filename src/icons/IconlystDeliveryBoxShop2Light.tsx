import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop2Light = ({
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
      d="m4.493 3 2.075.36.961 11.445a1.797 1.797 0 0 0 1.796 1.65h11.881M17.124 3l.009 4.218-1.563-.51-1.573.52-.005-4.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.877 3-4.651.011c-1.62.004-2.634 1.153-2.63 2.777l.01 4.382c.004 1.624 1.017 2.77 2.643 2.766l4.65-.011c1.627-.004 2.635-1.154 2.631-2.778l-.01-4.381C20.518 4.14 19.504 2.996 17.877 3"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.83 20.444v.119m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M20.207 20.444v.119m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop2Light;
