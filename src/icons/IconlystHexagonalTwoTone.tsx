import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalTwoTone = ({
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
      d="M9.218 20.12c-.87 0-1.674-.464-2.109-1.217m8.673 1.217c.87 0 1.675-.464 2.11-1.217m3.282-5.686a2.43 2.43 0 0 0 0-2.435m-3.282-5.686a2.44 2.44 0 0 0-2.11-1.217m-6.564 0c-.87 0-1.674.464-2.109 1.217m-3.283 5.686a2.43 2.43 0 0 0 0 2.435"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.218 20.12h6.564m2.11-1.217 3.282-5.686m0-2.435-3.282-5.686m-2.11-1.217H9.218M7.109 5.096l-3.283 5.686m0 2.435 3.283 5.686"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHexagonalTwoTone;
