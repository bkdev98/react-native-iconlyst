import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitRightOutline = ({
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
      d="M17.203 3.59a.75.75 0 0 1 1.06.031l2.782 2.949a.75.75 0 0 1 0 1.03l-2.782 2.949a.75.75 0 1 1-1.091-1.03l2.297-2.434-2.297-2.435a.75.75 0 0 1 .03-1.06m0 9.83a.75.75 0 0 1 1.06.032l2.782 2.949a.75.75 0 0 1 0 1.029l-2.782 2.95a.75.75 0 1 1-1.091-1.03l2.297-2.435-2.297-2.434a.75.75 0 0 1 .03-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.614 11.017a4.68 4.68 0 0 1 4.682-4.683H20.5a.75.75 0 0 1 0 1.5h-5.203a3.18 3.18 0 0 0-3.183 3.183v1.966a3.18 3.18 0 0 0 3.182 3.182H20.5a.75.75 0 0 1 0 1.5h-5.203a4.68 4.68 0 0 1-4.683-4.682z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 12a.75.75 0 0 1 .75-.75h7.865a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsSplitRightOutline;
