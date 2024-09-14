import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceOutline = ({
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
      d="M5.384 4.273C4.62 4.273 4 4.893 4 5.657v2.529c0 .764.62 1.384 1.384 1.384h2.528c.765 0 1.384-.62 1.384-1.384V5.657c0-.764-.62-1.384-1.384-1.384zM2.5 5.657a2.884 2.884 0 0 1 2.884-2.884h2.528a2.884 2.884 0 0 1 2.884 2.884v2.529a2.884 2.884 0 0 1-2.884 2.884H5.384A2.884 2.884 0 0 1 2.5 8.186zM18.307 4.155a1.385 1.385 0 0 0-1.958 0l-1.787 1.787a1.385 1.385 0 0 0 0 1.958l1.787 1.788c.54.54 1.416.541 1.958 0L20.094 7.9c.54-.54.54-1.416 0-1.957m0 0-1.787-1.788zm-4.806-2.849a2.885 2.885 0 0 1 4.079 0l1.788 1.788a2.886 2.886 0 0 1 0 4.08l-1.788 1.787a2.884 2.884 0 0 1-4.08 0L13.502 8.96a2.885 2.885 0 0 1 0-4.079zM16.064 14.953c-.765 0-1.384.62-1.384 1.384v2.528c0 .765.62 1.385 1.384 1.385h2.528c.764 0 1.384-.62 1.384-1.385v-2.528c0-.764-.62-1.384-1.384-1.384zm-2.884 1.384a2.884 2.884 0 0 1 2.884-2.884h2.528a2.884 2.884 0 0 1 2.884 2.884v2.528a2.884 2.884 0 0 1-2.884 2.885h-2.528a2.884 2.884 0 0 1-2.884-2.885zM5.384 14.953c-.764 0-1.384.62-1.384 1.384v2.528c0 .765.62 1.385 1.384 1.385h2.528c.765 0 1.384-.62 1.384-1.385v-2.528c0-.764-.62-1.384-1.384-1.384zM2.5 16.337a2.884 2.884 0 0 1 2.884-2.884h2.528a2.884 2.884 0 0 1 2.884 2.884v2.528a2.884 2.884 0 0 1-2.884 2.885H5.384A2.884 2.884 0 0 1 2.5 18.865z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceOutline;
