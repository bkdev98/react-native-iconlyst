import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongOutline = ({
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
      d="M3.828 3.834c.881-.945 2.133-1.47 3.604-1.47h7.376c1.474 0 2.727.525 3.607 1.47.874.94 1.325 2.232 1.325 3.675a.75.75 0 1 1-1.5 0c0-1.133-.35-2.038-.923-2.653-.567-.608-1.405-.993-2.509-.993H7.432c-1.1 0-1.939.384-2.506.994C4.352 5.47 4 6.377 4 7.509v6.95c0 1.132.351 2.037.923 2.652.566.608 1.405.993 2.51.993h3.483a.75.75 0 0 1 0 1.5H7.432c-1.474 0-2.727-.526-3.607-1.471-.874-.94-1.325-2.232-1.325-3.675v-6.95c0-1.443.453-2.735 1.328-3.674M16.635 16.926a1.606 1.606 0 1 0 0 3.212 1.606 1.606 0 0 0 0-3.212m-3.106 1.606a3.106 3.106 0 1 1 6.212 0 3.106 3.106 0 0 1-6.212 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.722 10.049a.75.75 0 0 1 .277.582v3.103a.75.75 0 0 1-.584.732l-1.674.38v3.685a.75.75 0 0 1-1.5 0v-7.424a.75.75 0 0 1 .595-.734l2.259-.476a.75.75 0 0 1 .627.152m-1.982 3.258.76-.172v-1.58l-.76.16zM8.053 10.983a3.067 3.067 0 1 1 6.134 0 3.068 3.068 0 1 1-6.134 0m3.067-1.567a1.567 1.567 0 1 0 0 3.134 1.567 1.567 0 0 0 0-3.134"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongOutline;
