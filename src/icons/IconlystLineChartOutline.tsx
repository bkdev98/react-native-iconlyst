import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartOutline = ({
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
      d="M19.42 8.813a.75.75 0 0 1 .313 1.014l-2.817 5.335a.75.75 0 0 1-.778.39l-3.492-.538-2.441 2.665a.75.75 0 0 1-.809.199l-4.883-1.771a.75.75 0 0 1 .511-1.41l4.413 1.6 2.374-2.592a.75.75 0 0 1 .667-.234l3.36.518 2.568-4.862a.75.75 0 0 1 1.014-.314"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.565 4.36a.75.75 0 0 1 .067 1.059l-4.171 4.734a.75.75 0 0 1-.925.16l-3.64-2.006L8.664 10.9a.75.75 0 0 1-.568.261H4.5a.75.75 0 0 1 0-1.5h3.251l2.406-2.794a.75.75 0 0 1 .93-.168l3.646 2.01 3.774-4.282a.75.75 0 0 1 1.058-.067"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.508 7.502a1.215 1.215 0 1 1 2.43-.006 1.215 1.215 0 0 1-2.43.006m.463 0-.463.003v-.006h.463zm0 0 .287-.003h-.287v-.066a.75.75 0 1 1 1.5 0v.107a.75.75 0 0 1-.748.75h-.002a.75.75 0 0 1-.75-.75zM13.784 9.48a1.215 1.215 0 1 1 2.43-.006 1.215 1.215 0 0 1-2.43.005m.463-.001-.463.003v-.006h.463zm0 0 .287-.003h-.287v-.065a.75.75 0 0 1 1.5 0v.107a.75.75 0 0 1-.748.75h-.002a.75.75 0 0 1-.75-.75zM6.926 10.202a1.215 1.215 0 1 1 2.43-.006 1.215 1.215 0 0 1-2.43.005m.463-.001-.463.004v-.007h.463zm0 0 .287-.003h-.287v-.065a.75.75 0 0 1 1.5 0v.107a.75.75 0 0 1-.748.75h-.002a.75.75 0 0 1-.75-.75zM8.37 17.175a1.215 1.215 0 1 1 2.43-.007 1.215 1.215 0 0 1-2.43.007m.463 0-.463.003v-.006h.463zm0 0 .287-.003h-.287v-.065a.75.75 0 0 1 1.5 0v.106a.75.75 0 0 1-.748.75h-.002a.75.75 0 0 1-.75-.75zM11.169 14.204a1.215 1.215 0 1 1 2.43-.007 1.215 1.215 0 0 1-2.43.007m.463 0-.463.003v-.006h.463zm0 0 .287-.003h-.287v-.066a.75.75 0 1 1 1.5 0v.107a.75.75 0 0 1-.748.75h-.002a.75.75 0 0 1-.75-.75zM15 14.669a1.215 1.215 0 1 1 2.43-.006 1.215 1.215 0 0 1-2.43.006m.463 0-.462.003v-.006h.463zm0 0 .288-.003h-.287V14.6a.75.75 0 0 1 1.5 0v.107a.75.75 0 0 1-.748.75h-.003a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartOutline;