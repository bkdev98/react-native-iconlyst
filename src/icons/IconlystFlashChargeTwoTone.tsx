import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashChargeTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M20 7.703c-2.105-3.708-6.594-5.512-10.774-4.07C4.536 5.258 2.04 10.38 3.664 15.07c1.614 4.7 6.735 7.196 11.435 5.571a8.96 8.96 0 0 0 5.733-6.093" />
      <Path d="M20.242 4.406v3.3H16.96" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.653 7.843-3.347 4.61a.497.497 0 0 0 .402.79h2.739v2.895c0 .482.617.683.9.292l3.348-4.61a.498.498 0 0 0-.403-.79h-2.739V8.135a.497.497 0 0 0-.9-.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashChargeTwoTone;
