import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWattpadTwoTone = ({
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
      d="M20.918 8.152c.768-1.138.838-2.287-.165-2.724-2.183-.694-4.506 2.686-5.528 4.088.26-1.578.272-4.452-1.894-4.59-2.752-.198-4.774 3.576-5.913 5.519.092-.962.205-1.935.083-2.9-.169-1.235-.96-2.247-2.325-2.097-2.538.25-2.643 4.066-2.675 5.955-.02 2.395.256 6.708 3.06 7.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.918 8.152a54 54 0 0 0-3.809 6.627c-.636 1.277-1.56 2.771-3.221 2.568-2.258-.246-2.572-3.128-2.443-4.914-.707 1.155-1.227 2.41-1.813 3.627-.825 1.673-1.988 3.395-4.07 2.95"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWattpadTwoTone;
