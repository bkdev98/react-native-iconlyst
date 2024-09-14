import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkOutlinecurved = ({
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
      d="M12.211 13.139a.75.75 0 0 1 .75.75v2.628a.75.75 0 0 1-1.5 0v-2.628a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.468 11.048a.75.75 0 0 1 1.045-.185l.011.008c2.289 1.405 5.331 2.27 8.683 2.27 3.349 0 6.398-.864 8.687-2.266l.006-.005a.75.75 0 0 1 .88 1.215l-.03.021-.046.031c-2.553 1.573-5.89 2.505-9.497 2.505s-6.936-.932-9.488-2.505l-.037-.024-.03-.02a.75.75 0 0 1-.184-1.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.514 7.502C4.322 8.564 3.75 10.334 3.75 13.351s.572 4.786 1.764 5.848c1.218 1.085 3.271 1.605 6.697 1.605s5.48-.52 6.698-1.605c1.192-1.061 1.763-2.831 1.763-5.848s-.571-4.787-1.763-5.849c-1.218-1.085-3.271-1.604-6.698-1.604-3.426 0-5.479.52-6.697 1.604m-.998-1.12c1.66-1.478 4.213-1.984 7.695-1.984s6.035.506 7.695 1.984c1.687 1.502 2.266 3.834 2.266 6.969s-.58 5.466-2.266 6.968c-1.66 1.479-4.212 1.985-7.695 1.985-3.482 0-6.034-.506-7.695-1.985-1.686-1.502-2.266-3.833-2.266-6.968s.58-5.467 2.266-6.969"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.199 4.74c0-1.603 1.186-3.04 2.81-3.04h2.405c1.623 0 2.81 1.437 2.81 3.04v.63a.75.75 0 0 1-1.5 0v-.63c0-.927-.66-1.54-1.31-1.54h-2.405c-.65 0-1.31.613-1.31 1.54v.63a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorkOutlinecurved;
