import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashBulk = ({
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
    <Path
      fill={props.color}
      d="M13.606 4.298v5.289l-3.213 5.427H5.416a1.49 1.49 0 0 1-1.332-.816c-.256-.503-.21-1.1.123-1.557l6.695-9.222a1.47 1.47 0 0 1 1.671-.543 1.47 1.47 0 0 1 1.033 1.422"
    />
    <Path
      fill={props.color}
      d="M10.376 20.3v-5.29l3.213-5.427h4.977a1.49 1.49 0 0 1 1.332.816c.256.503.21 1.1-.123 1.557l-6.695 9.222a1.47 1.47 0 0 1-1.671.543 1.47 1.47 0 0 1-1.033-1.422"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashBulk;
