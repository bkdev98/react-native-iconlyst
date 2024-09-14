import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmill2Outline = ({
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
      d="M9.103 7.44q-.044.001-.1-.005l-4.43-.56a.75.75 0 1 1 .187-1.488l4.431.56a.75.75 0 0 1-.093 1.493zM14.083 13.768a.75.75 0 0 1-.73-.93l1.736-7.043a.75.75 0 0 1 .867-.558c1.385.265 2.3.436 3.357-2.585a.75.75 0 0 1 1.416.5c-1.115 3.186-2.417 3.874-4.347 3.67l-1.572 6.38a.75.75 0 0 1-.727.566"
    />
    <Path
      fill={props.color}
      d="M7.942 11.981a.75.75 0 0 1-.727-.568l-1.2-4.8a.75.75 0 0 1 1.456-.363l1.2 4.8a.75.75 0 0 1-.729.931M9.991 15.72H7.944a.75.75 0 1 1 0-1.5h2.047a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M14.648 19.086H7.596A4.34 4.34 0 0 1 3.94 17.1a4.3 4.3 0 0 1-.28-4.247 4.245 4.245 0 0 1 5.015-2.2l6.9 2.033a3.265 3.265 0 0 1-.923 6.4zm-7.178-7.1a2.753 2.753 0 0 0-2.3 4.249 2.88 2.88 0 0 0 2.432 1.355h7.05a1.763 1.763 0 0 0 .5-3.457l-6.9-2.033a2.8 2.8 0 0 0-.782-.118zM5.15 21.849a1.229 1.229 0 1 1 0-2.458 1.229 1.229 0 0 1 0 2.458M17.164 21.849a1.229 1.229 0 1 1 0-2.458 1.229 1.229 0 0 1 0 2.458"
    />
  </Svg>
);
export default IconlystTreadmill2Outline;
