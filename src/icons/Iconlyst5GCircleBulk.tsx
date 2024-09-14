import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GCircleBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.306 13.41c0 1.208-.838 1.93-2.241 1.93a3.07 3.07 0 0 1-2.243-.941c-.629-.656-.967-1.596-.927-2.581a3.42 3.42 0 0 1 1.109-2.368c.625-.57 1.423-.865 2.231-.82q.702.04 1.313.334a.75.75 0 1 1-.65 1.35 1.9 1.9 0 0 0-.743-.185 1.63 1.63 0 0 0-1.141.429c-.373.34-.599.823-.62 1.323-.024.577.162 1.117.511 1.479.3.314.702.48 1.16.48.741 0 .741-.22.741-.43v-.68h-.741a.75.75 0 0 1 0-1.5h1.491a.75.75 0 0 1 .75.75zm-8.622 1.95a2.34 2.34 0 0 1-1.949-1.056.75.75 0 0 1 1.251-.83.83.83 0 0 0 .698.386c.482 0 .874-.39.874-.87a.555.555 0 0 0-.563-.56H7.549a.751.751 0 0 1-.745-.835l.263-2.32a.75.75 0 0 1 .745-.665h2.272a.75.75 0 0 1 0 1.5H8.482l-.093.82h.606c1.138 0 2.063.924 2.063 2.06a2.375 2.375 0 0 1-2.374 2.37"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst5GCircleBulk;
