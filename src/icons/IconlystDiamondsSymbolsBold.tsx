import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsSymbolsBold = ({
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
      d="M19.705 10.124 14.22 3.54A2.88 2.88 0 0 0 12 2.5a2.88 2.88 0 0 0-2.219 1.04l-5.487 6.584a2.89 2.89 0 0 0-.006 3.689l5.485 6.638A2.88 2.88 0 0 0 12 21.5c.864 0 1.677-.382 2.228-1.049l5.485-6.637a2.89 2.89 0 0 0-.007-3.69"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondsSymbolsBold;
