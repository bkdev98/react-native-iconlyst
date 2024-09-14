import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreLight = ({
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
      d="M20.99 11.386v-2.97C21 5.4 19.177 3.758 16.234 3.758H7.774c-2.934 0-4.766 1.641-4.766 4.658V15.5c0 3.064 1.832 4.743 4.766 4.743H12M21 8.574H3M12.156 12.375h-.535m-4.418 3.457h2.21m-.497-3.457H7.262"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.532 18.78 21 20.242m-3.453-6.516a2.916 2.916 0 1 1-.001 5.832 2.916 2.916 0 0 1 0-5.832"
    />
  </Svg>
);
export default IconlystSubtitleExploreLight;
