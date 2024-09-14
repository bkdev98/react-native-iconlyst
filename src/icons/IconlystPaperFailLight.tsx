import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailLight = ({
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
      strokeWidth={1.5}
    >
      <Path d="M14.737 2.762H7.98A3.73 3.73 0 0 0 4.25 6.49V17.34a3.8 3.8 0 0 0 3.822 3.777l.118-.002h7.883a3.77 3.77 0 0 0 3.73-3.775v-9.3z" />
      <Path d="M14.474 2.75v2.91a2.574 2.574 0 0 0 2.568 2.574h2.755M13.576 14.648l-3.466-3.466M10.111 14.648l3.466-3.466" />
    </G>
  </Svg>
);
export default IconlystPaperFailLight;
