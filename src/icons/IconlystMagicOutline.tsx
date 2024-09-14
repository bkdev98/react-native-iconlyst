import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicOutline = ({
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
      d="M11.902 3.166a.75.75 0 0 1 .75.75v2.035a.75.75 0 0 1-1.5 0V3.916a.75.75 0 0 1 .75-.75m6.65 2.754a.75.75 0 0 1 0 1.06l-1.44 1.44a.75.75 0 0 1-1.061-1.061l1.44-1.44a.75.75 0 0 1 1.06 0m-13.298 0a.75.75 0 0 1 1.06 0l1.44 1.44a.75.75 0 1 1-1.061 1.06l-1.44-1.44a.75.75 0 0 1 0-1.06M2.5 12.568a.75.75 0 0 1 .75-.75h2.035a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75m15.269 0a.75.75 0 0 1 .75-.75h2.035a.75.75 0 0 1 0 1.5h-2.035a.75.75 0 0 1-.75-.75M7.753 16.716a.75.75 0 0 1 0 1.061l-1.439 1.44a.75.75 0 0 1-1.06-1.061l1.439-1.44a.75.75 0 0 1 1.06 0m4.149 1.72a.75.75 0 0 1 .75.75v2.035a.75.75 0 0 1-1.5 0v-2.036a.75.75 0 0 1 .75-.75M16.05 16.717a.75.75 0 0 1 1.06 0l4.67 4.669a.75.75 0 0 1-1.061 1.06l-4.67-4.669a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicOutline;
