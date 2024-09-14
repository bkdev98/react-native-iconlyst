import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUnlockBroken = ({
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
      d="M11.016 17.758H8.032c-2.948 0-4.782-2.082-4.782-5.027V8.676c0-2.945 1.843-5.026 4.782-5.026h.634M21.25 10.914v-2.24c0-2.945-1.835-5.026-4.783-5.026h-4.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.839 20.997h-2.843c-.778 0-1.41-.632-1.41-1.41V17.99c0-.779.632-1.41 1.41-1.41h2.843a1.41 1.41 0 0 1 1.41 1.41v1.596c0 .78-.631 1.411-1.41 1.411"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.723 16.61v-1.057a1.695 1.695 0 0 1 3.028-1.023M12.25 10.659v-.064m-.26.05a.26.26 0 1 1 .52 0 .26.26 0 0 1-.52 0M16.156 10.659v-.064m-.26.05a.26.26 0 1 1 0 0M8.343 10.659v-.064m-.259.05a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordUnlockBroken;
