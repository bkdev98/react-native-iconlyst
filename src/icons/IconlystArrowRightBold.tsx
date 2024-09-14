import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="m10.837 12.36-.002-.353c0-1.472.086-2.814.216-3.688l.114-.544c.063-.288.146-.616.233-.784A1.82 1.82 0 0 1 13 6h.058c.433.014 1.343.394 1.343.408 1.464.614 4.289 2.468 5.593 3.79l.38.396c.098.108.21.235.28.334.23.306.346.685.346 1.064 0 .423-.13.817-.375 1.138l-.39.42-.087.09c-1.184 1.283-4.274 3.382-5.89 4.024l-.245.094c-.294.105-.705.23-.955.242a2 2 0 0 1-.91-.22 1.9 1.9 0 0 1-.808-.904c-.101-.262-.26-1.05-.26-1.064-.147-.794-.231-2.047-.243-3.451M3 12a1.51 1.51 0 0 1 1.503-1.518l3.7.327c.65 0 1.179.533 1.179 1.19 0 .66-.528 1.191-1.18 1.191l-3.699.327A1.51 1.51 0 0 1 3 12"
    />
  </Svg>
);
export default IconlystArrowRightBold;
