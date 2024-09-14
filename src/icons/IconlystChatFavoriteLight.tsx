import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteLight = ({
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
      d="m11.256 20.494-1.422-1.426a2.15 2.15 0 0 0-1.525-.634H7.24a3.947 3.947 0 0 1-3.94-3.953v-6.94A3.946 3.946 0 0 1 7.24 3.59h10.122a3.945 3.945 0 0 1 3.939 3.952v6.94a3.946 3.946 0 0 1-3.939 3.952h-1.068c-.572 0-1.121.227-1.526.634l-1.422 1.426c-.577.58-1.512.58-2.09 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 8.147c-1.329.43-1.802 1.882-1.397 3.152.653 2.035 3.448 3.563 3.448 3.563s2.818-1.551 3.449-3.563c.405-1.27-.072-2.722-1.4-3.152a2.28 2.28 0 0 0-2.049.347 2.26 2.26 0 0 0-2.05-.347"
    />
  </Svg>
);
export default IconlystChatFavoriteLight;
