import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCeloTwoTone = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M10.068 20.999a6.568 6.568 0 1 0 0-13.137 6.568 6.568 0 0 0 0 13.137Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M14.932 16.135a6.568 6.568 0 1 0 0-13.136 6.568 6.568 0 0 0 0 13.136Z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCeloTwoTone;
