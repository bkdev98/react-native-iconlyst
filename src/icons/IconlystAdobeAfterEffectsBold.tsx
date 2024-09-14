import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.49 11.779a1.13 1.13 0 0 0-.852.456q-.067.091-.116.204h1.965a1.102 1.102 0 0 0-.997-.66M8.7 12.29h1.126l-.562-1.37z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.178 13.939H14.66q.087.143.194.259c.58.627 1.437.345 1.779.194a.752.752 0 0 1 .606 1.373c-.489.215-.981.32-1.45.32-.786 0-1.507-.295-2.034-.867a3.3 3.3 0 0 1-.85-2.03c-.034-.67.157-1.341.525-1.843a2.65 2.65 0 0 1 2.017-1.065c.624-.046 1.28.224 1.776.673a2.74 2.74 0 0 1 .859 1.66c.015.115.023.376.023.376a.933.933 0 0 1-.927.95m-5.009 2.073a.747.747 0 0 1-.979-.408l-.746-1.814H8.083l-.747 1.814a.75.75 0 1 1-1.387-.57l.939-2.28.004-.011 1.679-4.08a.75.75 0 0 1 1.387 0l1.677 4.078.006.015.936 2.278a.75.75 0 0 1-.408.978M12 3.009c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsBold;
