import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryEditBold = ({
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
      d="M12.46 8.83a.75.75 0 0 1 .467-.002l1.848.601-.012-6.802a.3.3 0 0 0-.3-.3l-3.575.009a.3.3 0 0 0-.3.3l.008 6.808z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.116 18.58c.11-.98.51-1.89 1.17-2.63l2.42-2.65c.06-.09.14-.17.22-.25.02-.03.04-.05.06-.07l.91-1a3.76 3.76 0 0 1 4.738-.659c.221.138.54-.01.54-.27l-.008-3.22c0-1.64-.55-3.09-1.55-4.08-.94-.93-2.23-1.43-3.72-1.43h-.33a.3.3 0 0 0-.3.3l.01 7.84c0 .24-.11.47-.31.61-.19.14-.44.18-.67.1l-2.6-.84-2.61.86c-.08.03-.16.04-.24.04-.15 0-.31-.05-.44-.14a.77.77 0 0 1-.31-.61l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-3.14.01-5.26 2.22-5.26 5.51v.02l.02 7.94c0 1.59.5 2.96 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l3.333-.009c.215 0 .361-.223.302-.43a3.5 3.5 0 0 1-.116-1.361z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.876 15.641-.619.68-1.526-1.525.567-.622a.505.505 0 0 1 .714-.03l.841.782a.504.504 0 0 1 .022.715m-3.56 3.923c-.22.245-.517.41-.835.461l-.917.15a.27.27 0 0 1-.235-.073.27.27 0 0 1-.084-.226l.103-.942c.031-.304.155-.584.353-.805l2.02-2.22 1.527 1.524zm4.556-5.738-.841-.783a2.01 2.01 0 0 0-2.838.117l-.974 1.07a.8.8 0 0 0-.157.173l-2.474 2.721a2.9 2.9 0 0 0-.732 1.65l-.102.94c-.06.553.138 1.092.545 1.477a1.76 1.76 0 0 0 1.508.464l.915-.15a2.94 2.94 0 0 0 1.706-.936l3.553-3.916c.364-.393.552-.904.531-1.438a1.98 1.98 0 0 0-.64-1.389"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryEditBold;
