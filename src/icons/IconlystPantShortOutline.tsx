import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPantShortOutline = ({
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
      d="M18.218 19.887h-2.267a2.54 2.54 0 0 1-2.438-1.8L12 13.139l-1.514 4.944a2.54 2.54 0 0 1-2.439 1.8H5.78a2.54 2.54 0 0 1-2.54-2.314l-.98-10.67A2.55 2.55 0 0 1 4.8 4.12h14.4a2.55 2.55 0 0 1 2.54 2.784l-.98 10.666a2.54 2.54 0 0 1-2.542 2.318M12 11.037a1.245 1.245 0 0 1 1.2.887l1.751 5.72a1.04 1.04 0 0 0 1 .743h2.267a1.046 1.046 0 0 0 1.047-.954l.98-10.667a1.05 1.05 0 0 0-1.045-1.147H4.8a1.05 1.05 0 0 0-1.046 1.146l.98 10.668a1.046 1.046 0 0 0 1.046.954h2.267a1.05 1.05 0 0 0 1.005-.743l1.751-5.72A1.245 1.245 0 0 1 12 11.038"
    />
    <Path
      fill={props.color}
      d="M3.399 11.771a.75.75 0 0 1-.114-1.491 5.34 5.34 0 0 0 4.532-5.31v-.107a.75.75 0 1 1 1.5 0v.107a6.835 6.835 0 0 1-5.8 6.793 1 1 0 0 1-.118.008M20.609 11.771a1 1 0 0 1-.116-.008 6.836 6.836 0 0 1-5.811-6.793v-.107a.75.75 0 1 1 1.5 0v.107a5.34 5.34 0 0 0 4.54 5.31.75.75 0 0 1-.113 1.491"
    />
  </Svg>
);
export default IconlystPantShortOutline;
