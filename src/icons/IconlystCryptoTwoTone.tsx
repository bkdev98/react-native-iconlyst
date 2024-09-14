import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.194 9.34c.009-.158.017-.316.017-.483a5.82 5.82 0 0 0-5.824-5.824 5.826 5.826 0 0 0-5.823 5.824 5.83 5.83 0 0 0 5.823 5.823c.168 0 .325-.009.483-.017"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 15.144a5.821 5.821 0 1 0-11.645 0 5.822 5.822 0 0 0 11.645 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 16.363a5.83 5.83 0 0 0 3.804 4.317M21.28 7.47a5.83 5.83 0 0 0-3.803-4.318"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCryptoTwoTone;
