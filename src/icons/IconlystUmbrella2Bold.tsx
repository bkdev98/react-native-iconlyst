import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella2Bold = ({
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
      d="M21.473 11.733c-.812-4.85-4.797-8.369-9.474-8.369-4.676 0-8.66 3.52-9.473 8.37a1.968 1.968 0 0 0 1.941 2.281h6.782v4.88a2.735 2.735 0 0 0 2.732 2.73 2.733 2.733 0 0 0 2.73-2.73.75.75 0 0 0-1.5 0 1.231 1.231 0 0 1-2.462 0v-4.88h6.783a1.967 1.967 0 0 0 1.941-2.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrella2Bold;
