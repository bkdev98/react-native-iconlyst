import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartbreakBroken = ({
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
      d="M14.881 3.576a5.7 5.7 0 0 1 2.756.17c3.332 1.072 4.529 4.7 3.512 7.877-1.582 5.029-8.648 8.906-8.648 8.906s-4.336-2.36-6.984-5.844"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.172 16.456 1.945-2.898-2.593-2.77 2.593-2.955c.035-.045-.346-1.09-.504-1.414-.461-.947-1.151-1.797-2.072-2.328-1.249-.722-2.829-.78-4.185-.347-3.333 1.074-4.52 4.702-3.504 7.878"
    />
  </Svg>
);
export default IconlystHeartbreakBroken;
