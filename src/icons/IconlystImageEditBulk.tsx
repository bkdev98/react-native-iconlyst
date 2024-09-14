import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageEditBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m16.503 12.478-.99.103a3.118 3.118 0 0 1-3.439-3.184l.029-.996a4.3 4.3 0 0 1 1.15-2.814l1.693-1.825a.3.3 0 0 0-.22-.504H7.298c-3.162 0-5.287 2.219-5.287 5.52v6.123a.3.3 0 0 0 .476.243L5.7 12.813a4.934 4.934 0 0 1 6.189.288l2.83 2.539c.1.09.249.102.363.03a30 30 0 0 1 1.744-1.026c1.486-.8 2.732-.472 3.69.1.212.127.495-.017.495-.263V9.953a.3.3 0 0 0-.52-.204l-1.272 1.37a4.3 4.3 0 0 1-2.716 1.359"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.444 5.02-3.609 3.89a1.06 1.06 0 0 1-.67.335l-.838.087.024-.84c.007-.258.108-.505.284-.695l3.61-3.89a.166.166 0 0 1 .236-.01l.954.884a.17.17 0 0 1 .01.24m1.011-1.339-.954-.884a1.67 1.67 0 0 0-2.356.09l-3.609 3.89a2.57 2.57 0 0 0-.685 1.674l-.028.992a1.366 1.366 0 0 0 1.509 1.397l.988-.103a2.57 2.57 0 0 0 1.615-.807l3.61-3.89a1.67 1.67 0 0 0-.09-2.359M6.602 14.031l-4.326 3.14-.004.002c-.113.08-.209.197-.193.335.314 2.86 2.318 4.74 5.219 4.74h8.436c1.064 0 2.008-.257 2.795-.72.166-.098.18-.327.036-.456l-7.628-6.844a3.46 3.46 0 0 0-4.335-.197M17.611 15.976c-.424.231-.82.461-1.161.668a.297.297 0 0 0-.043.476l3.26 2.926a.285.285 0 0 0 .432-.05c.517-.797.83-1.773.887-2.893a.29.29 0 0 0-.096-.23c-1.052-.955-1.983-1.592-3.279-.897"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageEditBulk;
