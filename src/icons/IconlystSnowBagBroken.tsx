import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBagBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.307 18.154c-.884-2.206.208-4.325 1.349-6.224.695-1.156 1.444-2.293 2.17-3.43L6.842 4.9s.15-.132.53-.425c1.134-.877 2.373-1.105 3.714-.584 1.276.498 2.572.873 3.959.794.404-.023 1.952-.228 1.952-.228L15.177 8.49c.727 1.139 1.473 2.283 2.168 3.439 1.141 1.9 2.233 4.018 1.35 6.224-1.03 2.568-4.033 3.419-6.695 3.46-1.337-.02-2.761-.246-3.977-.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.826 8.51q2.07.476 4.143.33M12 12.939v4.712M14.041 14.117l-4.082 2.357M14.041 16.474l-4.082-2.357"
    />
  </Svg>
);
export default IconlystSnowBagBroken;
