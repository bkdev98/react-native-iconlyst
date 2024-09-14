import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTorusBold = ({
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
      d="M11.501 2.505H4.5c-1.103 0-2 .897-2 2v2.33c0 1.103.897 2 2 2h2.665v10.67c0 1.103.898 2 2 2h2.336c1.103 0 2-.897 2-2v-15c0-1.103-.897-2-2-2M18.32 2.535a3.154 3.154 0 0 0-3.152 3.149 3.155 3.155 0 0 0 3.153 3.15 3.155 3.155 0 0 0 3.15-3.15 3.154 3.154 0 0 0-3.15-3.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTorusBold;
