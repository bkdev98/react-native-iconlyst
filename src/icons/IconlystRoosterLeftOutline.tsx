import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoosterLeftOutline = ({
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
      d="M9.99 6.007a3.013 3.013 0 1 1 6.026 0 3.013 3.013 0 0 1-6.027 0m3.013-1.513a1.513 1.513 0 1 0 0 3.026 1.513 1.513 0 0 0 0-3.026M13.003 12.846a.75.75 0 0 1 .75.75v6.66a.75.75 0 1 1-1.5 0v-6.66a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.003 7.52a.75.75 0 0 1 .75.75v2.746a.75.75 0 0 1-1.5 0V8.27a.75.75 0 0 1 .75-.75M19.57 14.286H3.555a.75.75 0 1 1 0-1.5H19.57a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.097 9.994a.75.75 0 0 1 0 1.06l-2.482 2.482 2.482 2.481a.75.75 0 0 1-1.06 1.061l-3.013-3.012a.75.75 0 0 1 0-1.06l3.012-3.012a.75.75 0 0 1 1.06 0M22.086 11.02a.75.75 0 0 1 0 1.061l-1.455 1.455 1.454 1.454a.75.75 0 1 1-1.06 1.06l-1.985-1.984a.75.75 0 0 1 0-1.06l1.985-1.986a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRoosterLeftOutline;
