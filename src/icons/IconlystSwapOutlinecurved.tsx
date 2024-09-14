import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapOutlinecurved = ({
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
      d="M2.86 9.35a.75.75 0 0 0 1.013-.314c.61-1.158 1.723-2.744 2.656-3.399v11.568a.75.75 0 0 0 1.5 0V5.638c.934.655 2.054 2.242 2.667 3.399a.751.751 0 0 0 1.326-.702c-.397-.751-2.495-4.5-4.743-4.5s-4.337 3.75-4.732 4.5A.75.75 0 0 0 2.86 9.35M17.96 18.362V6.795a.75.75 0 0 0-1.5 0v11.568c-.935-.656-2.054-2.242-2.668-3.4a.75.75 0 0 0-1.325.701c.396.752 2.494 4.5 4.742 4.5 2.249 0 4.346-3.748 4.744-4.5a.75.75 0 1 0-1.326-.7c-.613 1.156-1.733 2.743-2.667 3.398"
    />
  </Svg>
);
export default IconlystSwapOutlinecurved;
