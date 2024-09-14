import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindLeftDirectionOutline = ({
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
      d="M17.735 6.028c-.823.501-1.886.501-2.71 0a4.13 4.13 0 0 0-4.268 0c-.823.501-1.887.501-2.71 0a4.13 4.13 0 0 0-4.269 0 .75.75 0 1 0 .78 1.282c.823-.5 1.886-.5 2.71 0a4.13 4.13 0 0 0 4.268 0c.824-.5 1.887-.5 2.71 0a4.13 4.13 0 0 0 4.269 0c.823-.5 1.886-.5 2.71 0a.75.75 0 0 0 .779-1.282 4.13 4.13 0 0 0-4.269 0M17.735 11.844c-.823.5-1.886.5-2.71 0a4.13 4.13 0 0 0-4.268 0 .75.75 0 1 0 .78 1.282c.823-.501 1.886-.501 2.71 0a4.13 4.13 0 0 0 4.268 0c.823-.501 1.886-.501 2.71 0a.75.75 0 0 0 .779-1.282 4.13 4.13 0 0 0-4.269 0M17.735 17.66c-.823.5-1.886.5-2.71 0a4.13 4.13 0 0 0-4.268 0c-.823.5-1.887.5-2.71 0a4.13 4.13 0 0 0-4.269 0 .75.75 0 1 0 .78 1.28c.823-.5 1.886-.5 2.71 0a4.13 4.13 0 0 0 4.268 0c.824-.5 1.887-.5 2.71 0a4.13 4.13 0 0 0 4.269 0c.823-.5 1.886-.5 2.71 0a.75.75 0 0 0 .779-1.28 4.13 4.13 0 0 0-4.269 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.555 3.501a.75.75 0 0 1-.046 1.06L4.725 6.195l1.76 1.613a.75.75 0 0 1-1.013 1.106L3.109 6.748a.75.75 0 0 1 0-1.106l2.387-2.187a.75.75 0 0 1 1.06.046M6.555 15.132a.75.75 0 0 1-.046 1.06l-1.784 1.634 1.76 1.613a.75.75 0 0 1-1.013 1.106L3.109 18.38a.75.75 0 0 1 0-1.106l2.387-2.187a.75.75 0 0 1 1.06.046M13.534 9.317a.75.75 0 0 1-.047 1.06l-1.784 1.633 1.761 1.614a.75.75 0 0 1-1.013 1.106l-2.365-2.167a.75.75 0 0 1 0-1.106l2.388-2.187a.75.75 0 0 1 1.06.047"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWindLeftDirectionOutline;
