import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.07 9.716h3.812a1.446 1.446 0 0 0 1.256-2.162L8.243 4.23a1.446 1.446 0 0 0-2.508-.007L3.817 7.547a1.446 1.446 0 0 0 1.252 2.169"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.134 18.049a3.45 3.45 0 1 0-6.899 0 3.45 3.45 0 0 0 6.899 0M10.714 21.298a7.476 7.476 0 0 1-7.476-7.476M13.658 3.807a7.476 7.476 0 0 1 7.476 7.475"
    />
  </Svg>
);
export default IconlystChangingLight;
