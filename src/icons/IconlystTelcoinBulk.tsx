import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelcoinBulk = ({
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
      d="m20.886 7.807-4.924-4.52a3 3 0 0 0-2.908-.65L6.68 4.65a3 3 0 0 0-2.01 2.198l-1.45 6.52a2.99 2.99 0 0 0 .895 2.836l4.923 4.52a3.006 3.006 0 0 0 2.908.649l6.375-2.01a3 3 0 0 0 2.01-2.198l1.45-6.52a2.98 2.98 0 0 0-.894-2.837"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.376 10.944h2.157a.75.75 0 0 0 0-1.5h-1.878l.222-1.192a.75.75 0 0 0-1.457-.348c-.27.925-.617 1.183-1.67 1.59a.75.75 0 0 0 .271 1.45h.83l-.518 2.775a2.383 2.383 0 0 0 2.343 2.845h.831a.75.75 0 0 0 0-1.5h-.83a.886.886 0 0 1-.87-1.062z"
    />
  </Svg>
);
export default IconlystTelcoinBulk;
