import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsOutline = ({
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
      d="M2.25 18.78a2.861 2.861 0 1 1 5.723 0 2.861 2.861 0 0 1-5.723 0m2.861-1.362a1.361 1.361 0 1 0 0 2.723 1.361 1.361 0 0 0 0-2.723M16.027 6.111a2.861 2.861 0 0 1 5.723 0V18.78a2.861 2.861 0 0 1-5.723 0zM18.89 4.75c-.752 0-1.362.61-1.362 1.361V18.78a1.362 1.362 0 0 0 2.723 0V6.11c0-.751-.61-1.361-1.361-1.361M8.947 12.252a2.861 2.861 0 0 1 5.723 0v6.526a2.861 2.861 0 0 1-5.723 0zm2.862-1.361c-.752 0-1.362.61-1.362 1.361v6.526a1.361 1.361 0 1 0 2.723 0v-6.526c0-.752-.61-1.361-1.361-1.361"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsOutline;
