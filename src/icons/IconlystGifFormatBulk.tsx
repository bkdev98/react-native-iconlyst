import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormatBulk = ({
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
      d="M18.767 3.672H6.901c-2.731 0-4.567 1.917-4.567 4.77v7.1c0 2.86 1.836 4.78 4.567 4.78h11.865c2.733 0 4.568-1.92 4.568-4.78v-7.1c0-2.853-1.835-4.77-4.567-4.77"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.163 10.528a.751.751 0 0 0 1.099-1.022c-.441-.473-.995-.753-1.738-.838-1.224 0-2.22.996-2.22 2.22v3.85a.75.75 0 0 0 1.5 0v-1.47h1.465a.75.75 0 0 0 0-1.5h-1.465v-.88c0-.397.323-.72.629-.726.3.037.532.153.73.366M13.277 9.748a.75.75 0 0 0 .75-.75v-.01a.746.746 0 0 0-.75-.746.755.755 0 0 0-.75.756c0 .414.336.75.75.75M13.277 15.487a.75.75 0 0 0 .75-.75v-3.069a.75.75 0 1 0-1.5 0v3.07c0 .413.336.75.75.75M9.191 15.487c1.449 0 2.314-.743 2.314-1.989v-1.5a.75.75 0 0 0-.75-.75H9.191a.75.75 0 0 0 0 1.5h.814v.75c0 .217 0 .49-.814.49-.492 0-.923-.179-1.245-.516-.372-.387-.571-.965-.545-1.583a2.05 2.05 0 0 1 .664-1.42c.351-.319.79-.477 1.224-.463q.413.023.788.206a.75.75 0 0 0 .659-1.348 3.5 3.5 0 0 0-1.37-.356c-.837-.048-1.664.261-2.312.853a3.56 3.56 0 0 0-1.152 2.466c-.043 1.024.307 2.003.961 2.683a3.2 3.2 0 0 0 2.328.977"
    />
  </Svg>
);
export default IconlystGifFormatBulk;
