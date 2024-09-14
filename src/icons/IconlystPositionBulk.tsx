import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionBulk = ({
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
      d="M13 11.25V7.426h1.175a1 1 0 0 0 .707-1.707l-2.175-2.176A1 1 0 0 0 12 3.25a.998.998 0 0 0-.708.293L9.117 5.719a1 1 0 0 0 .707 1.707H11v9.646H9.825a1.002 1.002 0 0 0-.707 1.707l2.172 2.174q.141.141.327.219c.014.006.031.004.046.009a1 1 0 0 0 .337.068c.119 0 .23-.03.336-.068.015-.005.032-.003.047-.009a1 1 0 0 0 .326-.219l2.174-2.174a1 1 0 0 0-.707-1.707H13V11.25"
    />
    <Path
      fill={props.color}
      d="M21 12.25a.99.99 0 0 1-.294.707l-2.175 2.175a1 1 0 0 1-1.707-.707V13.25H7.176v1.175a1.001 1.001 0 0 1-1.707.707l-2.176-2.175a1 1 0 0 1-.215-.322.99.99 0 0 1 0-.77 1 1 0 0 1 .215-.322l2.176-2.176a1 1 0 0 1 1.707.707v1.176h9.648v-1.176a1.002 1.002 0 0 1 1.707-.707l2.175 2.176a1 1 0 0 1 .294.707"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPositionBulk;
