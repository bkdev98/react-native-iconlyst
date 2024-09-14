import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper6Bold = ({
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
      fillRule="evenodd"
      d="M12 15.04a3.041 3.041 0 0 1 0-6.08A3.04 3.04 0 0 1 15.04 12 3.04 3.04 0 0 1 12 15.04m9.154-.975a.32.32 0 0 0 .345-.31v-3.497a.315.315 0 0 0-.345-.308 4.464 4.464 0 0 1-3.467-1.307 4.49 4.49 0 0 1-1.273-3.821c.028-.192-.114-.373-.308-.373H7.89c-.194 0-.336.181-.308.373a4.5 4.5 0 0 1-1.263 3.82 4.47 4.47 0 0 1-3.473 1.31.315.315 0 0 0-.344.307v3.493c0 .183.163.323.345.31a4.45 4.45 0 0 1 3.47 1.304 4.5 4.5 0 0 1 1.263 3.814c-.027.19.116.37.308.37h8.219c.192 0 .335-.18.308-.37a4.49 4.49 0 0 1 1.277-3.818 4.43 4.43 0 0 1 3.463-1.297"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.75 7.583c.669.671 1.593.968 2.51.843.14-.019.24-.142.236-.284l-.002-.07c-.088-2.015-1.35-3.392-3.23-3.585a.27.27 0 0 0-.29.194 2.97 2.97 0 0 0 .776 2.902M12 10.46a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08M5.255 16.427a2.96 2.96 0 0 0-2.548-.843.24.24 0 0 0-.203.246c.051 2.069 1.323 3.486 3.232 3.682a.27.27 0 0 0 .292-.2 2.96 2.96 0 0 0-.773-2.885M18.75 16.425a2.95 2.95 0 0 0-.783 2.888.27.27 0 0 0 .29.2c1.883-.192 3.147-1.568 3.236-3.583l.003-.064a.275.275 0 0 0-.235-.283 2.96 2.96 0 0 0-2.511.842M5.255 7.584a2.99 2.99 0 0 0 .767-2.902.27.27 0 0 0-.29-.194c-1.873.194-3.131 1.564-3.224 3.57l-.004.087a.276.276 0 0 0 .235.284 2.96 2.96 0 0 0 2.516-.845"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper6Bold;
