import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerNoteBroken = ({
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
      d="M12.827 3h3.883a3.81 3.81 0 0 1 3.658 3.835v8.166c0 .529-.206 1.038-.571 1.42l-3.792 3.948c-.386.403-.92.631-1.48.631H8.945a3.746 3.746 0 0 1-3.76-3.657V6.835a3.75 3.75 0 0 1 3.67-3.834h.528"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.01 20.938v-2.893a2.56 2.56 0 0 1 2.554-2.56M3.633 16.967h3.325m-3.325-4.966h3.325M3.633 7.035h3.325"
    />
  </Svg>
);
export default IconlystStickerNoteBroken;
