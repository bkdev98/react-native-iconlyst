import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoveDownBulk = ({
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
      d="M10.263 14.489a.746.746 0 0 0-1.022-.28.75.75 0 0 0-.281 1.022l.697 1.224c-1.305-.278-2.338-.839-3.246-1.746A5.27 5.27 0 0 1 4.875 11c0-1.385.56-2.738 1.538-3.711a5.2 5.2 0 0 1 3.712-1.539.75.75 0 0 0 0-1.5 6.7 6.7 0 0 0-4.772 1.978A6.77 6.77 0 0 0 3.375 11c0 1.781.721 3.52 1.977 4.77a7.67 7.67 0 0 0 3.484 2.018l-.685.39a.75.75 0 1 0 .742 1.303l2.529-1.44a.75.75 0 0 0 .28-1.023z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18.425 3.5h-2.6c-1.213 0-2.2.987-2.2 2.2v2.6c0 1.213.987 2.2 2.2 2.2h2.6c1.213 0 2.2-.987 2.2-2.2V5.7c0-1.213-.987-2.2-2.2-2.2M18.425 13.5h-2.6c-1.213 0-2.2.987-2.2 2.2v2.6c0 1.213.987 2.2 2.2 2.2h2.6c1.213 0 2.2-.987 2.2-2.2v-2.6c0-1.213-.987-2.2-2.2-2.2" />
    </G>
  </Svg>
);
export default IconlystMoveDownBulk;
