import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingTwoTonesharp = ({
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
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 15.688a3.688 3.688 0 1 0 0-7.376 3.688 3.688 0 0 0 0 7.376Z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m19.054 18.716-.438-3.04 2.852-1.142V9.467l-2.851-1.14.438-3.042-4.39-2.534-2.414 1.9-2.415-1.9-4.39 2.534.438 3.04-2.852 1.142v5.069l2.853 1.14-.438 3.04 4.39 2.535 2.414-1.899 2.413 1.899z"
    />
  </Svg>
);
export default IconlystSettingTwoTonesharp;
