import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapHoldBold = ({
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
      d="M7.458 6.181V8.89a3.18 3.18 0 0 1-1.28-2.505C6.15 4.654 7.452 3.226 9.08 3.2c1.627-.024 2.971 1.364 2.997 3.095a3.19 3.19 0 0 1-1.242 2.576l-.042-2.715a1.668 1.668 0 0 0-3.335.025m3.47 4.294c.183.03.377.003.548-.103 1.368-.864 2.202-2.436 2.177-4.102-.04-2.598-2.102-4.682-4.597-4.644-2.495.036-4.494 2.182-4.455 4.781.025 1.698.932 3.258 2.364 4.072a.8.8 0 0 0 .4.103c.033 0 .061-.02.093-.025v5.19l-1.194-1.731a1.82 1.82 0 0 0-2.153-.668c-.888.34-1.363 1.305-1.04 2.199.605 1.667 1.563 3.528 2.795 5.06 1.943 2.416 7.877 2.254 10 .131 1.664-1.663 2.599-5.056 1.649-7.62-.934-2.522-4.256-2.427-6.588-2.643"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.045 7.424a.62.62 0 0 1-.494.231.66.66 0 0 1-.4-.136l-1.071-.872a.61.61 0 0 1-.231-.484v-1.25c0-.347.284-.63.63-.63s.63.283.63.63v.946l.841.672c.273.22.315.62.095.893m-1.366-4.686a3.354 3.354 0 0 0-3.352 3.352A3.354 3.354 0 0 0 17.68 9.44 3.354 3.354 0 0 0 21.03 6.09a3.354 3.354 0 0 0-3.351-3.352"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapHoldBold;
