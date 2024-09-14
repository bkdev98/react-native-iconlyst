import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitchBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.898 12.519a.75.75 0 0 1-1.5 0v-4.29a.75.75 0 0 1 1.5 0zm-3.988 0a.75.75 0 0 1-1.5 0v-4.29a.75.75 0 0 1 1.5 0zm7.355-9.51H6.512c-.397 0-.777.17-1.045.47L3.685 5.506c-.219.26-.34.584-.34.912v10.9c0 .767.624 1.39 1.391 1.39h2.6a.39.39 0 0 1 .391.39v2.41a.5.5 0 0 0 .5.5h.431a.5.5 0 0 0 .375-.168l2.659-3.01a.4.4 0 0 1 .286-.121h4.35c.408 0 .793-.177 1.051-.482l2.945-3.39c.217-.262.331-.577.331-.908v-9.53c0-.767-.624-1.39-1.39-1.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitchBold;
