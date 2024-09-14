import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostBankBold = ({
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
      d="m20.557 8.047-6.235-4.98a3.74 3.74 0 0 0-4.673.001L3.46 8.035a3.03 3.03 0 0 0-1.209 2.398v10.57a.75.75 0 0 0 1.5 0V10.441c.005-.477.23-.918.632-1.223l6.204-4.978a2.24 2.24 0 0 1 2.8 0l6.256 4.994c.373.28.602.731.608 1.2v10.57a.75.75 0 0 0 1.5 0V10.421c-.015-.943-.468-1.836-1.194-2.375"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.91 15.949c0 .42-.34.75-.75.75h-2.32a.749.749 0 1 1 0-1.5h2.32c.41 0 .75.34.75.75m.06-3.85h-3.94c-1.61 0-2.73 1.17-2.73 2.84v3.71c0 1.68 1.12 2.85 2.73 2.85h3.94c1.61 0 2.73-1.17 2.73-2.85v-3.71c0-1.67-1.12-2.84-2.73-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPostBankBold;
