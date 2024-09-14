import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDapperOutline = ({
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
      d="M11.152 5.736A7.15 7.15 0 0 0 4 12.89v4.221a2.714 2.714 0 0 0 2.702 2.714h8.889a2.714 2.714 0 0 0 2.714-2.714v-4.221a7.15 7.15 0 0 0-7.153-7.153M2.5 12.89a8.652 8.652 0 1 1 17.305 0v4.221a4.214 4.214 0 0 1-4.214 4.214H6.698A4.214 4.214 0 0 1 2.5 17.11zM21.781 5.226a.75.75 0 0 1 0 1.06l-1.317 1.317a.75.75 0 1 1-1.06-1.06l1.316-1.317a.75.75 0 0 1 1.061 0M17.992 3.264a.75.75 0 0 1 .595.878l-.18.936a.75.75 0 1 1-1.474-.282l.18-.937a.75.75 0 0 1 .878-.595"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.86 10.897a1.226 1.226 0 1 0 0 2.45 1.226 1.226 0 0 0 0-2.45m-2.725 1.225a2.726 2.726 0 1 1 5.451 0 2.726 2.726 0 0 1-5.451 0M14.444 10.897a1.226 1.226 0 1 0 0 2.45 1.226 1.226 0 0 0 0-2.45m-2.725 1.225a2.726 2.726 0 1 1 5.45 0 2.726 2.726 0 0 1-5.45 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDapperOutline;
