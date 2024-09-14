import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBold = ({
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
      d="M17.62 17.654a.986.986 0 0 1 1.393 0l2.555 2.062h.044c.517.523.517 1.37 0 1.892a1.314 1.314 0 0 1-1.871 0l-2.12-2.43-.08-.09a1.083 1.083 0 0 1 .08-1.434M10.579 2c2.275 0 4.456.913 6.065 2.54a8.72 8.72 0 0 1 2.512 6.13c0 4.788-3.84 8.67-8.577 8.67C5.84 19.34 2 15.458 2 10.67S5.84 2 10.578 2"
    />
  </Svg>
);
export default IconlystSearchBold;
