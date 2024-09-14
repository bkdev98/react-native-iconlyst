import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphLineBoxOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.335 5.039c-.676.726-1.085 1.789-1.085 3.107v7.946c0 1.318.41 2.38 1.088 3.107.672.72 1.661 1.17 2.945 1.17h8.435c1.289 0 2.277-.45 2.948-1.17.675-.726 1.084-1.788 1.084-3.107V8.146c0-1.318-.409-2.381-1.085-3.107-.67-.72-1.659-1.17-2.948-1.17H8.283c-1.289 0-2.278.45-2.948 1.17M4.237 4.016C5.221 2.96 6.624 2.37 8.283 2.37h8.434c1.66 0 3.062.59 4.046 1.647.979 1.051 1.487 2.502 1.487 4.13v7.946c0 1.628-.508 3.079-1.487 4.13-.984 1.056-2.386 1.647-4.045 1.647H8.283c-1.655 0-3.057-.591-4.042-1.647-.98-1.05-1.491-2.5-1.491-4.13V8.146c0-1.628.509-3.079 1.487-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.39 9.044a.75.75 0 0 1 1.052.137l2.45 3.184 2.726-2.14a.75.75 0 0 1 1.056.13l2.85 3.678a.75.75 0 1 1-1.186.919l-2.387-3.081-2.728 2.141a.75.75 0 0 1-1.058-.133l-2.912-3.783a.75.75 0 0 1 .137-1.052"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphLineBoxOutline;
