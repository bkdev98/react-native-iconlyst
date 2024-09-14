import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImoTwoTone = ({
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
      d="M7.95 20.037a1.02 1.02 0 0 0-.698-.092c-.81.191-2.118.517-3.07.756a.744.744 0 0 1-.908-.888c.237-1.025.565-2.452.72-3.165.049-.222.019-.45-.077-.656C3.347 14.772 3 13.42 3 12c0-5.512 5.021-9.907 10.715-8.839 3.578.671 6.453 3.547 7.124 7.124C21.907 15.979 17.512 21 11.999 21c-1.409 0-2.818-.34-4.05-.963"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.597 9.496H6.59m.001 2v3.29m2.1 0v-2.368c0-.69.536-1.25 1.196-1.25s1.196.56 1.196 1.25m0 0v2.367m0-2.367c0-.69.535-1.25 1.195-1.25s1.196.56 1.196 1.25v2.367m1.913-2.367v1.117c0 .69.536 1.25 1.196 1.25s1.195-.56 1.195-1.25v-1.117c0-.69-.535-1.25-1.195-1.25s-1.196.56-1.196 1.25"
    />
  </Svg>
);
export default IconlystImoTwoTone;
