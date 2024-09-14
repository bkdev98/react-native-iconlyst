import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatHappyLight = ({
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
      d="M8.986 11.459a3.619 3.619 0 0 0 6.63 0"
    />
  </Svg>
);
export default IconlystChatHappyLight;
