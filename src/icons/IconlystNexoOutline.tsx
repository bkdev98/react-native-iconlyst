import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNexoOutline = ({
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
      d="M7.348 2.793a.75.75 0 0 1 .804 0l4.098 2.602 4.098-2.602a.75.75 0 0 1 .804 0l4.5 2.857a.75.75 0 0 1 .348.633v11.433a.75.75 0 0 1-.348.633l-4.5 2.858a.75.75 0 0 1-.8.003l-4.347-2.718-3.823 2.695a.75.75 0 0 1-.834.02l-4.5-2.858a.75.75 0 0 1-.348-.633V6.283a.75.75 0 0 1 .348-.633zM4 6.696v10.608l3.728 2.368 3.82-2.693a.75.75 0 0 1 .83-.023l4.369 2.732 3.753-2.384V6.696l-3.75-2.382-4.098 2.603a.75.75 0 0 1-.804 0L7.75 4.314z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.617 5.881a.75.75 0 0 1 1.035-.23l4.5 2.857a.75.75 0 0 1 .348.633v5.717a.75.75 0 0 1-1.152.633L8.5 10.506v3.943l3.887 2.513a.75.75 0 0 1-.815 1.26l-4.23-2.735a.75.75 0 0 1-.342-.63V9.142a.75.75 0 0 1 1.152-.633L16 13.493v-3.94l-4.152-2.637a.75.75 0 0 1-.231-1.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNexoOutline;
