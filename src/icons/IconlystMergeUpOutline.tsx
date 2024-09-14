import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMergeUpOutline = ({
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
      d="M11.47 3.327a.75.75 0 0 1 1.06 0l3.536 3.535a.75.75 0 1 1-1.06 1.061L12.75 5.668v7.475a.75.75 0 0 1-.256.565l-8 7a.75.75 0 0 1-.988-1.13l7.744-6.775V5.668L8.995 7.923a.75.75 0 0 1-1.06-1.06zm2.197 11.583a.75.75 0 0 1 1.056-.1l5.755 4.755a.75.75 0 0 1-.956 1.156l-5.755-4.755a.75.75 0 0 1-.1-1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMergeUpOutline;
