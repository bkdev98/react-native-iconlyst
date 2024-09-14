import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDanger2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        strokeWidth={1.5}
        d="M4.814 20.437h14.383c1.582 0 2.575-1.71 1.789-3.084L13.8 4.788c-.791-1.383-2.785-1.384-3.577-.001L3.025 17.352c-.786 1.374.206 3.085 1.789 3.085M12.002 13.415v-3.1"
      />
      <Path strokeWidth={2} d="M11.995 16.5h.01" />
    </G>
  </Svg>
);
export default IconlystDanger2Light;
