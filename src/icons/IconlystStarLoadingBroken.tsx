import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarLoadingBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.78 7.55A9 9 0 0 1 6.23 6M17.562 20.003a9.006 9.006 0 0 1-7.523 1.694M6.85 20.277a9 9 0 0 1-3.12-3.782M3.325 10.46a9 9 0 0 0-.299 3.033M20.418 9.74a9.01 9.01 0 0 0-8.775-5.817M19.646 17.64a8.9 8.9 0 0 0 1.345-5.06M9.477 15.886a.517.517 0 0 0 .75.537l1.533-.795a.53.53 0 0 1 .482 0l1.532.794a.515.515 0 0 0 .75-.537l-.294-1.683a.5.5 0 0 1 .149-.45l1.24-1.194a.507.507 0 0 0-.286-.869l-1.715-.247a.52.52 0 0 1-.39-.278l-.766-1.532a.52.52 0 0 0-.923 0l-.768 1.532a.52.52 0 0 1-.39.28l-1.715.245a.51.51 0 0 0-.286.87l1.243 1.192"
    />
  </Svg>
);
export default IconlystStarLoadingBroken;
