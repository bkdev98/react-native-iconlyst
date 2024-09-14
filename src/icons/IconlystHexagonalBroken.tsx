import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalBroken = ({
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
      d="M15.782 20.12c.87 0 1.675-.464 2.11-1.217l3.282-5.686a2.43 2.43 0 0 0 0-2.435l-3.282-5.686a2.44 2.44 0 0 0-2.11-1.217H9.218c-.87 0-1.674.464-2.109 1.217l-3.283 5.686a2.43 2.43 0 0 0 0 2.435l3.283 5.686a2.44 2.44 0 0 0 2.109 1.217H12.5"
    />
  </Svg>
);
export default IconlystHexagonalBroken;
