import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerPlusBold = ({
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
      d="M14.711 13.785h-1.81v1.81c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.81h-1.8c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h1.8v-1.8c0-.41.34-.75.75-.75s.75.34.75.75v1.8h1.81a.749.749 0 1 1 0 1.5m-2.56-8.73c-4.4 0-7.98 3.58-7.98 7.98s3.58 7.98 7.98 7.98 7.98-3.58 7.98-7.98-3.58-7.98-7.98-7.98M6.792 4.385a.75.75 0 1 0-.78-1.281A11.5 11.5 0 0 0 2.54 6.4a.75.75 0 1 0 1.236.849 10 10 0 0 1 3.016-2.864M21.776 6.4a11.5 11.5 0 0 0-3.484-3.307.75.75 0 0 0-.776 1.284A10 10 0 0 1 20.54 7.25a.75.75 0 1 0 1.236-.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerPlusBold;
