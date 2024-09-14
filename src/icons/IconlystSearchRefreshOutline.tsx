import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRefreshOutline = ({
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
      d="M17.449 3.75c-.584 0-1.114.216-1.52.574a.75.75 0 0 1-.992-1.125 3.798 3.798 0 0 1 6.31 2.848.75.75 0 0 1-1.5 0 2.3 2.3 0 0 0-2.298-2.297m-5.827-.23a.75.75 0 0 1-.652.837 7.411 7.411 0 1 0 5.938 12.81l.008-.009.051-.046a7.4 7.4 0 0 0 2.274-4.434.75.75 0 1 1 1.488.193 8.9 8.9 0 0 1-2.224 4.813l2.793 2.785a.75.75 0 1 1-1.06 1.062l-2.829-2.822a8.91 8.91 0 0 1-14.427-7 8.91 8.91 0 0 1 7.804-8.84.75.75 0 0 1 .836.652M14.4 5.298a.75.75 0 0 1 .75.75 2.298 2.298 0 0 0 3.817 1.723.75.75 0 0 1 .993 1.125 3.798 3.798 0 0 1-6.31-2.848.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchRefreshOutline;
