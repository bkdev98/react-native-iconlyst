import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle3Bold = ({
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
      d="M12.808 15.643h-.058v.44a.75.75 0 0 1-1.5 0v-.44h-1.067a.75.75 0 0 1 0-1.5h2.625a.663.663 0 0 0 .664-.66.663.663 0 0 0-.664-.66h-1.615a2.17 2.17 0 0 1-2.164-2.17c0-1.193.97-2.16 2.164-2.16h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5h-2.625a.663.663 0 0 0-.664.66c0 .368.298.67.664.67h1.615c1.193 0 2.164.967 2.164 2.16 0 1.19-.971 2.16-2.164 2.16M12 2.563c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarCircle3Bold;
