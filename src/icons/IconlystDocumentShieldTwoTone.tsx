import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentShieldTwoTone = ({
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
      d="M14.285 3.283a2.05 2.05 0 0 1 1.479.631l3.791 3.95c.366.38.572.89.572 1.42v8.164a3.813 3.813 0 0 1-3.658 3.835H8.543a3.753 3.753 0 0 1-3.67-3.835V6.941a3.75 3.75 0 0 1 3.761-3.658z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.769 3.346v2.893a2.56 2.56 0 0 0 2.554 2.56h2.739"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.084 16.91s2.49-.754 2.49-2.832c0-2.08.09-2.012-.11-2.214s-2.053-.846-2.38-.846-2.181.646-2.381.846-.11.134-.11 2.214c0 2.078 2.49 2.832 2.49 2.832"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentShieldTwoTone;
