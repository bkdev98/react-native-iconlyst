import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteBold = ({
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
      d="m21.406 19.632-5.38-5.379a5.85 5.85 0 0 0 3.296-1.642 5.856 5.856 0 0 0 0-8.27 5.85 5.85 0 0 0-8.262 0 5.84 5.84 0 0 0-1.641 3.304L5.707 3.933a.75.75 0 0 0-1.061 1.06l15.699 15.7a.751.751 0 0 0 1.06-1.06M14.802 18.365a2.3 2.3 0 0 0-.949.354l-.94.628c-.7.465-1.639.293-2.093-.382l-.65-.971 1.93-1.635a.5.5 0 0 0 .03-.735l-4.093-4.092a.5.5 0 0 0-.378-.146.5.5 0 0 0-.362.183l-4.258 5.2c-1.113 1.359-.676 2.906.2 3.768.497.488 1.211.832 1.98.832.587 0 1.208-.201 1.787-.693l2.012-1.706.556.83a2.98 2.98 0 0 0 2.48 1.306c.58 0 1.168-.165 1.69-.51l.934-.624a.8.8 0 0 1 .332-.122.75.75 0 1 0-.208-1.485"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrophoneMuteBold;
