import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBulksharp = ({
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
      d="m2.96 22.66.95-15.63h16.68l.95 15.63z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.15 4.91c.63-.63 1.51-1 2.4-1h.02c1.78 0 3.22 1.38 3.37 3.12h1.5c-.15-2.57-2.27-4.62-4.87-4.62h-.02c-1.29 0-2.55.52-3.46 1.43-.85.85-1.34 2-1.41 3.19h1.5c.07-.79.4-1.56.97-2.12M9.02 12.4h1.54v-1.5H9.02zM14.63 12.4h1.54v-1.5h-1.54z"
    />
  </Svg>
);
export default IconlystBagBulksharp;
