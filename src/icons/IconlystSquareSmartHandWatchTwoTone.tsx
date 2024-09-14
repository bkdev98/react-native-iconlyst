import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareSmartHandWatchTwoTone = ({
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
      d="M9.326 22h6.348M9.326 2h6.348"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.586 5.291H9.42c-2.14 0-3.475 1.191-3.475 3.382v6.591c0 2.224 1.335 3.443 3.475 3.443h6.16c2.146 0 3.475-1.198 3.475-3.388V8.673c.006-2.19-1.323-3.382-3.469-3.382"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareSmartHandWatchTwoTone;
