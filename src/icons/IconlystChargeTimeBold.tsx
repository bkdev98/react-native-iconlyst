import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeTimeBold = ({
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
      d="M8.705 5.177v-.252c0-.634.094-1.05 1.35-1.05h1.7c1.247 0 1.35.496 1.35 1.05v.22c-.15-.006-.294-.026-.45-.02h-3.3c-.228 0-.436.03-.65.052m7.182 5.248q.465.001.911.062a.312.312 0 0 0 .357-.304v-.459c0-1.476-.45-2.689-1.3-3.507a3.8 3.8 0 0 0-1.25-.775v-.517c0-.767-.278-2.55-2.85-2.55h-1.7c-2.355 0-2.85 1.386-2.85 2.55v.635c-1.542.681-2.45 2.142-2.45 4.164v7.301c0 2.837 1.724 4.6 4.5 4.6h1.197c.265 0 .407-.326.243-.535a6.56 6.56 0 0 1-1.408-4.065c0-3.701 2.898-6.6 6.6-6.6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.83 18.61a.75.75 0 0 1-1.029.259l-1.5-.9a.75.75 0 0 1-.364-.643v-1.901a.75.75 0 0 1 1.5 0V16.9l1.136.68a.75.75 0 0 1 .257 1.03m-1.943-6.185c-2.58 0-4.6 2.02-4.6 4.6 0 2.537 2.063 4.6 4.6 4.6 2.58 0 4.6-2.02 4.6-4.6s-2.02-4.6-4.6-4.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeTimeBold;
