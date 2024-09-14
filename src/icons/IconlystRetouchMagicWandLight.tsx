import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandLight = ({
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
      d="M21 8.025v7.948c0 2.944-1.843 5.021-4.787 5.021H7.778C4.833 20.994 3 18.917 3 15.973V8.025C3 5.08 4.843 3.004 7.778 3.004h8.435C19.157 3.004 21 5.08 21 8.024"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.543 20.986 6.133-6.972a2.04 2.04 0 0 0-.184-2.887l-1.112-.975a2.044 2.044 0 0 0-2.897.176l-1.364 1.55-4.944 5.597M8.117 11.879l4.174 3.676M16.685 10.084v-.04M15.346 16.865v.04M6.827 7.35v-.04M16.227 7.158v-.039"
    />
  </Svg>
);
export default IconlystRetouchMagicWandLight;
