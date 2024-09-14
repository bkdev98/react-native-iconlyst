import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersonBroken = ({
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
      d="M3.645 5.78a2.78 2.78 0 1 1 1.33 2.37M8.505 14.413c-.52-1.25-.78-1.87-1.1-2.13-.57-.46-1.38-.46-1.96 0-.56.44-1.01 1.3-1.31 2.3-.79 2.67-.54 6.42 1.31 6.42h2.42c.9 0 1.36 0 1.67-.14.55-.25.91-.79.93-1.39 0-.34-.16-.76-.51-1.59M19.885 4.236c.3.44.47.98.47 1.56 0 1.54-1.24 2.78-2.78 2.78s-2.78-1.24-2.78-2.78a2.78 2.78 0 0 1 2.78-2.78M15.505 14.413c.52-1.25.78-1.87 1.1-2.13.57-.46 1.38-.46 1.96 0 2.06 1.63 2.54 8.72 0 8.72h-2.42c-.9 0-1.36 0-1.66-.14-.55-.25-.91-.79-.93-1.39 0-.34.17-.76.51-1.59"
    />
  </Svg>
);
export default IconlystPersonBroken;
