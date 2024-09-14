import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerChargeTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M20 7.703c-2.105-3.708-6.594-5.512-10.774-4.07C4.536 5.258 2.04 10.38 3.664 15.07c1.614 4.7 6.735 7.196 11.435 5.571a8.96 8.96 0 0 0 5.733-6.093" />
      <Path d="M20.242 4.406v3.3H16.96" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.605 13.432a3.394 3.394 0 0 0 3.728 3.378c1.764-.168 3.06-1.751 3.06-3.524v-1.025a.753.753 0 0 0-.753-.753H9.358a.753.753 0 0 0-.753.753z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.134v-4.2M10.293 9.285v2.222m3.414-2.222v2.222"
    />
  </Svg>
);
export default IconlystPowerChargeTwoTone;
