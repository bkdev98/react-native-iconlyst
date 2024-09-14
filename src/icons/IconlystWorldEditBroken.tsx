import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldEditBroken = ({
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
      d="M11.556 21a9.013 9.013 0 0 1-8.278-8.99c0-3.399 1.887-6.364 4.672-7.898M12.288 3c4.603 0 8.39 3.45 8.934 7.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.626 11.09a21 21 0 0 0-.197-2.212C14.96 5.446 13.732 3 12.29 3c-1.434 0-2.672 2.446-3.141 5.878a22 22 0 0 0-.216 3.13c0 1.107.075 2.167.216 3.142.328 2.38 1.34 4.678 2.409 5.85M5.984 12.019h5.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.44 20.933-1.225.056a.84.84 0 0 1-.849-.624l-.312-1.186a.84.84 0 0 1 .135-.709l3.647-4.97a1.197 1.197 0 0 1 1.674-.257l.958.706c.533.39.647 1.14.256 1.672l-3.647 4.971a.84.84 0 0 1-.636.34"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.951 14.702 2.888 2.122"
    />
  </Svg>
);
export default IconlystWorldEditBroken;
