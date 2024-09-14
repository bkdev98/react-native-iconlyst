import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatPlusBold = ({
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
      d="M14.614 11.909H13.05v1.577a.75.75 0 0 1-1.5 0v-1.577H9.988a.75.75 0 1 1 0-1.5h1.563V8.836a.75.75 0 1 1 1.5 0v1.573h1.563a.75.75 0 0 1 0 1.5m2.748-8.57H7.24c-2.31 0-4.19 1.886-4.19 4.203v6.939c0 2.317 1.88 4.203 4.19 4.203h1.069c.502 0 .993.204 1.347.56l1.422 1.426a1.72 1.72 0 0 0 1.223.509c.462 0 .896-.181 1.222-.51l1.422-1.425c.355-.356.847-.56 1.349-.56h1.068c2.309 0 4.189-1.886 4.189-4.203V7.54c0-2.316-1.88-4.201-4.19-4.201"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatPlusBold;
