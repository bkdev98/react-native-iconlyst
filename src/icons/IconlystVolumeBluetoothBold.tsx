import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeBluetoothBold = ({
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
      d="M11.387 19.979a3.1 3.1 0 0 1-1.652-.479l-2.998-1.874c-.25-.156-.63-.257-.97-.257a23 23 0 0 0-.913-.047H4.84c-.893-.033-1.484-.055-2.268-.701-1.022-.856-1.017-2.783-1.012-4.332v-.579c-.005-1.546-.011-3.469 1.01-4.321.78-.65 1.374-.672 2.272-.704.253-.009.543-.02.885-.045.356-.027.75-.097 1.01-.259l2.999-1.875c.955-.596 2.07-.645 3.062-.134 1.053.543 1.753 1.635 1.826 2.85.232 3.17.232 6.392 0 9.57a3.4 3.4 0 0 1-1.804 2.833 3.1 3.1 0 0 1-1.433.354"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.779 16.824a.75.75 0 0 0 .794-.091l2.588-2.075a.75.75 0 0 0-.001-1.17l-1.858-1.487 1.858-1.487a.75.75 0 0 0 0-1.171l-2.588-2.069a.75.75 0 0 0-1.218.586v2.583l-.941-.753a.749.749 0 1 0-.937 1.171l1.426 1.142-1.425 1.137a.75.75 0 0 0 .935 1.173l.942-.751v2.586a.75.75 0 0 0 .425.676m1.075-6.385V9.42l.637.509zm0 4.147v-1.022l.638.51z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeBluetoothBold;
