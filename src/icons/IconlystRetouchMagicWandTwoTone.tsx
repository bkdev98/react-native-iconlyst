import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 8.025v7.948c0 2.944-1.843 5.021-4.787 5.021H8.278c-2.945 0-4.778-2.077-4.778-5.021V8.025c0-2.945 1.843-5.021 4.778-5.021h8.435c2.944 0 4.787 2.076 4.787 5.02"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.043 20.986 6.133-6.972a2.04 2.04 0 0 0-.184-2.887l-1.112-.975a2.044 2.044 0 0 0-2.897.176l-1.364 1.55-4.944 5.597"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.617 11.879 4.174 3.676M17.185 10.084v-.04M15.846 16.865v.04M7.327 7.35v-.04M16.727 7.158v-.039"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRetouchMagicWandTwoTone;
