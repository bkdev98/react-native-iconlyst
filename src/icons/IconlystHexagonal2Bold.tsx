import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonal2Bold = ({
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
      d="m19.153 7.05-5.684-3.28a2.9 2.9 0 0 0-2.936 0L4.85 7.048a2.93 2.93 0 0 0-1.471 2.544v6.56c0 1.052.564 2.027 1.468 2.543l5.684 3.279a2.91 2.91 0 0 0 2.936 0l5.684-3.278a2.93 2.93 0 0 0 1.47-2.543V9.592a2.93 2.93 0 0 0-1.468-2.542"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonal2Bold;
