import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarGlassLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.149 9.77-2.614 7.227a.935.935 0 0 1-1.222.441c-1.286-.59-3.675-.876-5.063-.877-1.388 0-3.776.287-5.063.877a.936.936 0 0 1-1.222-.441L3.352 9.769c-.23-.457-.06-1.029.396-1.262a18.6 18.6 0 0 1 8.501-2.028c2.92 0 5.84.663 8.503 2.028.456.234.625.805.397 1.262"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.74 9.518-2.478 4.086M11.679 10.459l-1.907 3.144"
    />
  </Svg>
);
export default IconlystCarGlassLight;
