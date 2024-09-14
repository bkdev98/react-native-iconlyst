import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Bulksharp = ({
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
      d="M2.75 7.803V3.395h9.5v17.343L9.5 21.813V14.69z"
    />
    <Path
      fill={props.color}
      d="M15 14.69v4.973l-2.75 1.075V3.395h9.5v4.408z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilter2Bulksharp;
