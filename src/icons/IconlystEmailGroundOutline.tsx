import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailGroundOutline = ({
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
      fill={props.color}
      d="M6.76 20.331a.75.75 0 0 1-.632-.348l-2.7-4.258a4.97 4.97 0 0 1 1.3-7.057l6.7-4.269a4.98 4.98 0 0 1 6.942 1.818l2.718 4.294a5.44 5.44 0 0 1 .8 4.121 4.6 4.6 0 0 1-2.1 2.926l-3.953 2.52a.75.75 0 0 1-1.07-.21.75.75 0 0 1 .27-1.057l3.962-2.517a3.13 3.13 0 0 0 1.436-1.988 3.95 3.95 0 0 0-.607-2.988l-2.718-4.294a3.477 3.477 0 0 0-4.873-1.354l-6.7 4.268a3.47 3.47 0 0 0-.838 4.988l2.7 4.257a.75.75 0 0 1-.636 1.148"
    />
    <Path
      fill={props.color}
      d="M11.73 14.603q-.126 0-.252-.013l-4.036-.458a.75.75 0 1 1 .168-1.49l4.03.457a.87.87 0 0 0 .91-.582l1.274-3.821a.75.75 0 1 1 1.424.476L13.968 13a2.36 2.36 0 0 1-2.238 1.603M21.26 20.33h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystEmailGroundOutline;
