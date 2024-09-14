import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUnlockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.874V8.635c0-2.945-1.835-5.026-4.783-5.026H7.782C4.843 3.61 3 5.69 3 8.635v4.055c0 2.945 1.834 5.027 4.782 5.027h2.984"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.589 20.956h-2.843c-.778 0-1.41-.632-1.41-1.41v-1.597c0-.779.632-1.41 1.41-1.41h2.843a1.41 1.41 0 0 1 1.41 1.41v1.596c0 .78-.631 1.411-1.41 1.411"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.473 16.569v-1.057a1.695 1.695 0 0 1 3.028-1.023M12 10.618v-.064zm-.26-.013a.26.26 0 1 1 .52-.002.26.26 0 0 1-.52.002M15.906 10.618v-.064zm-.26-.013a.26.26 0 1 1 .521-.001.26.26 0 0 1-.52 0M8.093 10.618v-.064zm-.259-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordUnlockLight;
