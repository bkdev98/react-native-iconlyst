import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoscumentLockLight = ({
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
      d="M13.785 3.283a2.05 2.05 0 0 1 1.479.631l3.791 3.95c.366.38.572.89.572 1.42v8.164a3.813 3.813 0 0 1-3.658 3.835H8.043a3.753 3.753 0 0 1-3.67-3.835V6.941a3.75 3.75 0 0 1 3.761-3.658z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.275 17.168h-2.736c-.75 0-1.358-.608-1.358-1.358v-1.536c0-.75.608-1.358 1.358-1.358h2.736c.75 0 1.359.608 1.359 1.358v1.536c0 .75-.61 1.358-1.36 1.358"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.54 12.943v-1.011a1.634 1.634 0 0 0-3.266-.008v1.019M14.269 3.346v2.893a2.56 2.56 0 0 0 2.554 2.56h2.739"
    />
  </Svg>
);
export default IconlystDoscumentLockLight;
