import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingTwoTone = ({
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
      d="M5.57 9.716h3.812a1.446 1.446 0 0 0 1.256-2.162L8.743 4.23a1.446 1.446 0 0 0-2.508-.007L4.317 7.547a1.446 1.446 0 0 0 1.252 2.169"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.634 18.049a3.45 3.45 0 1 0-6.899 0 3.45 3.45 0 0 0 6.899 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.214 21.298a7.476 7.476 0 0 1-7.476-7.476M14.158 3.807a7.476 7.476 0 0 1 7.476 7.475"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChangingTwoTone;
