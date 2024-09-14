import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRefreshBulk = ({
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
      d="M19.038 12.026c.47 0 .92.073 1.35.192.2.056.404-.089.404-.296V7.6c0-2.303-1.482-3.851-3.688-3.851H5.48c-2.206 0-3.688 1.548-3.688 3.851v7.399c0 2.303 1.482 3.851 3.689 3.851h8.064c.2 0 .344-.192.299-.387a5 5 0 0 1-.136-1.106 5.33 5.33 0 0 1 5.33-5.33"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.076 18.416a1.83 1.83 0 0 1-1.227.46 1.856 1.856 0 0 1-1.857-1.85.75.75 0 0 0-1.5 0 3.357 3.357 0 0 0 3.357 3.35c.83 0 1.62-.3 2.226-.84a.75.75 0 1 0-1-1.12M18.85 13.665a3.33 3.33 0 0 0-2.224.841.75.75 0 1 0 .999 1.12 1.861 1.861 0 0 1 3.083 1.4.75.75 0 0 0 1.5 0 3.363 3.363 0 0 0-3.358-3.36M11.29 14.338a3.04 3.04 0 0 1-3.037-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.537-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.909 8.498H5.506a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperRefreshBulk;
