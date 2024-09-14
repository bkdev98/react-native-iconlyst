import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassBold = ({
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
      d="M6.725 2.842C8.105 2.471 9.97 2.25 12 2.25s3.895.22 5.275.592c.685.185 1.293.417 1.748.707.414.263.901.706.912 1.364v.039q-.002.093-.015.18l-1.173 12.95a3.3 3.3 0 0 1-2.007 2.761c-1.17.497-2.862.907-4.74.907-1.877 0-3.567-.41-4.738-.907a3.3 3.3 0 0 1-2.008-2.761L4.079 5.127a1.3 1.3 0 0 1-.014-.193c0-.669.493-1.119.912-1.385.455-.29 1.063-.522 1.747-.707M5.619 4.934a1.3 1.3 0 0 1 .163-.12c.273-.173.717-.358 1.332-.523 1.22-.329 2.948-.541 4.886-.541s3.665.212 4.886.54c.615.166 1.06.35 1.332.524q.112.074.163.12a1.3 1.3 0 0 1-.163.12c-.273.174-.717.358-1.333.524-1.22.329-2.948.541-4.885.541-1.938 0-3.665-.212-4.885-.541-.616-.166-1.06-.35-1.333-.524a1.3 1.3 0 0 1-.163-.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlassBold;
