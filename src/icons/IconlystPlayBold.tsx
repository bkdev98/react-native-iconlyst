import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBold = ({
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
      d="M17.576 14.94a25.7 25.7 0 0 1-7.536 4.729c-2.433.959-4.47-.238-4.77-2.636-.364-3.535-.356-6.919 0-10.077.326-2.493 2.571-3.55 4.77-2.625 2.815 1.153 5.34 2.718 7.536 4.73 1.876 1.698 1.92 4.114 0 5.879"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayBold;
