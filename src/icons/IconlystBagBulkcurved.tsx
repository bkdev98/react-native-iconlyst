import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.143 13.014h.046c.548 0 .977-.439.977-1 0-.542-.469-1-1.023-1a1 1 0 0 0 0 2M9.312 13.014h.046c.548 0 .977-.439.977-1 0-.542-.468-1-1.023-1a1.001 1.001 0 0 0 0 2"
    />
    <Path
      fill={props.color}
      d="M15.77 6.91c.926.131 1.796.324 2.547.591l.026.01c1.145.412 1.998.984 2.574 1.736 1.01 1.32 1.184 3.132.534 5.544-1.504 5.576-2.386 7.838-9.2 7.838-6.817 0-7.699-2.262-9.202-7.838-.65-2.412-.476-4.225.534-5.544.647-.844 1.643-1.463 3.007-1.88l.005.003c1.118-.353 2.955-.61 4.945-.667q.347-.008.71-.008a26 26 0 0 1 3.52.215"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.77 6.91c.88.125 3.694.821 1.53.288-.166-2.648-2.35-4.758-5.037-4.758h-.023a5.04 5.04 0 0 0-3.568 1.47c-.888.88-1.389 2.034-1.47 3.288l1.528-.287a3.548 3.548 0 0 1 3.513-2.971h.017a3.57 3.57 0 0 1 3.51 2.97"
    />
  </Svg>
);
export default IconlystBagBulkcurved;
