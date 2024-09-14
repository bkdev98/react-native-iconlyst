import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatBold = ({
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
      d="M15.385 4.32H8.614C4.967 4.32 2 7.29 2 10.94c0 3.645 2.967 6.61 6.614 6.61h4.366l-.922.924a1 1 0 1 0 1.416 1.412l2.623-2.63a1 1 0 0 0-.001-1.414l-2.623-2.619a1 1 0 1 0-1.413 1.415l.913.912H8.614A4.617 4.617 0 0 1 4 10.94c0-2.547 2.07-4.62 4.614-4.62h6.771A4.623 4.623 0 0 1 20 10.94a4.6 4.6 0 0 1-1.074 2.956 1.001 1.001 0 0 0 1.53 1.288A6.6 6.6 0 0 0 22 10.94c0-3.65-2.968-6.62-6.615-6.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatBold;
