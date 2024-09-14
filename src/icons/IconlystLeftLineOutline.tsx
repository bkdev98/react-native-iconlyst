import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftLineOutline = ({
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
      d="M13.362 7.134a.75.75 0 0 1-.002 1.061l-3.07 3.056H19a.75.75 0 0 1 0 1.5h-8.705l3.066 3.056a.75.75 0 0 1-1.06 1.063l-4.317-4.304a.75.75 0 0 1-.256-.565v-.003c0-.199.08-.39.22-.53l4.354-4.336a.75.75 0 0 1 1.06.002M5 5.988a.75.75 0 0 1 .75.75v10.525a.75.75 0 0 1-1.5 0V6.738a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftLineOutline;
