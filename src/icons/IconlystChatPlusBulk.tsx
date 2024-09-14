import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatPlusBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.362 3.34H7.24c-2.31 0-4.19 1.885-4.19 4.202v6.939c0 2.318 1.88 4.203 4.19 4.203h1.069c.502 0 .994.204 1.348.56l1.42 1.427c.329.328.763.508 1.224.508.462 0 .896-.18 1.222-.508l1.422-1.426a1.92 1.92 0 0 1 1.349-.561h1.068c2.309 0 4.189-1.885 4.189-4.203V7.54c0-2.316-1.88-4.201-4.19-4.201"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.614 11.909H13.05v1.577a.75.75 0 0 1-1.5 0v-1.577H9.988a.75.75 0 1 1 0-1.5h1.563V8.836a.75.75 0 1 1 1.5 0v1.573h1.563a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatPlusBulk;
