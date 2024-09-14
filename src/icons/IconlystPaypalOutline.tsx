import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaypalOutline = ({
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
      d="M6.869 19.746h-2a1.745 1.745 0 0 1-1.73-2.01l2.02-12.81a3.15 3.15 0 0 1 3.13-2.67h4.12c1.68 0 3.28.73 4.37 2.01a5.77 5.77 0 0 1 1.31 4.63 5.725 5.725 0 0 1-5.68 4.85h-2.48c-.2 0-.37.15-.4.35l-.62 3.91a2.055 2.055 0 0 1-2.04 1.74m1.42-16c-.81 0-1.52.6-1.65 1.41l-2.02 12.81a.2.2 0 0 0 .06.19c.03.03.09.09.19.09h2c.28 0 .52-.2.56-.48l.62-3.91c.15-.93.94-1.61 1.89-1.61h2.48c2.1 0 3.87-1.51 4.2-3.59.19-1.23-.16-2.48-.97-3.43a4.27 4.27 0 0 0-3.23-1.49h-4.12z"
    />
    <Path
      fill={props.color}
      d="M10.939 21.745h-2.71c-.36 0-.71-.16-.95-.44a1.28 1.28 0 0 1-.29-1.01l.43-2.53c.07-.41.45-.68.87-.61.41.07.68.46.61.86l-.38 2.22h2.42c.12 0 .23-.09.25-.22l.58-3.65c.06-.36.37-.63.74-.63h2.61c2.1 0 3.87-1.51 4.2-3.59a4.21 4.21 0 0 0-2.1-4.35l-.24-.13a.737.737 0 0 1-.31-1.01c.19-.36.65-.51 1.01-.31l.27.14c2.12 1.21 3.24 3.52 2.86 5.9a5.72 5.72 0 0 1-5.68 4.85h-1.97l-.47 3.02c-.14.86-.86 1.48-1.73 1.48z"
    />
  </Svg>
);
export default IconlystPaypalOutline;
