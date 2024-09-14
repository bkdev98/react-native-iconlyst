import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper2Bold = ({
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
      d="M17.786 9.2h-1.403a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m-5.785 5.84A3.04 3.04 0 0 1 8.963 12a3.04 3.04 0 0 1 3.038-3.04A3.04 3.04 0 0 1 15.039 12a3.04 3.04 0 0 1-3.038 3.04M7.618 16.3H6.215a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5M17.812 4.45H6.188C3.982 4.45 2.5 5.995 2.5 8.3v7.4c0 2.302 1.482 3.85 3.688 3.85h11.623c2.206 0 3.689-1.548 3.689-3.85V8.3c0-2.304-1.482-3.85-3.688-3.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 10.459a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper2Bold;
