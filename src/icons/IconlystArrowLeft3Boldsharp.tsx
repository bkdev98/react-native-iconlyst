import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft3Boldsharp = ({
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
      d="M21.25 11H8.911c1.221-1.222 1.999-2.886 1.999-4.66v-1h-2v1C8.91 8.779 6.688 11 4.25 11h-1v2h1c2.438 0 4.66 2.221 4.66 4.66v1h2v-1c0-1.774-.778-3.438-1.999-4.66H21.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeft3Boldsharp;
