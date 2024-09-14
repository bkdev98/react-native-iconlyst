import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapBold = ({
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
      d="M9 19.005a1 1 0 0 1-.6-.2l-6-4.5a1 1 0 0 1 0-1.6l6-4.5a1 1 0 0 1 1.6.8v2h5a1 1 0 0 1 1 1v1l3.333-2.5L16 8.005v1a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2v-2a1.001 1.001 0 0 1 1.6-.8l6 4.5a1 1 0 0 1 0 1.6l-6 4.5a1.001 1.001 0 0 1-1.6-.8v-2H9a1 1 0 0 1-1-1v-1l-3.333 2.5L8 16.005v-1a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapBold;
