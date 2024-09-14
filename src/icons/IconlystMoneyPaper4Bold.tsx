import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper4Bold = ({
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
      d="M12.001 10.46a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.322 12.754a.746.746 0 0 1-.75-.745V12a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m-5.321 2.285A3.04 3.04 0 0 1 8.963 12a3.04 3.04 0 0 1 3.038-3.04A3.04 3.04 0 0 1 15.039 12a3.04 3.04 0 0 1-3.038 3.04M6.68 12.754a.746.746 0 0 1-.75-.745V12a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755M17.812 4.45H6.188C3.982 4.45 2.5 5.996 2.5 8.3v7.4c0 2.303 1.482 3.85 3.688 3.85h11.623c2.207 0 3.689-1.547 3.689-3.85V8.3c0-2.303-1.482-3.85-3.688-3.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper4Bold;
