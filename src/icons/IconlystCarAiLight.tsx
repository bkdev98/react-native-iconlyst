import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarAiLight = ({
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
      d="M14.593 11.373h1.636M6.51 11.373h1.636M3.186 7.561c5.426.77 10.932.77 16.358 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.56 11.125c0-.737-.235-1.456-.671-2.051L17.828 7.65a1.6 1.6 0 0 1-.203-.389l-.956-2.652a2.04 2.04 0 0 0-1.573-1.318 23.9 23.9 0 0 0-7.436 0A2.04 2.04 0 0 0 6.095 4.61L5.14 7.26a1.5 1.5 0 0 1-.204.372L3.858 9.118a3.44 3.44 0 0 0-.654 2.025l-.015 4.737a.91.91 0 0 0 .91.913h1.803a.91.91 0 0 0 .91-.91v-.373a.91.91 0 0 1 .91-.91h4.481M18.114 19.708l.104-.284a3.92 3.92 0 0 1 2.312-2.315l.284-.105-.284-.106a3.92 3.92 0 0 1-2.312-2.314l-.105-.284-.105.284a3.92 3.92 0 0 1-2.31 2.314l-.285.106.284.105a3.92 3.92 0 0 1 2.311 2.314zM12.589 21a1.84 1.84 0 0 1 1.224-1.226 1.84 1.84 0 0 1-1.224-1.226 1.84 1.84 0 0 1-1.224 1.226A1.84 1.84 0 0 1 12.589 21"
    />
  </Svg>
);
export default IconlystCarAiLight;
