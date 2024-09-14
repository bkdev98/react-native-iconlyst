import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderShieldTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.141 21.27c3.356 0 5.333-1.977 5.333-5.332l.026-4.655c0-3.423-1.241-5.136-4.605-5.136h-2.653a2.15 2.15 0 0 1-1.712-.856l-.857-1.138a2.14 2.14 0 0 0-1.709-.856H8.088C4.732 3.297 3.5 5.275 3.5 8.624v7.314c0 3.355 1.981 5.333 5.345 5.333z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.501 16.766s2.664-.806 2.664-3.028c0-2.224.096-2.152-.118-2.368s-2.196-.905-2.546-.905-2.332.69-2.546.905c-.213.214-.117.144-.117 2.368s2.663 3.028 2.663 3.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderShieldTwoTone;
