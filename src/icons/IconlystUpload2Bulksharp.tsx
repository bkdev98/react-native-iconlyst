import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpload2Bulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 10.965v11.52H22v-11.52z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.5 2.543c0 2.012-1.833 3.844-3.846 3.844h-.75v1.5h.75c1.477 0 2.857-.675 3.846-1.719v11.04H13V6.168c.99 1.044 2.368 1.719 3.845 1.719h.75v-1.5h-.75C14.833 6.387 13 4.554 13 2.542v-.75h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpload2Bulksharp;
