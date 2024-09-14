import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser2Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.246 2.8a.3.3 0 0 0-.3-.3H7.9c-1.91 0-3.246 1.393-3.246 3.389V18.11c0 2.027 1.305 3.39 3.246 3.39h3.046a.3.3 0 0 0 .3-.3zM16.099 2.5h-3.053a.3.3 0 0 0-.3.3v18.4a.3.3 0 0 0 .3.3h3.052c1.942 0 3.248-1.363 3.248-3.39V5.889c0-1.996-1.335-3.389-3.247-3.389" />
    </G>
    <Path
      fill={props.color}
      d="M8.947 13.03a.75.75 0 0 0 1.5 0v-2.061a.75.75 0 0 0-1.5 0zM14.304 13.78a.75.75 0 0 0 .75-.75v-2.061a.75.75 0 0 0-1.5 0v2.06c0 .415.336.75.75.75"
    />
  </Svg>
);
export default IconlystDresser2Bulk;
