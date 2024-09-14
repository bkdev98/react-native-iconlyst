import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpEnterBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.904 8.638v-1.8c0-1.99 1.612-3.6 3.6-3.6H11.3M20.1 8.638v-1.8a3.6 3.6 0 0 0-3.6-3.6h-1.407M14.28 9.12l-2.278-2.28-2.28 2.28M12.001 21.249h5.6a2.5 2.5 0 0 0 2.5-2.5v-2.17a2.5 2.5 0 0 0-2.5-2.5H6.4a2.5 2.5 0 0 0-2.5 2.5v2.17a2.5 2.5 0 0 0 2.5 2.5h.8M12.003 14.07V6.843"
    />
  </Svg>
);
export default IconlystUpEnterBroken;
