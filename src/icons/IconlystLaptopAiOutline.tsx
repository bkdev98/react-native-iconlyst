import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLaptopAiOutline = ({
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
      d="M3.791 6.422a3.185 3.185 0 0 1 3.186-3.185h10.047a3.185 3.185 0 0 1 3.186 3.185v7.841l1.357 2.954.023.055a2.597 2.597 0 0 1-2.44 3.491H4.85a2.598 2.598 0 0 1-2.417-3.546l1.358-2.954zm3.186-1.685c-.931 0-1.686.754-1.686 1.685v8.005a.75.75 0 0 1-.068.313L3.81 17.813c-.242.71.286 1.45 1.04 1.45h14.3c.755 0 1.282-.741 1.04-1.45l-1.412-3.073a.75.75 0 0 1-.068-.313V6.422c0-.931-.754-1.685-1.686-1.685z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.943 17.253a.75.75 0 0 1 .75-.75h2.616a.75.75 0 0 1 0 1.5h-2.616a.75.75 0 0 1-.75-.75M3.809 14.428a.75.75 0 0 1 .75-.75h14.884a.75.75 0 0 1 0 1.5H4.56a.75.75 0 0 1-.75-.75M9.993 11.605a.75.75 0 0 1-.704-.49l-.079-.213a2.19 2.19 0 0 0-1.29-1.293l-.213-.079a.75.75 0 0 1 0-1.406l.213-.08a2.19 2.19 0 0 0 1.29-1.292l.079-.213a.75.75 0 0 1 1.407 0l.079.213c.221.6.693 1.071 1.29 1.293l.213.079a.75.75 0 0 1 0 1.406l-.213.08a2.19 2.19 0 0 0-1.29 1.292l-.079.213a.75.75 0 0 1-.703.49m.473-2.778a3.7 3.7 0 0 1-.473-.474q-.215.258-.474.474.258.215.474.474.215-.258.473-.474M15.07 12.022a.75.75 0 0 1-.718-.532.57.57 0 0 0-.38-.382.75.75 0 0 1 0-1.435.57.57 0 0 0 .38-.381.75.75 0 0 1 1.435 0 .57.57 0 0 0 .38.381.75.75 0 0 1 0 1.435.57.57 0 0 0-.38.382.75.75 0 0 1-.717.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLaptopAiOutline;
