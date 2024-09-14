import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothBold = ({
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
      d="M12.533 5.082v4.83l3.02-2.412zm0 9v4.837l3.021-2.419zm-1 7.918a1 1 0 0 1-1-1v-6.922L7.47 16.522a1 1 0 1 1-1.249-1.562L9.931 12 6.22 9.032a1 1 0 0 1-.157-1.406 1.004 1.004 0 0 1 1.407-.156l3.062 2.45V3a1 1 0 0 1 1.625-.78l5.621 4.5a.998.998 0 0 1 0 1.562l-4.65 3.714 4.65 3.724a.997.997 0 0 1 0 1.56l-5.62 4.5a1 1 0 0 1-.626.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothBold;
