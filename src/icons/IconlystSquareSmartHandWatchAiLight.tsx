import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareSmartHandWatchAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.826 22h6.348M8.826 2h6.348"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.086 5.291H8.92c-2.14 0-3.475 1.191-3.475 3.382v6.591c0 2.224 1.335 3.443 3.475 3.443h6.16c2.146 0 3.475-1.198 3.475-3.388V8.673c.006-2.19-1.323-3.382-3.469-3.382"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.422 15.03-.101-.272a3.76 3.76 0 0 0-2.222-2.225l-.273-.102.273-.1a3.76 3.76 0 0 0 2.222-2.226l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.221 2.225zM15.016 8.967v.01"
    />
  </Svg>
);
export default IconlystSquareSmartHandWatchAiLight;
