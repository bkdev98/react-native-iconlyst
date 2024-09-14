import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasLampBroken = ({
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
      d="M8.102 11.848 7.59 14.79a.9.9 0 0 0 1.31.938l2.682-1.39a.92.92 0 0 1 .841 0l2.68 1.39a.901.901 0 0 0 1.311-.939l-.513-2.943a.88.88 0 0 1 .26-.789l2.17-2.084a.888.888 0 0 0-.5-1.52l-1.5-.216"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.156 14.864-2.551 6.314a.5.5 0 0 0 .464.687h2.014M12.84 14.864l2.552 6.314a.5.5 0 0 1-.464.687h-1.465M14.15 6.535l-1.341-2.679a.909.909 0 0 0-1.614 0l-1.343 2.68a.9.9 0 0 1-.68.487l-3 .432a.888.888 0 0 0-.5 1.52l1.085 1.042"
    />
  </Svg>
);
export default IconlystChristmasLampBroken;
