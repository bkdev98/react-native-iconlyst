import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonal2Bulk = ({
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
      d="M12.018 21.65V2.651a2.9 2.9 0 0 1 1.451.4l5.684 3.278a2.93 2.93 0 0 1 1.468 2.542v6.561a2.93 2.93 0 0 1-1.47 2.543l-5.684 3.28c-.447.26-.947.392-1.449.395"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.019 2.651a2.9 2.9 0 0 0-1.486.398L4.85 6.327a2.93 2.93 0 0 0-1.471 2.544v6.561c0 1.051.564 2.026 1.468 2.542l5.684 3.28c.454.264.962.396 1.47.396h.018z"
    />
  </Svg>
);
export default IconlystHexagonal2Bulk;
