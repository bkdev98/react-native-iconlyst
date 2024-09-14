import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBurgerLight = ({
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
      d="m16.494 2.75-.78.78a2.16 2.16 0 0 0-.635 1.532V6.86M10.79 11.601l-.428-3.38a1.197 1.197 0 0 1 1.186-1.36h7.924c.726 0 1.286.641 1.186 1.361l-1.663 11.995a1.2 1.2 0 0 1-1.186 1.033h-5.504"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.306 21.25H5.674a2.343 2.343 0 0 1-2.343-2.343V16.77A5.17 5.17 0 0 1 8.5 11.601h.982a5.167 5.167 0 0 1 5.168 5.168v2.138a2.343 2.343 0 0 1-2.343 2.343"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.65 17.23h5.977M3.331 17.23H5.46M10.722 10.354h9.63"
    />
  </Svg>
);
export default IconlystBurgerLight;
