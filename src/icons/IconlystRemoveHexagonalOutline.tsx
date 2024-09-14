import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveHexagonalOutline = ({
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
      d="M9.46 3.75c-.4 0-.784.159-1.066.441L4.442 8.143A1.5 1.5 0 0 0 4 9.21v5.582c0 .399.16.783.442 1.066l3.951 3.951a1.5 1.5 0 0 0 1.067.442h5.581c.4 0 .783-.159 1.066-.442l3.952-3.951c.282-.282.441-.666.441-1.066V9.209c0-.4-.159-.783-.441-1.066l-3.952-3.951a1.5 1.5 0 0 0-1.065-.442zm-2.128-.618A3 3 0 0 1 9.46 2.25h5.581c.797 0 1.562.316 2.126.881l3.953 3.951c.564.565.88 1.33.88 2.127v5.582a3 3 0 0 1-.88 2.127l-3.953 3.95a3 3 0 0 1-2.126.882H9.46a3 3 0 0 1-2.127-.881L3.38 16.918A3 3 0 0 1 2.5 14.79V9.209c0-.798.318-1.563.881-2.126z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.386 9.135a.75.75 0 0 1 1.06 0l1.803 1.802 1.801-1.8a.75.75 0 1 1 1.06 1.06l-1.8 1.8 1.807 1.808a.75.75 0 1 1-1.061 1.06l-1.807-1.806-1.8 1.8a.75.75 0 1 1-1.061-1.06l1.8-1.801-1.802-1.803a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveHexagonalOutline;
