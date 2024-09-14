import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageAnalyze1Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.81 3.897C4.793 2.841 6.195 2.25 7.85 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.501 1.486 4.128v7.948c0 1.627-.508 3.078-1.486 4.128-.984 1.057-2.387 1.648-4.047 1.648H7.851c-1.659 0-3.061-.59-4.045-1.648-.979-1.05-1.488-2.5-1.488-4.128V8.026c0-1.628.512-3.078 1.491-4.129m.008 6.345v5.732c0 1.317.41 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.084-1.789 1.084-3.106v-5.732zm16.5-1.5h-16.5v-.716c0-1.316.41-2.38 1.088-3.106.672-.72 1.662-1.17 2.945-1.17h8.435c1.289 0 2.278.45 2.948 1.17.676.726 1.084 1.789 1.084 3.106zM5.607 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75H8.9a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m1.49 5.92a.75.75 0 0 1 .75.75v3.777a.75.75 0 0 1-1.5 0V13.22a.75.75 0 0 1 .75-.75m-3.307 1.417a.75.75 0 0 1 .75.75v2.36a.75.75 0 0 1-1.5 0v-2.36a.75.75 0 0 1 .75-.75m6.614 1.252a.75.75 0 0 1 .75.75v1.108a.75.75 0 0 1-1.5 0v-1.108a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageAnalyze1Outline;
