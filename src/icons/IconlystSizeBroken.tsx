import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSizeBroken = ({
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
      d="M19.914 7.545c0-2.607-1.624-4.45-4.235-4.45H8.215c-2.602 0-4.234 1.843-4.234 4.45M8.214 19.03c-2.61 0-4.234-1.843-4.234-4.45v-3.517M19.46 20.905c1.553 0 2.52-1.097 2.52-2.65v-4.188c0-1.553-.966-2.649-2.52-2.649h-4.446c-1.549 0-2.52 1.097-2.52 2.65v4.187c0 1.553.966 2.65 2.52 2.65h1.06"
    />
  </Svg>
);
export default IconlystSizeBroken;
