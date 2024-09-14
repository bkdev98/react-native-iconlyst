import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarFavoriteTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.834 11.01v6.174m4.2-9.128v9.128m4.131-2.911v2.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.218 3.618H7.783C4.843 3.618 3 5.7 3 8.646v7.946c0 2.946 1.835 5.026 4.783 5.026h8.434c2.95 0 4.783-2.08 4.783-5.026v-3.946"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.07 2.765.772 1.553c.04.079.114.133.2.145l1.729.25c.07.01.133.046.176.102a.256.256 0 0 1-.029.345l-1.252 1.21a.26.26 0 0 0-.076.234l.3 1.71a.26.26 0 0 1-.217.296.3.3 0 0 1-.172-.026l-1.539-.807a.26.26 0 0 0-.247 0l-1.55.812a.27.27 0 0 1-.36-.11q-.041-.08-.027-.167l.3-1.71a.26.26 0 0 0-.076-.232l-1.259-1.211a.263.263 0 0 1 0-.371v0a.3.3 0 0 1 .15-.074l1.73-.252a.27.27 0 0 0 .2-.145l.77-1.552a.264.264 0 0 1 .357-.118.27.27 0 0 1 .12.118"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChart3BarFavoriteTwoTone;
