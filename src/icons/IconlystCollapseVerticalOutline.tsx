import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCollapseVerticalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15 11.75a.75.75 0 0 0 .53-.22l4-4a.75.75 0 0 0-1.06-1.06l-2.72 2.72V3a.75.75 0 0 0-1.5 0v6.19l-2.72-2.72a.75.75 0 1 0-1.06 1.06l4 4c.14.141.331.22.53.22M9 12.25a.75.75 0 0 0-.53.22l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72V21a.75.75 0 0 0 1.5 0v-6.19l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-.53-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCollapseVerticalOutline;
