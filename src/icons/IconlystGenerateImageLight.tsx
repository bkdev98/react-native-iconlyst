import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateImageLight = ({
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
      d="M12.377 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h8.434C19.165 21 21 18.919 21 15.974v-5.029M13.807 8.775h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.982 16.123 2.69-4.37a.713.713 0 0 1 1.188-.039l1.681 2.361a.712.712 0 0 0 1.123.05l.604-.708a.713.713 0 0 1 1.151.09l1.601 2.617a.713.713 0 0 1-.608 1.085H7.589a.713.713 0 0 1-.607-1.086"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.117 8.775.112-.304A4.18 4.18 0 0 1 20.697 6L21 5.887l-.303-.112a4.18 4.18 0 0 1-2.468-2.471L18.117 3l-.112.304a4.18 4.18 0 0 1-2.468 2.471l-.303.112.303.113a4.18 4.18 0 0 1 2.468 2.471z"
    />
  </Svg>
);
export default IconlystGenerateImageLight;
