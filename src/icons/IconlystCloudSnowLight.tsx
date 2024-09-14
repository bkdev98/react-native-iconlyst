import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSnowLight = ({
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
      d="M18.618 17.043a4.14 4.14 0 0 0 2.437-3.775c0-2.596-1.833-4.12-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.158 7.495 7.158 9.127c-2.27.02-4.103 1.545-4.103 4.141 0 1.68.999 3.126 2.436 3.775M12.054 16.82l-2.658 1.475m2.658-1.476 2.656-1.476m-2.656 1.476 2.656 1.476m-2.656-1.476-2.658-1.476m2.658 1.476v2.952m0-2.952v-2.952"
    />
  </Svg>
);
export default IconlystCloudSnowLight;
