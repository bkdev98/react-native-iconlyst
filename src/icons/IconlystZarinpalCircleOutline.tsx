import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.448 8.556c-.199-.2-.523-.2-.722 0l-6.121 6.12a.511.511 0 0 0 .722.724l6.121-6.121c.2-.2.2-.524 0-.723m-1.783-1.06a2.011 2.011 0 0 1 2.844 2.843l-6.12 6.121a2.011 2.011 0 0 1-2.845-2.844zM15.139 13.247c.73-.731 1.981-.214 1.981.821v1.89a1.16 1.16 0 0 1-1.16 1.162h-1.892c-1.032 0-1.553-1.249-.82-1.981zm.481 1.64-.733.733h.733zM8.377 8.379v.734l.734-.734zm-1.5-.34c0-.642.52-1.16 1.162-1.16h1.89c1.035 0 1.552 1.25.821 1.982L8.86 10.752c-.733.733-1.982.211-1.982-.821z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZarinpalCircleOutline;
