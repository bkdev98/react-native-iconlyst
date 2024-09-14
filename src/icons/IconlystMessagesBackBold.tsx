import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBackBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.84 13.364h-5.262l1.57 1.57a.749.749 0 1 1-1.06 1.06l-2.85-2.848a.8.8 0 0 1-.165-.246.8.8 0 0 1-.044-.22c-.002-.022-.014-.043-.014-.066v-.002q0-.151.059-.29c.02-.048.058-.087.089-.131.025-.037.04-.078.073-.11l2.852-2.85a.75.75 0 1 1 1.06 1.063l-1.572 1.57h5.265a.75.75 0 0 1 0 1.5m3.18-7.49a9.42 9.42 0 0 0-6.718-2.79 9.42 9.42 0 0 0-6.717 2.79C2.779 8.688 2.014 13.01 3.672 16.601c.196.492.315.811.315 1.093 0 .334-.141.749-.277 1.15-.265.78-.565 1.663.077 2.308.649.65 1.532.344 2.312.075.397-.137.807-.279 1.132-.28.292 0 .657.146 1.08.317A9.514 9.514 0 0 0 19.02 19.35c3.703-3.715 3.703-9.76 0-13.476"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBackBold;
