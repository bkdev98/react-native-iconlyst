import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCloseLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.076 3.857a2.684 2.684 0 0 1 2.685 2.685v1.364a3.77 3.77 0 0 1-1.247 2.801l-4.924 4.871c-.324.29-.509.706-.509 1.142v1.99c0 .63-.384 1.197-.97 1.43l-1.882.749a1.54 1.54 0 0 1-2.108-1.43v-3.224c0-.409-.163-.8-.45-1.089l-4.367-3.887a3.77 3.77 0 0 1-1.105-2.667v-2.05a2.684 2.684 0 0 1 2.685-2.685M15.18 3l-4.4 4.4m4.4 0L10.78 3"
    />
  </Svg>
);
export default IconlystFilterCloseLight;
