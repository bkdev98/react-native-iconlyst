import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsCompleteOutline = ({
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
      d="M8.66 16.075a.75.75 0 0 1 0 1.06L6.234 19.56a.75.75 0 0 1-1.06 0L3.72 18.105a.75.75 0 0 1 1.06-1.06l.925.924 1.894-1.894a.75.75 0 0 1 1.06 0M8.66 10.259a.75.75 0 0 1 0 1.06l-2.425 2.425a.75.75 0 0 1-1.06 0L3.72 12.289a.75.75 0 0 1 1.06-1.06l.925.924 1.894-1.894a.75.75 0 0 1 1.06 0M8.66 4.438a.75.75 0 0 1 0 1.061L6.234 7.923a.75.75 0 0 1-1.06 0L3.72 6.47a.75.75 0 0 1 1.06-1.061l.925.924 1.894-1.894a.75.75 0 0 1 1.06 0M10.773 18.059a.75.75 0 0 1 .75-.75h8.728a.75.75 0 0 1 0 1.5h-8.728a.75.75 0 0 1-.75-.75M10.773 12.242a.75.75 0 0 1 .75-.75h8.728a.75.75 0 0 1 0 1.5h-8.728a.75.75 0 0 1-.75-.75M10.773 6.422a.75.75 0 0 1 .75-.75h8.728a.75.75 0 0 1 0 1.5h-8.728a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortsCompleteOutline;
