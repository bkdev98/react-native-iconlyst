import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryWarningBold = ({
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
      d="M14.771 5.146c-.15-.007-.295-.027-.45-.021h-3.3c-.228 0-.436.03-.65.052v-.252c0-.634.094-1.05 1.35-1.05h1.7c1.247 0 1.35.496 1.35 1.05zm-3 8.479v-2.9a.75.75 0 0 1 1.5 0v2.9a.75.75 0 0 1-1.5 0m.764 3.298a.749.749 0 1 1 0-1.497.749.749 0 0 1 0 1.497M17.52 6.217a3.7 3.7 0 0 0-1.249-.773v-.519c0-.767-.278-2.55-2.85-2.55h-1.7c-2.355 0-2.85 1.387-2.85 2.55v.635c-1.542.682-2.45 2.143-2.45 4.165v7.301c0 2.88 1.682 4.599 4.5 4.599h3.4c2.86 0 4.5-1.677 4.5-4.599V9.725c0-1.477-.45-2.69-1.3-3.508"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryWarningBold;
