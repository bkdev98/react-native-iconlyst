import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone2Outline = ({
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
      d="M9.942 16.795a.75.75 0 0 1 1.06-.002l1.838 1.829a.75.75 0 0 1 .002 1.061l-1.847 1.847a.75.75 0 0 1-1.06-1.06l1.314-1.316-1.304-1.298a.75.75 0 0 1-.003-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.819 12.44a.75.75 0 0 1-.432.97c-.825.316-1.446.683-1.849 1.056-.401.373-.532.698-.532.959 0 .246.118.552.48.905.364.355.93.71 1.69 1.025 1.518.627 3.666 1.033 6.079 1.033a.75.75 0 0 1 0 1.5c-2.56 0-4.912-.429-6.651-1.147-.868-.359-1.62-.805-2.165-1.337-.548-.535-.933-1.204-.933-1.98 0-.813.421-1.509 1.012-2.057.589-.547 1.399-1 2.332-1.358a.75.75 0 0 1 .969.432M17.761 12.464a.75.75 0 0 1 .973-.423c.91.358 1.699.81 2.274 1.352.575.544.986 1.231.986 2.032 0 1.14-.817 2.037-1.827 2.67-1.038.652-2.459 1.148-4.076 1.45a.75.75 0 0 1-.276-1.474c1.503-.281 2.727-.727 3.554-1.246.855-.537 1.125-1.04 1.125-1.4 0-.254-.127-.573-.516-.94-.39-.37-.993-.733-1.794-1.049a.75.75 0 0 1-.423-.972"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.37 6.5a4.25 4.25 0 0 1 4.25-4.25h5.335a4.25 4.25 0 0 1 4.25 4.25v8.706a.75.75 0 1 1-1.5 0V6.5a2.75 2.75 0 0 0-2.75-2.75H9.619A2.75 2.75 0 0 0 6.87 6.5l.001 8.706a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.191 6.568a.75.75 0 0 1 .75-.75h2.693a.75.75 0 0 1 0 1.5H10.94a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotatePhone2Outline;
