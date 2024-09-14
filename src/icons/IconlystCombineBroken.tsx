import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineBroken = ({
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
      d="M17.58 3.002c2.107 0 3.42 1.489 3.42 3.596v5.685c0 2.106-1.313 3.595-3.422 3.595h-6.032c-2.11 0-3.421-1.489-3.421-3.595V6.598c0-2.107 1.318-3.596 3.42-3.596h2.52M6.429 20.997C4.313 20.997 3 19.512 3 17.407V11.72c0-2.106 1.323-3.6 3.429-3.6h1.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.876 15.877v1.53c0 2.105-1.305 3.59-3.42 3.59h-2.445"
    />
  </Svg>
);
export default IconlystCombineBroken;
