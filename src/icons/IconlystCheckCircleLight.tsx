import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.262 3.153a9 9 0 0 1 1.555.393 8.914 8.914 0 0 1 5.356 11.413A8.914 8.914 0 0 1 5.96 18.678a7.5 7.5 0 0 1-1.049-1.07M3.48 15.208A8.6 8.6 0 0 1 3 13.416M6.187 5.049c-.434.358-.84.754-1.189 1.18M3.554 8.607a8.4 8.4 0 0 0-.538 1.934M10.43 3.152a8 8 0 0 0-1.791.482"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 5.427c-4.765 2.668-7.72 6.976-9.125 9.614a17 17 0 0 0-3.666-4.304"
    />
  </Svg>
);
export default IconlystCheckCircleLight;
