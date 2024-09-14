import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignBottomOutline = ({
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
      fillRule="evenodd"
      d="M2.5 5.198A2.95 2.95 0 0 1 5.448 2.25h2.604A2.95 2.95 0 0 1 11 5.198v13.604a2.95 2.95 0 0 1-2.948 2.948H5.448A2.95 2.95 0 0 1 2.5 18.802zM5.448 3.75C4.648 3.75 4 4.398 4 5.198v13.604c0 .8.648 1.448 1.448 1.448h2.604c.8 0 1.448-.648 1.448-1.448V5.198c0-.8-.648-1.448-1.448-1.448zM13.5 12.198a2.95 2.95 0 0 1 2.948-2.948h2.604A2.95 2.95 0 0 1 22 12.198v6.604a2.95 2.95 0 0 1-2.948 2.948h-2.604a2.95 2.95 0 0 1-2.948-2.948zm2.948-1.448c-.8 0-1.448.648-1.448 1.448v6.604c0 .8.648 1.448 1.448 1.448h2.604c.8 0 1.448-.648 1.448-1.448v-6.604c0-.8-.648-1.448-1.448-1.448z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignBottomOutline;
