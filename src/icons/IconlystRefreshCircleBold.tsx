import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshCircleBold = ({
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
      fillRule="evenodd"
      d="M22 11c0-3.084-4.393-5.5-10-5.5S2 7.916 2 11c0 1.955 1.751 3.708 4.683 4.689a1 1 0 0 0 .634-1.896C5.302 13.118 4 12.022 4 11c0-1.655 3.285-3.5 8-3.5s8 1.845 8 3.5c0 1.475-2.614 3.098-6.519 3.434l.726-.727a.999.999 0 1 0-1.414-1.414l-2.499 2.499a1 1 0 0 0 0 1.416l2.499 2.499a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-.847-.847C18.3 16.09 22 13.829 22 11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshCircleBold;
