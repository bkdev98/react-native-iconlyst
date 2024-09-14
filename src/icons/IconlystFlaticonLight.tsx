import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlaticonLight = ({
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
      d="M9.902 18.14c.422.718.634 1.077.859 1.274.599.523 1.415.521 2.012-.005.224-.197.434-.557.854-1.277l-3.272-5.454 1.693-2.63H8.767L7.349 7.692h6.065l2.025-3.496H4.735c-1.337 0-2.17 1.45-1.496 2.605 2.214 3.784 4.444 7.559 6.663 11.34"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.258 4.195c1.367 0 2.199 1.508 1.474 2.668-1.908 3.051-3.727 6.02-5.656 9.17l-2.057-3.286 5.159-8.551z"
    />
  </Svg>
);
export default IconlystFlaticonLight;
