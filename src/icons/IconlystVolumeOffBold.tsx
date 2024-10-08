import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M20.42 3.27a.926.926 0 1 1 1.309 1.311L4.579 21.73a.95.95 0 0 1-.654.271.96.96 0 0 1-.651-.268.93.93 0 0 1-.004-1.313l2.827-2.827h-.029c-1.409 0-2.435-.995-2.625-2.54-.213-1.545-.17-4.192 0-5.6.2-1.46 1.28-2.465 2.625-2.465h1.83l3.494-2.858c.425-.36 1.176-.7 1.757-.709 1.06 0 2.033.74 2.382 1.926.138.498.192.995.234 1.472l.084.676c.014.104.026.204.037.31Zm-5.004 10.25.071.008c.389.099.465.656.459 1.095-.018 1.272-.06 2.157-.128 2.704l-.048.451c-.045.456-.092.928-.228 1.432-.352 1.184-1.297 1.952-2.372 1.952l-.106-.001c-.594 0-1.237-.356-1.603-.666l-1.3-1.006c-.495-.368-.349-.954-.071-1.294.126-.154 1.097-1.06 2.133-2.018l.416-.383c1.109-1.022 2.172-1.994 2.242-2.063.143-.14.462-.24.606-.203Z"
    />
  </Svg>
);
export default IconlystVolumeOffBold;
