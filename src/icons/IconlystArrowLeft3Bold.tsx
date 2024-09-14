import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.859 17.41a.72.72 0 0 0 .38-.627v-4.066h8.027A.726.726 0 0 0 21 12a.726.726 0 0 0-.734-.717h-8.028V7.217a.71.71 0 0 0-.38-.627.75.75 0 0 0-.746.02l-7.77 4.783A.71.71 0 0 0 3 12c0 .247.13.475.343.607l7.77 4.783a.76.76 0 0 0 .746.02"
    />
  </Svg>
);
export default IconlystArrowLeft3Bold;
