import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardShieldBold = ({
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
      d="M20.998 7.854c0-2.793-1.794-4.67-4.465-4.67H6.463c-2.671 0-4.465 1.877-4.465 4.67v.08a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3zM17.964 11.006c.438 0 1.572.295 2.618.686.2.075.416-.07.416-.284v-1.375a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.793 1.794 4.67 4.465 4.67h6.22c.218 0 .364-.224.294-.43a5.1 5.1 0 0 1-.274-1.667c0-.826-.01-1.388-.019-1.776-.02-1.044-.034-1.734.73-2.519.772-.769 3.77-1.705 4.55-1.705"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.496 15.184c-.008.4-.02.977-.02 1.823 0 1.762-1.864 2.656-2.512 2.913-.648-.256-2.51-1.144-2.51-2.913 0-.851-.012-1.43-.02-1.831-.004-.221-.008-.421-.007-.55.516-.257 2.189-.835 2.514-.87.376.036 2.112.635 2.562.865 0 .128-.003.335-.007.563m1.115-1.61c-.45-.446-3.098-1.317-3.646-1.317-.55 0-3.198.872-3.655 1.326-.4.412-.395.668-.376 1.623.009.394.02.963.02 1.8 0 3.25 3.64 4.383 3.795 4.429a.75.75 0 0 0 .434 0c.154-.047 3.794-1.19 3.794-4.428 0-.833.01-1.4.019-1.794.019-.96.023-1.216-.385-1.638"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardShieldBold;
