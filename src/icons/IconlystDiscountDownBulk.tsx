import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountDownBulk = ({
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
      d="M20.155 10.73v.002a2.5 2.5 0 0 1-.38.312q-.022.012-.044.024c-.123.078-.25.15-.387.206-.033.014-.07.02-.104.033a2.5 2.5 0 0 1-.361.11c-.144.029-.289.04-.436.044-.02 0-.039.006-.059.006h-.002a2.6 2.6 0 0 1-.495-.05c-.091-.019-.177-.053-.265-.081-.067-.022-.137-.036-.203-.063-.098-.041-.187-.097-.279-.15-.05-.028-.102-.05-.15-.082a2.5 2.5 0 0 1-.378-.311l-2.477-2.488a2.5 2.5 0 0 1 1.453-4.241c.163-.02.297-.153.297-.318v-.558q0-.069.003-.136c.01-.19-.131-.364-.32-.364H7.668c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h8.435c3.16 0 5.284-2.221 5.284-5.526v-5.88a.3.3 0 0 0-.513-.21z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.392 5.947a.75.75 0 0 0-1.061.002L19.134 7.15V3.125a.75.75 0 0 0-1.5 0v4.027l-1.197-1.203a.751.751 0 0 0-1.063 1.059l2.478 2.488c.023.024.054.034.08.054.05.04.1.083.162.108a.7.7 0 0 0 .289.059c.03 0 .057-.014.086-.017.069-.008.139-.014.203-.041a.8.8 0 0 0 .244-.165l2.478-2.486a.75.75 0 0 0-.002-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.305 15.512a.947.947 0 0 0 1.892 0 .95.95 0 0 0-.946-.947.95.95 0 0 0-.946.947M7.944 16.11a.746.746 0 0 0 1.061 0l4.898-4.897a.749.749 0 1 0-1.06-1.06L7.944 15.05a.75.75 0 0 0 0 1.06M8.488 9.8a.947.947 0 0 0 0 1.892.947.947 0 0 0 0-1.892"
    />
  </Svg>
);
export default IconlystDiscountDownBulk;
