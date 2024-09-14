import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchErrorWarningBulk = ({
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
      d="M11.127 2.498c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.796-1.985-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.877 14.309c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75 0-.41.34-.79.75-.79.42 0 .75.3.75.71zM11.877 11.489c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-4.03a.749.749 0 1 1 1.5 0z"
    />
  </Svg>
);
export default IconlystSearchErrorWarningBulk;
