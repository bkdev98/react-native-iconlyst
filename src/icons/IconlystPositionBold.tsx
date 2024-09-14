import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPositionBold = ({
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
      d="M20.922 12.635a.99.99 0 0 0 0-.77 1 1 0 0 0-.216-.322l-2.175-2.176a1.001 1.001 0 0 0-1.707.707v1.176H13V7.426h1.175a1 1 0 0 0 .707-1.707l-2.175-2.176A1 1 0 0 0 12 3.25a.998.998 0 0 0-.708.293L9.117 5.719a1 1 0 0 0 .707 1.707H11v3.824H7.176v-1.176a1.001 1.001 0 0 0-1.707-.707l-2.176 2.176a1 1 0 0 0-.215.322.99.99 0 0 0 0 .77q.076.184.215.322l2.176 2.175a1 1 0 0 0 1.707-.707V13.25H11v3.822H9.825a1.002 1.002 0 0 0-.707 1.707l2.172 2.174q.141.141.327.219c.014.006.031.004.046.009a1 1 0 0 0 .337.068c.119 0 .23-.03.336-.068.015-.005.032-.003.047-.009a1 1 0 0 0 .326-.219l2.174-2.174a1 1 0 0 0-.707-1.707H13V13.25h3.824v1.175a1.002 1.002 0 0 0 1.707.707l2.175-2.175a1 1 0 0 0 .216-.322"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPositionBold;
