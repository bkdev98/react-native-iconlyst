import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCeloBulk = ({
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
      d="M2.5 14.432a7.57 7.57 0 0 1 7.568-7.568A7.568 7.568 0 1 1 2.5 14.432m7.568-5.568a5.568 5.568 0 1 0 0 11.136 5.568 5.568 0 0 0 0-11.136"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.363 9.568a7.57 7.57 0 0 1 7.568-7.567 7.568 7.568 0 1 1-7.568 7.567m7.568-5.567a5.568 5.568 0 1 0 0 11.136A5.568 5.568 0 0 0 14.93 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCeloBulk;
