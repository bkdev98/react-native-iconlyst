import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchBroken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.867 16.167a6.83 6.83 0 0 0 7.365-1.51 6.8 6.8 0 0 0 1.497-7.378l-3.4 3.4c-.307.306-.746.44-1.171.356l-1.605-.318a1.3 1.3 0 0 1-1.023-1.02l-.32-1.61a1.3 1.3 0 0 1 .355-1.174l3.399-3.399a6.84 6.84 0 0 0-4.287-.278M9.586 5.012a6.82 6.82 0 0 0-1.504 7.371l-4.068 4.068a2.677 2.677 0 0 0 .096 3.877c1.076.977 2.768.83 3.795-.197l1.981-1.982"
    />
  </Svg>
);
export default IconlystWrenchBroken;
