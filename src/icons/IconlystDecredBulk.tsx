import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDecredBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.012 15.081-1.107-1.18a3.13 3.13 0 0 0 2.83-3.117c0-1.72-1.401-3.12-3.124-3.12h-1.426a.75.75 0 0 0 0 1.5h1.426c.897 0 1.625.726 1.625 1.62 0 .9-.728 1.63-1.625 1.63h-1.426a.749.749 0 0 0-.547 1.263l2.28 2.43a.747.747 0 0 0 1.06.034.75.75 0 0 0 .034-1.06"
    />
    <Path
      fill={props.color}
      d="M10.388 16.344h1.426a.75.75 0 0 0 0-1.5h-1.426a1.625 1.625 0 1 1 0-3.25h1.426a.75.75 0 0 0 .547-1.263l-2.281-2.43a.751.751 0 0 0-1.094 1.026l1.108 1.181a3.13 3.13 0 0 0-2.831 3.116c0 1.72 1.403 3.12 3.125 3.12"
    />
  </Svg>
);
export default IconlystDecredBulk;
