import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTapBulk = ({
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
      d="M6.229 9.279a.79.79 0 0 0 .356-1.056 4.16 4.16 0 0 1-.434-1.865c0-.655.145-1.282.434-1.864a.789.789 0 0 0-1.412-.699 5.7 5.7 0 0 0-.598 2.563c0 .9.2 1.762.598 2.563a.79.79 0 0 0 1.056.358M16.987 9.279a.786.786 0 0 0 1.056-.358c.396-.8.596-1.662.596-2.563 0-.9-.2-1.763-.596-2.563a.786.786 0 0 0-1.056-.357.79.79 0 0 0-.357 1.056 4.16 4.16 0 0 1 .433 1.864c0 .656-.145 1.284-.433 1.865a.79.79 0 0 0 .357 1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.987 8.889a3.18 3.18 0 0 1-1.28-2.505C8.68 4.654 9.982 3.226 11.61 3.2c1.626-.024 2.971 1.364 2.996 3.095a3.19 3.19 0 0 1-1.242 2.576l.025 1.599.198.017a.77.77 0 0 0 .418-.115c1.368-.864 2.203-2.436 2.177-4.102-.038-2.598-2.101-4.682-4.596-4.644-2.496.036-4.494 2.182-4.455 4.781.025 1.698.932 3.258 2.364 4.072.172.097.307.103.492.078z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.389 10.47-.067-4.313a1.667 1.667 0 0 0-3.334.026v9.564l-1.194-1.73a1.82 1.82 0 0 0-2.153-.668c-.887.34-1.364 1.305-1.04 2.2.605 1.666 1.563 3.526 2.796 5.06 1.943 2.415 7.875 2.254 10 .13 1.663-1.664 2.597-5.056 1.648-7.62-.944-2.546-4.323-2.426-6.656-2.648"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDoubleTapBulk;
