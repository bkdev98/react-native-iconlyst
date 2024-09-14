import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerCloudBulk = ({
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
      <Path d="M15.284 2.25h-7.9c-3.23 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3V7.55c0-3.17-2.25-5.3-5.6-5.3M2.184 12.5a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h2.103c.233 0 .38-.256.285-.468a4.6 4.6 0 0 1-.398-1.882c0-1.89 1.03-3.44 2.58-4.17a5.3 5.3 0 0 1 1.096-1.572c.217-.212.075-.658-.229-.658z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.984 7.9h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5a.749.749 0 1 1 0 1.5m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M7.284 17.1h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M16.766 15.05c-1.255 0-1.65 1.364-1.65 1.75a.75.75 0 0 1-.75.75c-.833 0-1.35.517-1.35 1.35 0 .558.279 1.01.746 1.21.117.037.41.135.508.14h4.996c.166 0 .323 0 .564-.12.458-.2.786-.73.786-1.23 0-.833-.517-1.35-1.35-1.35a.75.75 0 0 1-.75-.75c0-.272-.323-1.75-1.75-1.75m2.5 6.7h-5c-.322 0-.67-.116-1.037-.24-1.08-.458-1.713-1.45-1.713-2.61 0-1.421.888-2.507 2.187-2.782.3-1.22 1.364-2.568 3.063-2.568 1.887 0 2.867 1.428 3.157 2.567 1.303.273 2.193 1.36 2.193 2.783 0 1.108-.681 2.172-1.655 2.589-.518.26-.958.26-1.195.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerCloudBulk;
