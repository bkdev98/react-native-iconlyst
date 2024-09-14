import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapHoldBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.545 7.424a.62.62 0 0 1-.494.231.66.66 0 0 1-.4-.136l-1.071-.872a.61.61 0 0 1-.231-.484v-1.25c0-.347.283-.63.63-.63s.63.283.63.63v.946l.841.672c.273.22.315.62.095.893m-1.366-4.686a3.354 3.354 0 0 0-3.352 3.352A3.354 3.354 0 0 0 18.18 9.44 3.354 3.354 0 0 0 21.53 6.09a3.354 3.354 0 0 0-3.351-3.352"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.958 8.889a3.18 3.18 0 0 1-1.28-2.505C6.65 4.654 7.952 3.226 9.58 3.2c1.627-.024 2.971 1.364 2.997 3.095a3.19 3.19 0 0 1-1.242 2.576l.024 1.599.198.017a.77.77 0 0 0 .419-.115c1.368-.864 2.202-2.436 2.177-4.102-.04-2.598-2.102-4.682-4.597-4.644C7.06 1.662 5.062 3.808 5.1 6.407c.025 1.698.932 3.258 2.364 4.072.172.097.308.103.493.078z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.36 10.47-.068-4.313a1.667 1.667 0 0 0-3.334.026v9.564l-1.193-1.73a1.82 1.82 0 0 0-2.154-.668c-.887.34-1.363 1.305-1.04 2.2.605 1.666 1.563 3.526 2.796 5.06 1.943 2.415 7.875 2.254 10 .13 1.663-1.664 2.597-5.056 1.648-7.62-.944-2.546-4.322-2.426-6.656-2.648"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTapHoldBulk;
