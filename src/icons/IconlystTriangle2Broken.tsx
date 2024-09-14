import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle2Broken = ({
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
      d="m17.756 11.013-3.48-6.107c-.762-1.338-2.689-1.343-3.458-.01L3.77 17.113c-.767 1.329.192 2.989 1.726 2.989h14.008c1.529 0 2.489-1.652 1.732-2.98l-1.74-3.054M3.746 19.061l6.436-3.716M12.5 7.186v6.82M12.5 14.007l8.753 5.054"
    />
  </Svg>
);
export default IconlystTriangle2Broken;
