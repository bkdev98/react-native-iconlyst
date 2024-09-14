import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatProfileBroken = ({
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
      strokeWidth={1.429}
      d="M3.8 7.325a3.946 3.946 0 0 1 3.94-3.952h10.122a3.945 3.945 0 0 1 3.939 3.952v6.94a3.946 3.946 0 0 1-3.939 3.952h-1.068c-.572 0-1.121.228-1.526.634l-1.422 1.426c-.577.58-1.512.58-2.09 0l-1.422-1.426a2.15 2.15 0 0 0-1.525-.634H7.74a3.947 3.947 0 0 1-3.94-3.952v-3.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M12.798 6.69a2.99 2.99 0 0 0-2.986 2.996 2.99 2.99 0 0 0 2.986 2.996 2.99 2.99 0 0 0 2.986-2.996c0-.73-.26-1.4-.693-1.92M8.137 18.22c.036-1.514 1.267-3.353 4.661-3.353 3.413 0 4.644 1.838 4.68 3.353"
    />
  </Svg>
);
export default IconlystChatProfileBroken;
