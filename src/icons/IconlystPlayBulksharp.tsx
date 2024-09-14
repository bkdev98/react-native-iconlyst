import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBulksharp = ({
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
      d="M12.25 2.854c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75S22 17.98 22 12.604s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path fill={props.color} d="M10.253 9.215v6.768l5.329-3.384z" />
  </Svg>
);
export default IconlystPlayBulksharp;
