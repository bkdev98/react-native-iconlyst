import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDownloadBroken = ({
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
      d="m9.852 5.146 2.008 2.009 2.008-2.009M11.86 7.155V3M6.563 12.07H7.88M17.44 18.406H16.12M12 21h5.463c1.848 0 2.997-1.305 2.997-3.15v-5.224c0-1.846-1.155-3.15-2.997-3.15H6.538c-1.848 0-2.998 1.304-2.998 3.15v5.224c0 1.845 1.15 3.15 2.999 3.15H8.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 13.09a2.15 2.15 0 1 0 2.151 2.15"
    />
  </Svg>
);
export default IconlystMoneyPaperDownloadBroken;
