import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDiamondOutline = ({
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
      d="M12.101 2.253c1.23.044 2.41.614 3.386 1.59l4.673 4.673c.975.975 1.544 2.158 1.587 3.388.044 1.238-.45 2.443-1.445 3.438l-4.958 4.959c-.997.997-2.202 1.49-3.44 1.446-1.231-.044-2.412-.614-3.387-1.59l-4.673-4.672c-.975-.975-1.546-2.155-1.59-3.386-.043-1.238.45-2.443 1.448-3.441l4.959-4.959c.997-.997 2.202-1.49 3.44-1.446m-.054 1.499c-.778-.028-1.59.273-2.326 1.008L4.763 9.718c-.736.736-1.037 1.55-1.01 2.328.029.787.396 1.623 1.152 2.379l4.672 4.672c.757.756 1.593 1.123 2.38 1.151.778.028 1.591-.273 2.326-1.008l4.959-4.958c.732-.733 1.034-1.546 1.006-2.326-.027-.788-.394-1.624-1.15-2.38l-4.671-4.673c-.757-.756-1.593-1.123-2.38-1.151"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.246 8.678a.75.75 0 0 1 1.06-.002l2.804 2.794a.75.75 0 0 1 0 1.063l-2.803 2.792a.75.75 0 0 1-1.059-1.063l2.27-2.26-2.27-2.264a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.67 12a.75.75 0 0 1 .75-.75h7.161a.75.75 0 0 1 0 1.5H8.42a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightDiamondOutline;
