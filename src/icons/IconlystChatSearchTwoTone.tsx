import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatSearchTwoTone = ({
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
      d="m11.756 20.277-1.422-1.426a2.15 2.15 0 0 0-1.525-.634H7.74a3.946 3.946 0 0 1-3.94-3.953V7.325a3.946 3.946 0 0 1 3.94-3.952h10.122a3.945 3.945 0 0 1 3.939 3.952v6.94a3.946 3.946 0 0 1-3.939 3.952h-1.068c-.572 0-1.121.228-1.526.634l-1.422 1.426c-.577.58-1.512.58-2.09 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.424 12.3a2.78 2.78 0 0 1-3.938 0 2.8 2.8 0 0 1 0-3.952 2.78 2.78 0 0 1 3.938 0 2.8 2.8 0 0 1 0 3.952m0 0 1.51 1.514"
    />
  </Svg>
);
export default IconlystChatSearchTwoTone;
