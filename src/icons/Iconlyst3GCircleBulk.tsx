import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3GCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.233 13.43c0 1.21-.838 1.931-2.24 1.931a3.07 3.07 0 0 1-2.243-.942c-.63-.656-.967-1.596-.926-2.58.037-.9.439-1.763 1.104-2.37.625-.569 1.409-.868 2.236-.817.428.01.877.123 1.312.333a.75.75 0 0 1-.65 1.351 1.8 1.8 0 0 0-.721-.185c-.464-.029-.841.13-1.166.426a1.92 1.92 0 0 0-.617 1.325c-.024.577.162 1.116.51 1.48.3.313.702.48 1.161.48.74 0 .74-.22.74-.432v-.68h-.74a.75.75 0 0 1 0-1.5h1.49a.75.75 0 0 1 .75.75zM8.71 15.35a2.34 2.34 0 0 1-1.665-.689.75.75 0 0 1 1.059-1.062.85.85 0 0 0 .606.251.854.854 0 1 0 0-1.71.748.748 0 0 1-.583-1.222l.621-.767H7.519a.75.75 0 0 1 0-1.5h2.801a.75.75 0 0 1 .583 1.221l-.923 1.141A2.36 2.36 0 0 1 11.066 13a2.356 2.356 0 0 1-2.356 2.35"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3GCircleBulk;
