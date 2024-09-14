import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsBulk = ({
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
      d="M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.169 15.503a.747.747 0 0 1-.98-.409l-.745-1.813H8.083l-.747 1.813a.75.75 0 1 1-1.387-.57l.939-2.28.004-.01 1.679-4.08a.75.75 0 0 1 1.387 0l1.677 4.078.006.014.936 2.278a.75.75 0 0 1-.408.979M9.826 11.78H8.7l.564-1.369zM17.178 13.43H14.66q.086.142.194.258c.58.627 1.437.345 1.779.194a.752.752 0 0 1 .606 1.374c-.49.214-.981.32-1.45.32-.786 0-1.507-.296-2.034-.867a3.3 3.3 0 0 1-.85-2.03c-.034-.67.157-1.341.525-1.844a2.65 2.65 0 0 1 2.017-1.065c.624-.046 1.28.224 1.776.674a2.74 2.74 0 0 1 .859 1.66c.015.115.023.376.023.376a.933.933 0 0 1-.927.95m-2.54-1.705a1.13 1.13 0 0 1 .852-.456 1.1 1.1 0 0 1 .997.66h-1.965q.049-.112.116-.204"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsBulk;
