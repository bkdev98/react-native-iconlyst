import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePlayBulk = ({
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
      d="M12.914 10.749a.3.3 0 0 0 .419 0l2.657-2.584a.3.3 0 0 0-.062-.477L7.294 2.853a2.74 2.74 0 0 0-2.166-.228c-.198.063-.238.313-.09.457zM13.332 13.249a.3.3 0 0 0-.418 0l-7.879 7.66c-.148.144-.108.392.088.456.26.086.535.134.824.134.455 0 .915-.117 1.335-.343l8.678-4.81a.3.3 0 0 0 .063-.478z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.887 4.055c-.137-.133-.362-.107-.442.066-.163.352-.25.733-.25 1.128v13.5c0 .4.09.777.246 1.12.08.173.305.2.442.067l7.944-7.723a.3.3 0 0 0 0-.43zM20.46 10.709a2.8 2.8 0 0 0-1.062-1.077l-1.573-.881a.3.3 0 0 0-.357.047c-.502.493-2.067 2.03-3.048 2.986a.3.3 0 0 0 0 .43c.992.968 2.583 2.53 3.089 3.027a.3.3 0 0 0 .355.048l1.521-.843a2.72 2.72 0 0 0 1.312-1.65 2.72 2.72 0 0 0-.237-2.087" />
    </G>
  </Svg>
);
export default IconlystGooglePlayBulk;
