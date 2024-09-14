import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogCircleLight = ({
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
      d="M12 21.3a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.471 14.424c.176.446.772 1.47 1.755 1.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.019 10.505c-.265 1.407-.511 4.658 1.881 4.361 0 0 1.778-1.041.794-4.646-.601-2.202-2.04-2.899-3.41-2.78l-1.208.095C9.5 7.639 9.285 8.942 9.374 9.5l-2.6 1.104c.023.966.474 2.852 2.094 2.668s2.146-.322 2.208-.368c.322.989.177 2.758-.667 4.145"
    />
  </Svg>
);
export default IconlystDogCircleLight;
