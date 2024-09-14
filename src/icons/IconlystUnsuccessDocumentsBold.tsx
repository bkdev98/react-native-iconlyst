import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnsuccessDocumentsBold = ({
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
      d="M14.14 16.315c.29.29.29.77 0 1.06s-.77.29-1.06 0L12 16.295l-1.08 1.08c-.15.15-.34.22-.53.22a.7.7 0 0 1-.53-.22c-.3-.29-.3-.77 0-1.06l1.08-1.08-1.08-1.08c-.3-.3-.3-.77 0-1.06.29-.3.76-.3 1.06 0l1.08 1.08 1.08-1.08c.29-.3.77-.3 1.06 0 .29.29.29.76 0 1.06l-1.08 1.08zm3.1-7.48H6.76c-2.1 0-3.81 1.72-3.81 3.82v5.15c0 2.11 1.71 3.82 3.81 3.82h10.48c2.1 0 3.81-1.71 3.81-3.82v-5.15c0-2.1-1.71-3.82-3.81-3.82M8.719 3.875h6.562a.75.75 0 0 0 0-1.5H8.719a.75.75 0 0 0 0 1.5M6.182 6.987h11.636a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnsuccessDocumentsBold;
