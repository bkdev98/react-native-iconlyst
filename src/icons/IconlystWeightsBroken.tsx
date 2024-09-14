import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightsBroken = ({
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
      d="M4.944 14.555c0-.547.431-1 .978-1.028H7.01c.548.028.978.48.98 1.028q.003 2.714 0 5.429a1.02 1.02 0 0 1-.997 1.015H5.94a1.02 1.02 0 0 1-.996-1.015q-.003-1.474-.003-2.95M15.718 19.971A1.03 1.03 0 0 1 14.74 21H13.65a1.03 1.03 0 0 1-.979-1.028q-.005-2.714 0-5.429a1.02 1.02 0 0 1 .996-1.015h1.053c.552.012.996.463.997 1.015l.002 2.883M7.992 17.266h4.65m.031 0h-4.65M3.008 18.729v-2.93M17.654 15.799v2.93M8.617 10.864c.085.545.591.925 1.138.853l1.04-.159c.545-.094.915-.607.833-1.153q-.405-2.685-.818-5.368a1.03 1.03 0 0 0-1.122-.868l-1.077.165A1.03 1.03 0 0 0 7.8 5.496l.473 3.119M18.449 3.862a1.02 1.02 0 0 0-1.139-.853l-1.04.158a1.02 1.02 0 0 0-.833 1.154q.405 2.684.819 5.367a1.03 1.03 0 0 0 1.121.868l1.077-.164a1.03 1.03 0 0 0 .813-1.163q-.195-1.292-.392-2.584M11.22 7.715l4.598-.7m.03-.005-4.598.7M20.55 4.813l.442 2.895M6.514 9.915 6.072 7.02"
    />
  </Svg>
);
export default IconlystWeightsBroken;
