import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 13.703a2.72 2.72 0 1 1 0 5.44 2.72 2.72 0 0 1 0-5.44"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.848 18.414 1.369 1.366M12 4.29c-3.617 0-4.897 3.264-4.897 4.897C4.833 9.207 3 10.732 3 13.328c0 1.68 1 3.125 2.436 3.774M18.33 17.102a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.141 0-1.07-.55-2.84-1.944-3.933"
    />
  </Svg>
);
export default IconlystCloudSearchBroken;
