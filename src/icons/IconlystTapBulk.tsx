import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapBulk = ({
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
      d="M9.525 8.889a3.18 3.18 0 0 1-1.28-2.505c-.026-1.73 1.276-3.158 2.903-3.184 1.626-.024 2.971 1.364 2.997 3.095a3.19 3.19 0 0 1-1.242 2.576l.024 1.599.198.017a.77.77 0 0 0 .418-.115c1.368-.864 2.203-2.436 2.177-4.102-.038-2.598-2.1-4.682-4.596-4.644-2.495.036-4.494 2.182-4.455 4.781.025 1.698.932 3.258 2.364 4.072.172.097.307.103.492.078z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.927 10.47-.067-4.313a1.667 1.667 0 0 0-3.335.026v9.564l-1.193-1.73a1.82 1.82 0 0 0-2.153-.668c-.888.34-1.364 1.305-1.04 2.2.605 1.666 1.563 3.526 2.796 5.06 1.942 2.415 7.875 2.254 9.999.13 1.664-1.664 2.598-5.056 1.649-7.62-.944-2.546-4.323-2.426-6.656-2.648"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTapBulk;
