import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBadgeBroken = ({
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
      d="M21.084 10.335V7.3a3.94 3.94 0 0 0-3.939-3.94H7.024a3.94 3.94 0 0 0-3.94 3.94v6.915a3.94 3.94 0 0 0 3.94 3.94h1.068c.572 0 1.12.226 1.525.63l1.422 1.422a1.476 1.476 0 0 0 2.09 0l1.422-1.421a2.16 2.16 0 0 1 1.526-.632h1.068a3.94 3.94 0 0 0 3.939-3.94v-.728"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.785 7.911c-.812-.341-1.64.049-1.762.97a17.4 17.4 0 0 0 0 3.718c.111.886.864 1.327 1.761.973a9.5 9.5 0 0 0 2.781-1.745c.709-.651.693-1.543 0-2.17a9 9 0 0 0-.613-.513"
    />
  </Svg>
);
export default IconlystVideoBadgeBroken;
