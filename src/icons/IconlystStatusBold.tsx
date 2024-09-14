import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStatusBold = ({
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
      d="M13.668 8.379c-1.595.087-2.952 1.304-3.438 2.963l.012-.001a11.4 11.4 0 0 1 1.911.086 8.6 8.6 0 0 0 1.611.063c.816-.045 1.459-.285 1.809-.675.226-.254.325-.562.304-.943-.055-.963-1.193-1.562-2.21-1.493M13.288 13.003q-.669 0-1.3-.085l-.05-.005a9 9 0 0 0-1.623-.074 6 6 0 0 0-.849.122q-.005.002-.009 0-.005.001-.01.005c-1.379.27-1.333 1.056-1.316 1.35.05.84 1.094 1.348 2.05 1.304 1.505-.08 2.738-1.138 3.193-2.62z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.69 11.814c-.422.472-1.02.798-1.736.989-.441 2.404-2.329 4.189-4.697 4.316q-.105.006-.21.005c-1.813 0-3.322-1.186-3.413-2.72-.08-1.357.652-2.344 2.016-2.777.447-2.606 2.475-4.611 4.936-4.747 1.994-.095 3.692 1.196 3.79 2.907.043.776-.194 1.477-.686 2.027M12 2.5c-5.239 0-9.5 4.261-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStatusBold;
