import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBroken = ({
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
      d="M21 8.025c0-2.945-1.843-5.021-4.787-5.021H7.778C4.843 3.004 3 5.08 3 8.024v7.949c0 2.944 1.833 5.021 4.778 5.021h8.435c2.944 0 4.787-2.077 4.787-5.021V11.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.47 16.344 1.489-1.572a1.366 1.366 0 0 1 1.93-.06h.001l.913.93c.541.55 1.426.56 1.977.019.036-.035 2.276-2.752 2.276-2.752.578-.7 1.614-.8 2.315-.223.047.039 2.163 2.21 2.163 2.21M6.954 9.231a1.711 1.711 0 1 0 1.71-1.71"
    />
  </Svg>
);
export default IconlystImageBroken;
