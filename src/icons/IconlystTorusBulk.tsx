import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTorusBulk = ({
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
      d="M18.82 2.535a3.154 3.154 0 0 0-3.152 3.15 3.155 3.155 0 0 0 3.153 3.15 3.155 3.155 0 0 0 3.15-3.15 3.154 3.154 0 0 0-3.15-3.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 2.504H5c-1.103 0-2 .897-2 2v2.33c0 1.103.897 2 2 2h2.665v10.67c0 1.103.898 2 2 2h2.336c1.103 0 2-.897 2-2v-15c0-1.103-.897-2-2-2"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTorusBulk;
