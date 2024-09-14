import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBroken = ({
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
      d="M15.813 12.022H3.77M12.885 9.106l.732.729m2.196 2.187-2.928 2.916M8.504 7.389v-.933a3.684 3.684 0 0 1 3.685-3.684h4.884a3.675 3.675 0 0 1 3.675 3.675v5.57M8.504 16.655v.942a3.675 3.675 0 0 0 3.674 3.675h4.885a3.685 3.685 0 0 0 3.685-3.685v-1.785"
    />
  </Svg>
);
export default IconlystLoginBroken;
