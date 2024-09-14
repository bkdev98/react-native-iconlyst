import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusCovid19CoronaTwoTone = ({
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
      d="m12.41 6 .271-.408a2 2 0 0 0-.042-2.275L12.41 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.412 18 .331.69a2 2 0 0 1-.075 1.871l-.256.439M16.652 7.758l.83-.344a2 2 0 0 0 1.16-1.307l.132-.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.174 16.273-.374.834a2 2 0 0 1-1.125 1.056l-.622.232M18.41 11.996l.754-.3a2 2 0 0 1 1.468-.004l.778.304"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.41 11.999-.981-.32a2 2 0 0 0-1.386.056L3.41 12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.652 16.246 1.07.575a2 2 0 0 1 1.01 1.35l.042.196"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.166 7.758-.334-.797a2 2 0 0 0-1.186-1.115l-.601-.21"
    />
    <Circle
      cx={12.41}
      cy={12}
      r={6}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={10.834}
      cy={10.615}
      r={1.576}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Circle
      cx={14.405}
      cy={13.583}
      r={0.583}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystVirusCovid19CoronaTwoTone;
