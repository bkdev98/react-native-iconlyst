import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBasketballOutline = ({
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
      d="M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.598 7.694a.75.75 0 0 1 .756-.744c7.126.056 12.886 5.85 12.886 12.99a.75.75 0 0 1-1.5 0c0-6.315-5.095-11.44-11.398-11.49a.75.75 0 0 1-.744-.756"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.153 2.475a.75.75 0 0 1 .811.684q.036.416.036.84c0 5.386-4.365 9.75-9.75 9.75q-.475 0-.938-.044a.75.75 0 1 1 .142-1.493q.393.038.796.038a8.25 8.25 0 0 0 8.22-8.963.75.75 0 0 1 .683-.812M10.5 20c0-5.385 4.365-9.75 9.75-9.75q.402 0 .796.032a.75.75 0 1 1-.121 1.495 8.25 8.25 0 0 0-8.888 9.008.75.75 0 0 1-1.494.142A10 10 0 0 1 10.5 20"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBasketballOutline;
