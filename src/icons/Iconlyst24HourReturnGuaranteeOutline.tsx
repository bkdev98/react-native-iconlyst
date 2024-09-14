import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourReturnGuaranteeOutline = ({
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
      d="M19.642 4.164a.75.75 0 0 1 .75.75l.002 2.232a.75.75 0 0 1-.75.751l-2.22.002a.75.75 0 0 1 0-1.5l1.47-.001-.002-1.483a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.811 3.739c4.48-2.779 10.343-1.454 13.2 2.945a.75.75 0 0 1-1.257.818A8.167 8.167 0 0 0 7.602 5.014a8.15 8.15 0 0 0-3.853 6.544.75.75 0 0 1-1.498-.074A9.65 9.65 0 0 1 6.81 3.74M7.324 16.85a.75.75 0 0 1-.75.752h-1.47l.001 1.484a.75.75 0 0 1-1.5.001l-.001-2.233a.75.75 0 0 1 .749-.75l2.22-.002a.75.75 0 0 1 .75.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.037 11.728a.75.75 0 0 1 .712.786 9.65 9.65 0 0 1-4.56 7.745c-4.48 2.778-10.343 1.453-13.2-2.946a.75.75 0 1 1 1.257-.817 8.167 8.167 0 0 0 11.152 2.488 8.15 8.15 0 0 0 3.853-6.544.75.75 0 0 1 .786-.713"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.728 8.38c.31.1.52.388.52.714v3.351h.275a.75.75 0 1 1 0 1.5h-.275v.46a.75.75 0 1 1-1.5 0v-.46h-2.2a.75.75 0 0 1-.608-1.188l2.95-4.101a.75.75 0 0 1 .838-.276m-1.716 4.065h.736v-1.024zM9.44 9.863a.664.664 0 0 0-.665.664.75.75 0 0 1-1.5 0 2.164 2.164 0 0 1 4.328 0c0 .676-.282 1.183-.646 1.569-.303.32-.689.583-1 .794l-.094.064c-.37.252-.644.459-.824.682h1.814a.75.75 0 0 1 0 1.5H8.026a.75.75 0 0 1-.75-.75c0-1.478 1.054-2.202 1.74-2.67l.07-.048c.346-.236.596-.406.78-.601.166-.177.237-.332.237-.54a.664.664 0 0 0-.664-.664"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst24HourReturnGuaranteeOutline;
