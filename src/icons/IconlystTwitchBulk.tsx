import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitchBulk = ({
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
      d="M19.265 2.5H6.512c-.397 0-.777.17-1.045.47L3.685 4.997c-.219.26-.34.584-.34.912V16.81c0 .766.624 1.39 1.391 1.39h2.6a.39.39 0 0 1 .391.39V21a.5.5 0 0 0 .5.5h.431a.5.5 0 0 0 .375-.169l2.659-3.009a.4.4 0 0 1 .286-.122h4.35c.408 0 .793-.177 1.051-.482l2.945-3.39c.217-.262.331-.577.331-.908V3.89c0-.767-.624-1.39-1.39-1.39"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.148 12.759a.75.75 0 0 0 .75-.75v-4.29a.75.75 0 0 0-1.5 0v4.29c0 .414.336.75.75.75M11.16 12.759a.75.75 0 0 0 .75-.75v-4.29a.75.75 0 0 0-1.5 0v4.29c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystTwitchBulk;
