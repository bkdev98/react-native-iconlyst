import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsSymbolsBulk = ({
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
      d="M12 21.5v-19c.86 0 1.669.379 2.22 1.04l5.485 6.584a2.89 2.89 0 0 1 .007 3.69l-5.485 6.637A2.88 2.88 0 0 1 12 21.5"
    />
    <Path
      fill={props.color}
      d="M12 21.5v-19c-.86 0-1.67.379-2.221 1.04l-5.485 6.584a2.89 2.89 0 0 0-.007 3.69l5.485 6.637a2.88 2.88 0 0 0 2.227 1.049"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamondsSymbolsBulk;
