import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRefreshBold = ({
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
      d="M11.291 9.758a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.291 14.338a3.04 3.04 0 0 1-3.038-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-4.382-5.84H5.506a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5m12.129 3.528c.47 0 .92.073 1.35.192.2.056.404-.089.404-.296V7.6c0-2.303-1.482-3.851-3.688-3.851H5.48c-2.206 0-3.688 1.548-3.688 3.851v7.399c0 2.303 1.482 3.851 3.689 3.851h8.064c.2 0 .344-.192.299-.387a5 5 0 0 1-.136-1.106 5.33 5.33 0 0 1 5.33-5.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.076 18.416a1.83 1.83 0 0 1-1.226.46 1.856 1.856 0 0 1-1.857-1.85.75.75 0 0 0-1.5 0 3.357 3.357 0 0 0 3.357 3.35c.829 0 1.619-.3 2.225-.84a.75.75 0 1 0-1-1.12M18.85 13.665a3.33 3.33 0 0 0-2.224.841.75.75 0 1 0 1 1.12c.331-.298.766-.46 1.224-.46 1.025 0 1.858.834 1.858 1.86a.75.75 0 0 0 1.5 0 3.363 3.363 0 0 0-3.358-3.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperRefreshBold;
