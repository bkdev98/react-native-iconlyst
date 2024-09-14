import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperLight = ({
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
      d="M5.683 4.643h9.786c1.655 0 2.684 1.167 2.684 2.82v6.228c0 1.653-1.03 2.822-2.685 2.822H5.683C4.03 16.513 3 15.344 3 13.69V7.463c0-1.653 1.034-2.82 2.683-2.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.15 7.484h.17c1.651 0 2.68 1.17 2.68 2.822v6.228c0 1.652-1.029 2.822-2.69 2.822H8.535c-1.66 0-2.69-1.17-2.69-2.822M5.707 13.566h1.181"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.504 10.578a1.926 1.926 0 1 0-3.85 0 1.926 1.926 0 0 0 3.85 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.449 7.59h-1.181"
    />
  </Svg>
);
export default IconlystMoneyPaperLight;
