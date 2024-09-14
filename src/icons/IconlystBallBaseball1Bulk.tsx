import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball1Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 11.821c0 .5-.03 1.01-.09 1.5a9.53 9.53 0 0 1-2.69 5.4 9.4 9.4 0 0 1-5.4 2.69q-.645.09-1.32.09h-.18a9.48 9.48 0 0 1-6.54-2.78 9.54 9.54 0 0 1-2.78-6.54c0-.5.03-1.01.09-1.5a9.53 9.53 0 0 1 2.69-5.4 9.4 9.4 0 0 1 5.4-2.69q.645-.09 1.32-.09h.18c2.47.05 4.78 1.03 6.54 2.78a9.54 9.54 0 0 1 2.78 6.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 11.82c0 .5-.03 1.01-.09 1.5h-.02c-.35 0-.7-.02-1.05-.05a.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.33.03.67.04 1.01.04M12.22 3.46a.75.75 0 0 1-.68.81c-.02 0-.05.01-.07.01a.75.75 0 0 1-.74-.69c-.03-.33-.05-.67-.05-1q.645-.09 1.32-.09h.18c0 .32.01.64.04.96M11.721 5.118a.75.75 0 0 0-.468.952c.17.494.375.98.613 1.441a.75.75 0 1 0 1.334-.686 9 9 0 0 1-.527-1.239.75.75 0 0 0-.952-.468M14.88 9.124a10 10 0 0 1-.5-.54.75.75 0 1 0-1.14.974q.273.319.58.627.29.29.597.553a.75.75 0 0 0 1.057-.084.75.75 0 0 0-.083-1.057 9 9 0 0 1-.51-.473M18.34 11.303a9 9 0 0 1-1.195-.518.75.75 0 0 0-.692 1.331c.443.231.91.434 1.39.602a.746.746 0 0 0 .956-.458.75.75 0 0 0-.458-.957M13.32 21.41q-.645.09-1.32.09h-.18c0-.34-.01-.68-.05-1.01-.04-.42.27-.78.68-.82.4-.05.78.26.82.67.03.35.05.71.05 1.07M4.27 11.54a.75.75 0 0 1-.75.68h-.07a10 10 0 0 0-.95-.04c0-.5.03-1.01.09-1.5.33 0 .67.02 1 .05.42.04.72.4.68.81M7.51 11.867a11 11 0 0 0-1.44-.612.75.75 0 0 0-.483 1.42c.424.144.84.321 1.238.526q.167.084.343.083a.749.749 0 0 0 .343-1.417M10.735 14.418q-.263-.307-.557-.6a11 11 0 0 0-.624-.576.75.75 0 0 0-.973 1.14q.278.24.54.498.249.25.474.514a.751.751 0 0 0 1.14-.976M12.254 18.802a.75.75 0 0 0 .462-.955 11 11 0 0 0-.602-1.392.75.75 0 1 0-1.332.69c.204.392.378.794.517 1.195a.75.75 0 0 0 .955.462"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBaseball1Bulk;