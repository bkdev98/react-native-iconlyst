import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramBroken = ({
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
      d="m11.601 14.313 5.28 5.278a.996.996 0 0 0 1.675-.482l3.17-13.877a.91.91 0 0 0-1.233-1.046L12.421 7.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.263 15.961-2.325 1.986a.714.714 0 0 1-1.163-.401l-.886-4.36-4.297-.546c-.982-.124-1.159-1.47-.243-1.846l4.036-1.651M8.889 13.184l7.29-4.909"
    />
  </Svg>
);
export default IconlystTelegramBroken;
