import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePhotoshopSquareOutline = ({
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
      d="M16.215 21.754h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M14.785 16.224c-.49 0-.94-.09-1.26-.22a.753.753 0 0 1-.42-.97c.15-.39.59-.57.97-.42.41.16 1.22.15 1.55-.1.06-.05.1-.09.08-.24-.01-.09-.03-.22-.45-.39l-.8-.32c-.31-.13-1.25-.5-1.39-1.6-.08-.65.15-1.23.66-1.62.89-.68 2.3-.59 3.02-.3.38.15.57.59.42.97s-.59.57-.97.42c-.41-.16-1.22-.15-1.54.1-.06.05-.1.09-.09.24.01.09.03.22.45.39l.8.32c.31.13 1.25.5 1.39 1.6.08.65-.15 1.23-.66 1.61-.49.38-1.14.52-1.75.52zM7.545 16.224c-.41 0-.75-.34-.75-.75v-6.78c0-.35.24-.65.57-.73.26-.06 2.62-.6 4.03.5.44.35.97 1.01.97 2.19s-.53 1.84-.97 2.2c-.91.73-2.22.78-3.1.71v1.92c0 .41-.34.75-.75.75zm.75-4.18c.68.06 1.64.05 2.16-.37.17-.14.41-.4.41-1.03s-.23-.87-.4-1c-.52-.41-1.5-.4-2.17-.32v2.73z"
    />
  </Svg>
);
export default IconlystAdobePhotoshopSquareOutline;
