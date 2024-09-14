import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusCovid19CoronaBroken = ({
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
      d="m12 6 .271-.408a2 2 0 0 0-.043-2.275L12 3M12.002 18l.33.69a2 2 0 0 1-.075 1.871l-.255.439M16.242 7.758l.83-.344a2 2 0 0 0 1.16-1.307l.131-.47M7.764 16.273l-.374.834a2 2 0 0 1-1.125 1.056l-.622.232M18 11.996l.754-.3a2 2 0 0 1 1.468-.004l.778.304M6 11.999l-.981-.32a2 2 0 0 0-1.386.056L3 12M16.242 16.246l1.07.575a2 2 0 0 1 1.01 1.35l.041.196M7.756 7.758l-.335-.797a2 2 0 0 0-1.185-1.115l-.601-.21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 10.615a1.576 1.576 0 1 1-3.152 0 1.576 1.576 0 0 1 3.152 0M14.577 13.583a.583.583 0 1 1-1.165 0 .583.583 0 0 1 1.165 0"
    />
  </Svg>
);
export default IconlystVirusCovid19CoronaBroken;
